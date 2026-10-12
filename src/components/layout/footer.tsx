"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FacebookCircle, Mail, CallAlt, Location } from "@/components/icons";
import patternA from "@/images/decoration/pattern-a.png";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { BRAND, BRAND_MAP_URL } from "@/data/brand";

type FooterProps = {
  className?: string;
};

const FOOTER_LINKS = [
  { title: "Khám phá", links: [
    { label: "Dịch vụ", href: "/service" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Bảng giá", href: "/packages" },
    { label: "Bài viết", href: "/blog" },
  ] },
  { title: "Thông tin", links: [
    { label: "Dự án", href: "/project" },
    { label: "Câu hỏi thường gặp", href: "/faqs" },
    { label: "Liên hệ", href: "/contact" },
  ] },
];

const SOCIAL_LINKS = [{ href: BRAND.facebook, icon: FacebookCircle, label: "Facebook Bống Media" }];
const CONTACT_INFO = [
  { icon: CallAlt, label: BRAND.phone, href: BRAND.phoneHref },
  { icon: Mail, label: BRAND.email, href: BRAND.emailHref },
  { icon: Location, label: BRAND.address, href: BRAND_MAP_URL },
];

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("relative w-full", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-linear-to-r from-darker to-dark">
        <Image className="absolute bottom-0 inset-0 opacity-4" alt="" src={patternA} width={1920} height={636} />
      </div>
      <div className="relative py-10 md:py-15">
        <div className="container">
          <div className="justify-between row">
            <div className="lg:column-4 me-auto">
              <ScrollReveal delay={100} className="flex flex-col h-full">
                <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label="Trang chủ">
                  <BrandLogo />
                </Link>
                <p className="mt-4 text-lg/relaxed text-white">Ngành năng lượng toàn cầu sẽ thay đổi trong 10 năm tới nhiều hơn cả một thế kỷ trước. Chuyển dịch sang năng lượng tái tạo mở ra cơ hội cho một tương lai bền vững.</p>
                <ul className="flex flex-wrap gap-4 pt-7 mt-auto">
                  {SOCIAL_LINKS.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index}>
                        <a href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-colors border rounded-full group size-10 border-white/70 hover:border-primary">
                          <Icon className="transition-colors size-5 fill-white/70 group-hover:fill-primary" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </ScrollReveal>
            </div>
            <div className="md:column-6 lg:column-3">
              <ScrollReveal delay={150}>
                <div className="text-xl/8 font-bold text-white mb-6">Thông tin liên hệ</div>
                <ul className="flex flex-col gap-4">
                  {CONTACT_INFO.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="flex gap-2.5">
                        <Icon className="fill-primary size-5 mt-1.25" />
                        <Link className="text-lg/7.5 text-white hover:text-primary transition-colors" href={item.href}>{item.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </ScrollReveal>
            </div>
            {FOOTER_LINKS.map((item, index) => (
              <div key={index} className="sm:column-6 md:column-3 lg:column-2">
                <ScrollReveal delay={200 + index * 50}>
                  <div className="text-xl/8 font-bold text-white mb-6">{item.title}</div>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((lItem, lIndex) => (
                      <li key={lIndex}><Link className="text-lg/7.5 text-white hover:text-primary transition-colors" href={lItem.href}>{lItem.label}</Link></li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>{/* Section Content */}
      <div className="py-5 border-t border-white/16">
        <div className="container">
          <ScrollReveal mode="fade" delay={100} className="flex flex-col lg:flex-row items-center flex-wrap gap-x-10 gap-y-2 justify-between">
            <p className="text-lg/normal text-white">&copy; 2011 - 2026 <Link href="/" className="font-medium transition-colors text-white hover:text-primary">Bống Media</Link>. Bảo lưu mọi quyền. </p>
            <p className="text-sm text-white/70">Bản demo giới thiệu giải pháp điện mặt trời.</p>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
