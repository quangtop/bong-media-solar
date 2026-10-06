import { StaticImageData } from "next/image";
import blogA from "@/images/blog-a.jpg";
import blogB from "@/images/blog-b.jpg";
import blogC from "@/images/blog-c.jpg";
import blogD from "@/images/blog-d.jpg";
import blogE from "@/images/blog-e.jpg";
import blogF from "@/images/blog-f.jpg";
import blogG from "@/images/blog-g.jpg";
import blogH from "@/images/blog-h.jpg";
import blogI from "@/images/blog-i.jpg";
import blogJ from "@/images/blog-j.jpg";
import avatarA from "@/images/avatar-a.jpg";
import avatarB from "@/images/avatar-b.jpg";
import avatarC from "@/images/avatar-c.jpg";

export interface BlogAuthor {
  name: string;
  avatar: StaticImageData | string;
}

export interface BlogPost {
  id: string;
  featured: boolean;
  tag: string;
  image: StaticImageData;
  title: string;
  excerpt: string;
  author: BlogAuthor;
  date: string;
  url: string;
}

export const BLOG_DATA: BlogPost[] = [
  {
    id: "post-001",
    featured: true,
    tag: "NỔI BẬT",
    image: blogA,
    title: "Hướng dẫn điện mặt trời năm 2026: Điều chủ nhà cần biết trước khi lắp đặt",
    excerpt: "Bạn đang cân nhắc chuyển sang điện mặt trời? Từ hướng mái, quy mô hệ thống đến cơ chế đo đếm điện ròng và phân tích chi phí, đây là những điều cần biết để tối ưu hiệu quả đầu tư ngay từ đầu.",
    author: { name: "Javier Morales", avatar: avatarA },
    date: "2026-04-19",
    url: "#"
  },
  {
    id: "post-002",
    featured: false,
    tag: "",
    image: blogB,
    title: "Cách bán điện mặt trời dư thừa trở lại lưới điện",
    excerpt: "Tìm hiểu những dịch vụ và sản phẩm liên quan đến giải pháp năng lượng tái tạo.",
    author: { name: "Amara Whitfield", avatar: avatarB },
    date: "2024-10-10",
    url: "#"
  },
  {
    id: "post-003",
    featured: false,
    tag: "",
    image: blogC,
    title: "Tích hợp trạm sạc xe điện với hệ thống điện mặt trời tại nhà",
    excerpt: "Khám phá những cải tiến giúp hệ thống điện hoạt động hiệu quả hơn.",
    author: { name: "Daniel Osei", avatar: avatarC },
    date: "2024-10-18",
    url: "#"
  },
  {
    id: "post-004",
    featured: false,
    tag: "",
    image: blogD,
    title: "Những cách đơn giản để giảm điện năng tiêu thụ hằng tháng",
    excerpt: "Nâng cấp công nghệ và áp dụng cách quản lý mới để tiết kiệm năng lượng.",
    author: { name: "Priya Nandakumar", avatar: "" },
    date: "2024-10-29",
    url: "#"
  },
  {
    id: "post-005",
    featured: false,
    tag: "",
    image: blogE,
    title: "Có nên đầu tư hệ thống pin lưu trữ Powerwall dự phòng?",
    excerpt: "Tìm hiểu những dịch vụ và sản phẩm liên quan đến giải pháp năng lượng tái tạo.",
    author: { name: "Lucas Ferreira", avatar: "" },
    date: "2024-10-10",
    url: "#"
  },
  {
    id: "post-006",
    featured: false,
    tag: "",
    image: blogF,
    title: "Hiểu đúng mức tiết kiệm mà điện mặt trời mang lại",
    excerpt: "Khám phá những cải tiến giúp hệ thống điện hoạt động hiệu quả hơn.",
    author: { name: "Sofia Marchetti", avatar: "" },
    date: "2024-10-18",
    url: "#"
  },
  {
    id: "post-007",
    featured: false,
    tag: "",
    image: blogG,
    title: "5 mẹo bảo trì đơn giản cho tấm pin mặt trời",
    excerpt: "Nâng cấp công nghệ và áp dụng cách quản lý mới để tiết kiệm năng lượng.",
    author: { name: "Ethan Brooks", avatar: "" },
    date: "2024-10-29",
    url: "#"
  },
  {
    id: "post-008",
    featured: false,
    tag: "",
    image: blogH,
    title: "Chọn bộ biến tần phù hợp cho hệ thống điện mặt trời tại nhà",
    excerpt: "Biến tần chuỗi, vi biến tần và biến tần lai đều có ưu điểm và hạn chế cần cân nhắc.",
    author: { name: "Nadia Petrov", avatar: "" },
    date: "2024-11-04",
    url: "#"
  },
  {
    id: "post-009",
    featured: false,
    tag: "",
    image: blogI,
    title: "Tài chính điện mặt trời: Giải thích khoản vay, thuê hệ thống và hợp đồng PPA",
    excerpt: "Hiểu rõ sự khác biệt giúp bạn tiết kiệm hàng nghìn đô la trong vòng đời hệ thống.",
    author: { name: "Marcus Chen", avatar: "" },
    date: "2024-11-12",
    url: "#"
  },
  {
    id: "post-010",
    featured: false,
    tag: "",
    image: blogJ,
    title: "Tấm pin mặt trời hoạt động thế nào khi có bão?",
    excerpt: "Tấm pin được thiết kế bền bỉ; hãy tìm hiểu những điều cần biết trước thời tiết khắc nghiệt.",
    author: { name: "Isabela Rocha", avatar: "" },
    date: "2024-11-20",
    url: "#"
  },
  {
    id: "post-011",
    featured: false,
    tag: "",
    image: blogA,
    title: "Tối đa sản lượng điện mặt trời bằng tự động hóa nhà thông minh",
    excerpt: "Khám phá cách kết nối tấm pin với thiết bị IoT thông minh để tự động tối ưu mức sử dụng điện ban ngày.",
    author: { name: "Elena Rostova", avatar: "" },
    date: "2024-11-28",
    url: "#"
  },
  {
    id: "post-012",
    featured: false,
    tag: "",
    image: blogB,
    title: "Ưu đãi thuế điện mặt trời thương mại: Tổng quan chính sách năm 2026",
    excerpt: "Tổng hợp các ưu đãi địa phương và liên bang dành cho doanh nghiệp nâng cấp hạ tầng không phát thải.",
    author: { name: "Oliver Vance", avatar: "" },
    date: "2024-12-05",
    url: "#"
  },
  {
    id: "post-013",
    featured: false,
    tag: "",
    image: blogC,
    title: "Điện mặt trời tích hợp công trình và tấm pin truyền thống: Lựa chọn nào phù hợp?",
    excerpt: "So sánh hệ thống quang điện tích hợp công trình với tấm pin lắp mái thông thường để lựa chọn phương án phù hợp về thẩm mỹ.",
    author: { name: "Maya Lin", avatar: "" },
    date: "2024-12-14",
    url: "#"
  }
];