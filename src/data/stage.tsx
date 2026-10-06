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
    stage: "GIAI ĐOẠN 01",
    title: "Thu năng lượng",
    description: "Hệ mặt trời, gió và thủy điện thu năng lượng trực tiếp từ tự nhiên theo thời gian thực.",
    icon: SunIcon,
  },
  {
    stage: "GIAI ĐOẠN 02",
    title: "Lưu trữ",
    description: "Điện dư được lưu trong pin quy mô lưới điện, sẵn sàng cung cấp theo nhu cầu.",
    icon: BatteryIcon,
  },
  {
    stage: "GIAI ĐOẠN 03",
    title: "Cấp điện",
    description: "Phần mềm lưới điện thông minh phân phối điện tức thời tới nhà ở, xe và doanh nghiệp.",
    icon: LightningIcon,
  },
  {
    stage: "GIAI ĐOẠN 04",
    title: "Tác động",
    description: "Mỗi kilowatt đều được đo và theo dõi qua lượng phát thải giảm được cùng khoản tiết kiệm thực tế của gia đình.",
    icon: ImpactIcon,
  },
];
