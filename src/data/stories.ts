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
    alt: "Solar Engineer Working",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyB,
    alt: "Wind Energy Model",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyC,
    alt: "Green Energy Solutions",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyA,
    alt: "EV Charging Installation",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyB,
    alt: "Commercial Solar Array",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
  {
    image: storyC,
    alt: "Battery Storage System",
    video: "https://www.youtube.com/embed/AcKskVETHAU",
  },
];
