import { ComponentType, SVGProps } from "react";
import { Location, CallAlt, Mail } from "@/components/icons";
import { BRAND, BRAND_MAP_URL } from "@/data/brand";

export interface ContactInfoConfig {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  info: string;
  href: string;
}

export interface SocialLinkItem { href: string; icon: string; }

export const CONTACT_INFO_CONFIG: ContactInfoConfig[] = [
  { icon: Location, title: "Địa chỉ", info: BRAND.address, href: BRAND_MAP_URL },
  { icon: CallAlt, title: "Số điện thoại", info: BRAND.phone, href: BRAND.phoneHref },
  { icon: Mail, title: "Email", info: BRAND.email, href: BRAND.emailHref },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { href: BRAND.facebook, icon: "FacebookCircle" },
];
