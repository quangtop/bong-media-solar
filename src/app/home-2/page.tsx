import React from "react";
import type { Metadata } from "next";
import HeroV2 from "@/components/sections/hero-v2";
import Why from "@/components/sections/why";
import WhyCards from "@/components/sections/why-cards";
import Services from "@/components/sections/services";
import ServicesFeatured from "@/components/sections/services-featured";
import Stories from "@/components/sections/stories";
import Testimonials from "@/components/sections/testimonials";
import Cta from "@/components/sections/cta";
import Blog from "@/components/sections/blog";

export const metadata: Metadata = {
  title: "Trang chủ 2 — Giải pháp năng lượng",
  description: "Bống Media giới thiệu các giải pháp điện mặt trời và năng lượng tái tạo với công nghệ hiện đại, hiệu quả và bền vững.",
};

export default function Home2() {
  return (
    <React.Fragment>
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <HeroV2 />
        <Why gap="top" stats={false} />
        <WhyCards />
        <Services />
        <ServicesFeatured gap="top" />
        <Stories gap="top" />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
    </React.Fragment>
  );
}
