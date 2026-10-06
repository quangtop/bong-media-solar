import { ComponentType, SVGProps } from "react";

export interface StageItem {
  stage: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function BatteryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <line x1="6" y1="11" x2="6" y2="13" />
      <line x1="10" y1="11" x2="10" y2="13" />
    </svg>
  );
}

export function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function ImpactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export const STAGES: StageItem[] = [
  {
    stage: "STAGE 01",
    title: "Capture",
    description: "Solar, wind, and hydro assets harvest energy directly from natural sources in real time.",
    icon: SunIcon,
  },
  {
    stage: "STAGE 02",
    title: "Store",
    description: "Surplus power is banked in grid-scale batteries, ready to dispatch on demand.",
    icon: BatteryIcon,
  },
  {
    stage: "STAGE 03",
    title: "Power",
    description: "Smart grid software routes electricity to homes, vehicles, and businesses instantly.",
    icon: LightningIcon,
  },
  {
    stage: "STAGE 04",
    title: "Impact",
    description: "Every kilowatt is measured — tracked as reduced emissions and real household savings.",
    icon: ImpactIcon,
  },
];
