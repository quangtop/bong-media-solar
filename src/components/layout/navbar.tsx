"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva, type VariantProps } from "class-variance-authority"
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { Overlay } from "@/components/ui/overlay";
import { useSetHeightRoot } from "@/hooks/useSetHeightRoot";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface DropdownChild {
  label: string;
  href?: string;
  icon?: string;
  children?: DropdownChild[];
}
interface NavItem {
  label: string;
  href?: string;
  children?: DropdownChild[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Trang chủ",
    href: "/",
    children: [
      { label: "Trang chủ 1", href: "/" },
      { label: "Trang chủ 2", href: "/home-2" },
      { label: "Trang chủ 3", href: "/home-3" },
    ],
  },
  { label: "Giới thiệu", href: "/about" },
  { label: "Dịch vụ", href: "/service" },
  {
    label: "Các trang",
    children: [
      { label: "Dự án", href: "/project" },
      { label: "Bài viết", href: "/blog" },
      { label: "Các gói giải pháp", href: "/packages" },
      { label: "Câu hỏi thường gặp", href: "/faqs" },
    ],
  },
  { label: "Liên hệ", href: "/contact" },
];

const linkStyle = cva(
  "relative flex items-center px-4 py-2 gap-1.5 justify-between whitespace-nowrap text-base font-medium rounded-lg transition-all duration-200",
  {
    variants: {
      active: {
        true: "text-primary",
        false: "text-white hover:text-primary"
      }
    }
  }
);

const subLinkStyle = cva("flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200", {
  variants: {
    active: {
      true: "text-primary",
      false: "text-white hover:text-primary hover:ps-4"
    }
  }
});

/* Helper functions to check active page status */
const isLinkActive = (href: string, pathname: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  if (href.startsWith("/#") || href.startsWith("#")) {
    return false; // section links are not page active triggers
  }
  return pathname === href;
};

const isDropdownActive = (items: DropdownChild[], pathname: string): boolean => {
  return items.some((item) => {
    if (item.children) {
      return isDropdownActive(item.children, pathname);
    }
    return isLinkActive(item.href || "", pathname);
  });
};

const desktopBreakpoint = 1280;

