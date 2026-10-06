export interface HowStep {
  id: string;
  title: string;
  description: string;
}

export const HOW_DATA: HowStep[] = [
  {
    id: "01",
    title: "Tư vấn",
    description: "Chuyên gia đánh giá nhu cầu điện và tiềm năng của công trình."
  },
  {
    id: "02",
    title: "Thiết kế riêng",
    description: "Bản vẽ kỹ thuật chính xác, phù hợp với công trình của bạn."
  },
  {
    id: "03",
    title: "Lắp đặt chuyên nghiệp",
    description: "Triển khai nhanh, gọn bởi đội ngũ kỹ thuật có chứng nhận."
  },
  {
    id: "04",
    title: "Kích hoạt",
    description: "Kiểm tra hệ thống, đấu nối lưới và giám sát trực tiếp."
  },
];
