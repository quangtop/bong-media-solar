import React from "react";
import type { Metadata } from "next";
import HeroV3 from "@/components/sections/hero-v3";
import AboutCards from "@/components/sections/about-cards";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Stage from "@/components/sections/stage";
import Testimonials from "@/components/sections/testimonials";
import Cta from "@/components/sections/cta";
import Blog from "@/components/sections/blog";
import Project from "@/components/sections/projects";
import WhyV2 from "@/components/sections/why-v2";

export const metadata: Metadata = {
  title: "Home 3 - Solurax Energy Solutions",
  description: "Solurax is a modern, responsive, and beautiful landing page template for solar and renewable energy technologies.",
};

export default function Home3() {
  return (
    <React.Fragment>
      <main className="relative flex flex-col justify-between overflow-x-hidden bg-white">
        <HeroV3 />
        <AboutCards gap="top" />
        <About />
        <Services />
        <Stage gap="top" />
        <WhyV2 />
        <Project />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
    </React.Fragment>
  );
}
