"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FacebookCircle, TwitterRound, LinkedinRound, DiscordFill, Mail, CallAlt, Location } from "@/components/icons";
import patternA from "@/images/decoration/pattern-a.png";
import logo from "@/images/logo2x.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type FooterProps = {
  className?: string;
};

const FOOTER_LINKS = [
  {
    title: "Pages",
    links: [
      { label: "Services", href: "/service" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/packages" },
      { label: "Blog", href: "/blog" },
      { label: "Blog Post", href: "/blog/post-001" },
    ]
  },
  {
    title: "Utility Pages",
    links: [
      { label: "Styleguide", href: "" },
      { label: "Login", href: "" },
      { label: "Sign up", href: "" },
      { label: "Reset Password", href: "" },
      { label: "404 Not Found", href: "" },
    ]
  }
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: FacebookCircle },
  { href: "https://twitter.com", icon: TwitterRound },
  { href: "https://discord.com", icon: DiscordFill },
  { href: "https://linkedin.com", icon: LinkedinRound },
];

const CONTACT_INFO = [
  { icon: Mail, label: 'contact@solurax.com', href: "mailto:contact@solurax.com" },
  { icon: CallAlt, label: '1-800-222-4545', href: "tel:1-800-222-4545" },
  { icon: Location, label: 'Location', href: "https://maps.google.com" },
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
                <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label="home">
                  <Image loading="eager" src={logo} width={302} height={72} alt="Logo" className="w-auto h-10" />
                </Link>
                <p className="mt-4 text-lg/relaxed text-white">The global energy landscape will change more in the next 10 years than in the previous hundred. As the world’s energy sector moves away</p>
                <ul className="flex flex-wrap gap-4 pt-7 mt-auto">
                  {SOCIAL_LINKS.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index}>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-colors border rounded-full group size-10 border-white/70 hover:border-primary">
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
                <div className="text-xl/8 font-bold text-white mb-6">Contact Info</div>
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
            <p className="text-lg/normal text-white">&copy; 2011 - 2026 <a href="#" className="font-medium transition-colors text-white hover:text-primary">Solurax</a>. All Rights Reserved. </p>
            <ul className="flex gap-y-2 gap-x-6">
              <li><Link className="text-lg/normal text-white hover:text-primary transition-colors" href="">Terms and Conditions</Link></li>
              <li><Link className="text-lg/normal text-white hover:text-primary transition-colors" href="">Privacy Policy</Link></li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
