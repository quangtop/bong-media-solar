export type PricingPlan = {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  periodText: string;
  buttonText: string;
  buttonVariant: "default" | "light" | "darker" | "outline" | "outline-dark" | "link";
  isFeatured?: boolean;
  features: string[];
};

export const PLANS_DATA: PricingPlan[] = [
  {
    id: "starter",
    name: "Gói cơ bản",
    subtitle: "Hệ thống tối đa 4.5 kW",
    monthlyPrice: 1260,
    yearlyPrice: 945,
    periodText: "Có phương án tài chính linh hoạt theo tháng",
    buttonText: "NHẬN DỰ TOÁN",
    buttonVariant: "default",
    features: [
      "Tấm pin mặt trời Tier-1 hiệu suất cao",
      "Biến tần thông minh hòa lưới tiêu chuẩn",
      "Phân tích bóng che mái toàn diện bằng thiết bị bay",
      "Lắp đặt chuyên nghiệp bởi đội ngũ nội bộ",
      "Bảo hành thi công tiêu chuẩn 10 năm",
      "Theo dõi năng lượng theo thời gian thực qua ứng dụng",
    ],
  },
  {
    id: "recommended",
    name: "Gói khuyên dùng",
    subtitle: "Hệ thống tối đa 8.5 kW",
    monthlyPrice: 4256,
    yearlyPrice: 3192,
    periodText: "Lựa chọn phổ biến cho chủ nhà",
    buttonText: "YÊU CẦU BÁO GIÁ",
    buttonVariant: "light",
    isFeatured: true,
    features: [
      "Bao gồm toàn bộ gói cơ bản, cùng với",
      "Tấm pin Mono PERC cao cấp, sản lượng cao",
      "Công nghệ vi biến tần thế hệ mới",
      "Ưu tiên kích hoạt đấu nối lưới",
      "Bảo hành hiệu suất cao cấp 25 năm",
      "Đường dây hỗ trợ khách hàng riêng 24/7",
    ],
  },
  {
    id: "premium",
    name: "Gói cao cấp",
    subtitle: "Hệ thống mở rộng 12+ kW và pin lưu trữ",
    monthlyPrice: 6479,
    yearlyPrice: 4859,
    periodText: "Giải pháp an toàn năng lượng toàn diện cao cấp",
    buttonText: "LIÊN HỆ",
    buttonVariant: "default",
    features: [
      "Bao gồm toàn bộ gói EcoStandard, cùng với",
      "Hệ tấm pin đen toàn bộ với thẩm mỹ cao cấp",
      "Tích hợp hệ thống pin lưu trữ thông minh",
      "Công tắc tự động cách ly khi mất điện",
      "Tích hợp trạm sạc xe điện cấp 2",
      "Giám sát chủ động tình trạng hệ thống trọn đời và vệ sinh hằng năm",
    ],
  },
];
