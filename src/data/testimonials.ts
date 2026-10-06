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
    comment: "Love the app!! I'm looking forward for them to add more of my favorite stores so i can use them more offen ensure",
    rating: 5,
    customer: {
      name: "Sophia Miller",
      title: "CEO at Hire & Retain",
      avatar: avatarA,
    }
  },
  {
    comment: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ",
    rating: 5,
    customer: {
      name: "Sophia Miller",
      title: "COO at Hire & Retain",
      avatar: avatarB,
    }
  },
  {
    comment: "Bring to the table survival strategies to ensure proactive domination of the printing and typesetting industry ",
    rating: 4,
    customer: {
      name: "Jenny Wilson",
      title: "UI/UX Designer",
      avatar: avatarC,
    }
  }
];