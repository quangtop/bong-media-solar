export interface RenewableReason {
  id: string;
  title: string;
  description: string;
}

export const RENEWABLES_REASONS: RenewableReason[] = [
  {
    id: "01",
    title: "Giảm phát thải carbon",
    description: "Thay thế trực tiếp điện từ nhiên liệu hóa thạch, giảm phát thải tại nguồn thay vì chỉ bù trừ.",
  },
  {
    id: "02",
    title: "Sử dụng năng lượng thông minh hơn",
    description: "AI dự báo và điều chỉnh phụ tải theo sản lượng, giảm lãng phí trên toàn mạng lưới.",
  },
  {
    id: "03",
    title: "Hiệu quả chi phí dài hạn",
    description: "Chi phí thiết bị giảm và chi phí phát điện tăng thêm gần bằng không mang lại lợi ích tích lũy qua nhiều thập kỷ.",
  },
  {
    id: "04",
    title: "Độc lập năng lượng",
    description: "Nguồn điện và lưu trữ phân tán giúp nhà ở và lưới điện chống chịu biến động giá cùng sự cố mất điện.",
  },
];
