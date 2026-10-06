import { StaticImageData } from "next/image";
import avatarA from "@/images/avatar-a.jpg";
import avatarB from "@/images/avatar-b.jpg";
import avatarC from "@/images/avatar-c.jpg";

export interface CustomerInfo {
  name: string;
  title: string;
  avatar: StaticImageData;
}

export interface TestimonialItem {
  comment: string;
  rating: number;
  customer: CustomerInfo;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    comment: "Tôi rất thích ứng dụng! Mong có thêm những cửa hàng yêu thích để tôi có thể sử dụng thường xuyên hơn.",
    rating: 5,
    customer: {
      name: "Sophia Miller",
      title: "Giám đốc điều hành tại Hire & Retain",
      avatar: avatarA,
    }
  },
  {
    comment: "Nội dung mẫu thường được dùng trong ngành đồ họa, in ấn và xuất bản để xem trước bố cục.",
    rating: 5,
    customer: {
      name: "Sophia Miller",
      title: "Giám đốc vận hành tại Hire & Retain",
      avatar: avatarB,
    }
  },
  {
    comment: "Đưa ra chiến lược thích ứng để chủ động phát triển trong ngành in ấn và chế bản.",
    rating: 4,
    customer: {
      name: "Jenny Wilson",
      title: "Nhà thiết kế UI/UX",
      avatar: avatarC,
    }
  }
];