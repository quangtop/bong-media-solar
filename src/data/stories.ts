import type { StaticImageData } from "next/image";
import storyA from "@/images/story-a.jpg";
import storyB from "@/images/story-b.jpg";
import storyC from "@/images/story-c.jpg";

export interface StoryItem {
  image: StaticImageData;
  alt: string;
  video: string;
}

export const STORIES_ITEMS: StoryItem[] = [
  {
    image: storyA,
    alt: "Kỹ sư điện mặt trời đang làm việc",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyB,
    alt: "Mô hình năng lượng gió",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyC,
    alt: "Giải pháp năng lượng xanh",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyA,
    alt: "Lắp đặt trạm sạc xe điện",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyB,
    alt: "Hệ điện mặt trời thương mại",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyC,
    alt: "Hệ thống pin lưu trữ",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
];
