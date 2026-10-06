"""Acceptance smoke check for the static demo; run after `bun run build`."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import hashlib, json, re

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'out'

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.links=[]; self.assets=[]; self.text=[]; self.lang=None
        self.robots=False; self.hidden=0; self.tags=[]; self.contact_disabled=False
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='html': self.lang=a.get('lang')
        if tag=='meta' and a.get('name')=='robots': self.robots='noindex' in a.get('content','')
        if tag=='a': self.links.append(a.get('href',''))
        if tag in ('img','script','link'):
            v=a.get('src') or a.get('href')
            if v and v.startswith('/_next/'): self.assets.append(v)
        if tag=='button' and 'disabled' in a: self.contact_disabled=True
        if tag in ('script','style'): self.hidden+=1
    def handle_endtag(self, tag):
        if tag in ('script','style'): self.hidden=max(0,self.hidden-1)
    def handle_data(self, text):
        if not self.hidden: self.text.append(text)

files=sorted(OUT.rglob('*.html')); assert files, 'Build the website first'
failures=[]; pages={}; checked_links=0;checked_assets=0
for file in files:
    relative=file.relative_to(OUT); route='/' if str(relative)=='index.html' else '/'+str(relative).removesuffix('.html')
    page=Page(file.read_text()); pages[route]=page
    text=' '.join(page.text)
    if page.lang!='vi' or not page.robots: failures.append(f'{route}: language or noindex missing')
    if re.search(r'Solurax|1-800-222|support@website|contact@solurax|Open menu|Close menu|This page could not be found|Contact Us|About Us|Our Blog|Pricing Plan|Our Services|Energy Services|Energy Projects|Details and specifications',text,re.I): failures.append(f'{route}: old/demo English content')
    if 'Bống Media' not in text or '0963556518' not in text or 'Lê Thanh Nghị, Thành phố Hải Phòng' not in text: failures.append(f'{route}: brand/contact missing')
    for href in page.links+page.assets:
        path=unquote(urlsplit(href).path)
        if not href.startswith('/') or href.startswith('//'): continue
        target=OUT/path.lstrip('/')
        if not (target.is_file() or target.with_suffix('.html').is_file() or (target/'index.html').is_file()): failures.append(f'{route}: missing local target {href}')
        if href in page.links:checked_links+=1
        else:checked_assets+=1

expected=['/','/home-2','/home-3','/about','/contact','/faqs','/packages','/project','/service','/blog']
for route in expected: assert route in pages, route
assert len([p for p in pages if p.startswith('/service/')])==6
assert len([p for p in pages if p.startswith('/project/')])==10
assert len([p for p in pages if p.startswith('/blog/')])==13
contact=pages['/contact'];assert contact.contact_disabled
assert 'chưa gửi thông tin' in ' '.join(contact.text)
assert 'tel:0963556518' in contact.links and 'mailto:admin@leviathan.id.vn' in contact.links
assert 'https://www.facebook.com/chupanhkyyeubongmedia' in contact.links
assert hashlib.sha256((ROOT/'src/images/bong-media-avatar.jpg').read_bytes()).digest()==hashlib.sha256((ROOT/'src/app/icon.jpg').read_bytes()).digest()
print(json.dumps({'html_pages':len(files),'service_details':6,'project_details':10,'blog_details':13,'internal_links':checked_links,'local_assets':checked_assets,'failures':failures},ensure_ascii=False,indent=2))
assert not failures, 'Static acceptance failed'
