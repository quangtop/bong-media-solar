import { ComponentType, SVGProps } from "react";

export interface WhyCardItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export function Money({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2.16675V23.8334M18.4167 5.41675H10.2917C9.28605 5.41675 8.32163 5.81623 7.61055 6.5273C6.89948 7.23838 6.5 8.2028 6.5 9.20841C6.5 10.214 6.89948 11.1785 7.61055 11.8895C8.32163 12.6006 9.28605 13.0001 10.2917 13.0001H15.7083C16.7139 13.0001 17.6784 13.3996 18.3894 14.1106C19.1005 14.8217 19.5 15.7861 19.5 16.7917C19.5 17.7974 19.1005 18.7618 18.3894 19.4729C17.6784 20.1839 16.7139 20.5834 15.7083 20.5834H6.5" stroke="currentColor" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WaterDrop({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.9998 2.16675C7.58317 6.50008 5.4165 10.8334 5.4165 14.0834C5.4165 16.0946 6.21546 18.0235 7.63761 19.4456C9.05976 20.8678 10.9886 21.6667 12.9998 21.6667C15.0111 21.6667 16.9399 20.8678 18.3621 19.4456C19.7842 18.0235 20.5883 16.0946 20.5832 14.0834C20.5832 10.8334 18.4165 6.50008 12.9998 2.16675Z" stroke="currentColor" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pen({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9252 3.57512C16.5316 3.28547 17.213 3.19097 17.8754 3.30462C18.5378 3.41827 19.1487 3.73448 19.6239 4.20972C20.0991 4.68495 20.4153 5.29583 20.529 5.95823C20.6426 6.62064 20.5481 7.30198 20.2585 7.90845L9.75016 18.4168L4.3335 19.5001L5.41683 14.0835L15.9252 3.57512Z" stroke="currentColor" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0002 2.16675L21.6668 5.41675V11.9167C21.6668 17.3334 17.8752 21.1251 13.0002 23.8334C8.12516 21.1251 4.3335 17.3334 4.3335 11.9167V5.41675L13.0002 2.16675Z" stroke="currentColor" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const WHY_CARDS: WhyCardItem[] = [
  {
    icon: Money,
    title: "Tối đa hóa tiết kiệm",
    description: "Giảm hóa đơn điện tới 90% với hệ thống được tính toán chính xác theo nhu cầu gia đình.",
  },
  {
    icon: WaterDrop,
    title: "Tác động tích cực đến môi trường",
    description: "Mỗi kilowatt điện bạn tạo ra thay thế điện từ nhiên liệu hóa thạch, giảm dấu chân carbon của gia đình.",
  },
  {
    icon: Pen,
    title: "Lắp đặt chuyên nghiệp",
    description: "Đội ngũ được chứng nhận hoàn tất phần lớn công trình dân dụng trong 1–2 ngày, tuân thủ đầy đủ quy trình.",
  },
  {
    icon: Shield,
    title: "Bảo hành 25 năm",
    description: "Tấm pin, biến tần và chất lượng thi công được bảo hành trong 25 năm.",
  },
];