function ChevronDown({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg className={`transition-transform duration-300 ${open ? "rotate-180" : ""} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

interface NestedSubmenuProps {
  label: string;
  icon?: string;
  items: DropdownChild[];
  onNavigate: () => void;
  align?: "left" | "right";
}

function NestedSubmenu({ label, icon, items, onNavigate, align = "right" }: NestedSubmenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  /* close on outside click (desktop) */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (typeof window !== "undefined" && window.innerWidth < desktopBreakpoint) return;
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= desktopBreakpoint) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= desktopBreakpoint) {
      setOpen(false);
    }
  };

  const active = isDropdownActive(items, pathname);

  /* Only pre-open mobile accordion if child is active; keep closed on desktop */
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(window.innerWidth < desktopBreakpoint && active);
    });
    return () => cancelAnimationFrame(frame);
  }, [active, pathname]);


  const desktopStyle = cva("hidden min-[1280px]:block absolute top-0 w-48 transition-all duration-250", {
    variants: {
      open: {
        true: "opacity-100 scale-100 translate-x-0 pointer-events-auto",
        false: "opacity-0 scale-95 pointer-events-none"
      },
      align: {
        left: "left-full ps-3 origin-left",
        right: "right-full pe-3 origin-right"
      }
    },
    compoundVariants: [
      {
        open: false,
        align: "left",
        class: "-translate-x-2"
      },
      {
        open: false,
        align: "right",
        class: "translate-x-2"
      }
    ]
  });

  const mobileStyle = cva("min-[1280px]:hidden overflow-hidden transition-all duration-300 ease-in-out", {
    variants: {
      open: {
        true: "max-h-125 opacity-100",
        false: "max-h-0 opacity-0"
      }
    }
  });

  return (
    <li ref={ref} className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Trigger button */}
      <button type="button" onClick={() => setOpen((v) => !v)} className={cn(linkStyle({ active: active || open }), "w-full text-start")} aria-expanded={open}>
        <span className="flex items-center gap-3">
          {label}
        </span>
        <ChevronDown open={open} className={`h-3.5 w-3.5 ${open ? "rotate-180 min-[1280px]:rotate-90" : "rotate-0 " + (align === "right" ? "min-[1280px]:rotate-90" : "min-[1280px]:-rotate-90")}`} />
      </button>

      {/* ── Desktop: Submenu flying out to the left/right ── */}
      <div className={desktopStyle({ open, align })}>
        <div className="w-full rounded-xl border border-white/10 bg-dark/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,.5)]">
          <ul className="p-1.5 flex flex-col gap-0.5">
            {items.map((item) => {
              const childActive = isLinkActive(item.href || "", pathname);
              return (
                <li key={item.label}>
                  <Link href={item.href || "#"} onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })} >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ── Mobile: Submenu accordion ── */}
      <div className={mobileStyle({ open })} >
        <ul className="flex flex-col gap-0.5 ps-3 pb-1 pt-1">
          {items.map((item) => {
            const childActive = isLinkActive(item.href || "", pathname);
            return (
              <li key={item.label}>
                <Link href={item.href || "#"} onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })} >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

interface DropdownItemProps {
  label: string;
  items: DropdownChild[];
  onNavigate: () => void;
  align?: "left" | "right";
}

function DropdownItem({ label, items, onNavigate, align = "left" }: DropdownItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  /* close on outside click (desktop) */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Only close on outside click in desktop view
      if (typeof window !== "undefined" && window.innerWidth < desktopBreakpoint) {
        return;
      }
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= desktopBreakpoint) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= desktopBreakpoint) {
      setOpen(false);
    }
  };

  const active = isDropdownActive(items, pathname);

  /* Only pre-open mobile accordion if child is active; keep closed on desktop */
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(window.innerWidth < desktopBreakpoint && active);
    });
    return () => cancelAnimationFrame(frame);
  }, [active, pathname]);

  const desktopStyle = cva("hidden min-[1280px]:block absolute top-full w-50 pt-3 transition-all duration-250", {
    variants: {
      open: {
        true: "opacity-100 scale-100 translate-y-0 pointer-events-auto",
        false: "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      },
      align: {
        left: "start-0 origin-top-left",
        right: "end-0 origin-top-right"
      }
    },
  });

  const mobileStyle = cva("min-[1280px]:hidden overflow-hidden transition-all duration-300 ease-in-out", {
    variants: {
      open: {
        true: "max-h-125 opacity-100",
        false: "max-h-0 opacity-0"
      }
    }
  });

  return (
    <li ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Trigger button */}
      <button type="button" onClick={() => setOpen((v) => !v)} className={cn(linkStyle({ active: active || open }), "w-full")} aria-expanded={open}>
        <span className="flex-1 text-start min-[1280px]:text-center">{label}</span>
        <ChevronDown open={open} className="h-4 w-4 min-[1280px]:h-3.5 min-[1280px]:w-3.5" />
      </button>

      {/* ── Desktop: floating flyout ── */}
      <div className={desktopStyle({ open, align })} >
        <div className="w-full rounded-xl border border-white/10 bg-dark/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,.5)]">
          <ul className="p-1.5 flex flex-col gap-0.5">
            {items.map((item) => {
              if (item.children) {
                return (
                  <NestedSubmenu key={item.label} label={item.label} icon={item.icon} items={item.children} onNavigate={onNavigate} align={align} />
                );
              }
              const childActive = isLinkActive(item.href || "", pathname);
              return (
                <li key={item.label}>
                  <Link href={item.href || "#"} onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })} >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ── Mobile: inline accordion ── */}
      <div className={mobileStyle({ open })}>
        <ul className="flex flex-col gap-0.5 ps-3 pb-1 pt-1">
          {items.map((item) => {
            if (item.children) {
              return (
                <NestedSubmenu key={item.label} label={item.label} icon={item.icon} items={item.children} onNavigate={onNavigate} align={align} />
              );
            }
            const childActive = isLinkActive(item.href || "", pathname);
            return (
              <li key={item.label}>
                <Link href={item.href || "#"} onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })}  >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

function NavContent({ onNavigate, className }: { onNavigate: () => void; className?: string; }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item, index) => {
        if (item.children) {
          const isLast = index === NAV_ITEMS.length - 1;
          return (
            <DropdownItem key={item.label} label={item.label} items={item.children} onNavigate={onNavigate} align={isLast ? "right" : "left"} />
          );
        }

        const active = isLinkActive(item.href || "#", pathname);

        return (
          <li className="relative" key={item.label}>
            <Link href={item.href || "#"} onClick={onNavigate} className={linkStyle({ active })} >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function HamBurgerIcon({ open, setOpen, className }: { open: boolean; setOpen: (v: boolean) => void; className?: string }) {
  return (
    <button type="button" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} onClick={() => setOpen(!open)}
      className={cn("relative z-50 flex min-[1280px]:hidden h-11 w-11 flex-col items-center justify-center gap-1.25 rounded-full transition-colors duration-200 bg-white/10", className)} >
      <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 origin-center ${open ? "translate-y-1.75 rotate-45" : ""}`} />
      <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
      <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 origin-center ${open ? "-translate-y-1.75 -rotate-45" : ""}`} />
    </button>
  );
}

/* ─────────────────────────────────────────────
   Menubar – top-level shell
   ───────────────────────────────────────────── */
export default function Menubar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menubarRef = useRef<HTMLDivElement>(null);

  /* scroll listener for backdrop blur */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  useSetHeightRoot(menubarRef, '--menubar-height');

  const menuBarWrapStyle = cva(
    "border flex items-center rounded-full transition-all linear min-[1470px]:-mx-10 mx-auto",
    {
      variants: {
        scrolled: {
          true: "border-darker bg-darker/85 backdrop-blur-xl p-3.5 min-[1280px]:p-4",
          false: "border-white/10 bg-white/9 p-4 min-[1280px]:p-5"
        }
      }
    }
  )

  const drawerStyle = cva(
    "fixed top-0 start-0 z-60 flex h-full w-70 max-w-[85vw] flex-col bg-darker/90 backdrop-blur-2xl transition-transform duration-300 ease-in-out min-[1280px]:hidden",
    {
      variants: {
        open: {
          true: "translate-x-0",
          false: "-translate-x-full"
        }
      }
    }
  )

  return (
    <>
      <ScrollReveal
        ref={menubarRef}
        direction="top"
        delay={100}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-5 xl:pt-8"
      >
        <div className="container">
          <div className={menuBarWrapStyle({ scrolled })}>
            <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label="Trang chủ Bống Media">
              <BrandLogo />
            </Link>
            <nav className="items-center hidden w-full gap-6 min-[1280px]:flex" >
              <NavContent className="flex items-center gap-1 mx-auto min-[1280px]:gap-2" onNavigate={closeMobile} />
              <Link href="/contact">
                <Button className="text-base" variant="default" pill>
                  Liên hệ ngay
                </Button>
              </Link>
            </nav>
            <HamBurgerIcon className="ml-auto size-10" open={mobileOpen} setOpen={setMobileOpen} />
          </div>
        </div>{/* ── .container ── */}
      </ScrollReveal>
      <Overlay className="min-[1280px]:hidden z-51" open={mobileOpen} onClose={closeMobile} />
      <aside className={drawerStyle({ open: mobileOpen })} aria-hidden={!mobileOpen} inert={!mobileOpen}>
        <nav className="flex flex-col flex-1 px-6 pt-10 pb-10">
          <NavContent className="flex flex-col flex-1 gap-1" onNavigate={closeMobile} />
          <Link href="/contact">
            <Button className="text-base" variant="default">
              Liên hệ ngay
            </Button>
          </Link>
        </nav>
      </aside>
    </>
  );
}
