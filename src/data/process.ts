export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: "01",
    title: "Khảo sát công trình miễn phí",
    description: "Chuyên gia đánh giá nhu cầu điện và tiềm năng của công trình."
  },
  {
    id: "02",
    title: "Thiết kế kỹ thuật 3D riêng",
    description: "Bản vẽ kỹ thuật chính xác, phù hợp với công trình của bạn."
  },
  {
    id: "03",
    title: "Lắp đặt chính xác",
    description: "Triển khai nhanh, gọn bởi đội ngũ kỹ thuật có chứng nhận."
  },
  {
    id: "04",
    title: "Kích hoạt hòa lưới",
    description: "Chúng tôi thực hiện đấu nối với đơn vị điện lực và kích hoạt hệ thống."
  },
];
