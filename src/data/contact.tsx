import { ComponentType, SVGProps } from "react";
import { Location, CallAlt, Mail } from "@/components/icons";

export interface ContactInfoConfig {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  info: string;
}

export interface SocialLinkItem {
  href: string;
  icon: string;
}

export const CONTACT_INFO_CONFIG: ContactInfoConfig[] = [
  {
    icon: Location,
    title: 'Our Address',
    info: '123 Stree New York City , United States Of America.'
  },
  {
    icon: CallAlt,
    title: 'Phone Number',
    info: 'Office: 1-800-222-4545, 1-800-222-4545'
  },
  {
    icon: Mail,
    title: 'Email Address',
    info: 'support@website.com'
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { href: "https://facebook.com", icon: 'FacebookCircle' },
  { href: "https://twitter.com", icon: 'TwitterRound' },
  { href: "https://pinterest.com", icon: 'PinterestCircle' },
  { href: "https://linkedin.com", icon: 'LinkedinRound' },
];
