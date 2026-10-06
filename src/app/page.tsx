import React from "react";
import Hero from "@/components/sections/hero";
import Why from "@/components/sections/why";
import Services from "@/components/sections/services";
import ServicesFeatured from "@/components/sections/services-featured";
import Testimonials from "@/components/sections/testimonials";
import Cta from "@/components/sections/cta";
import Blog from "@/components/sections/blog";
import HowItWorks from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <main className="relative flex flex-col overflow-x-hidden">
        <Why />
        <Services />
        <ServicesFeatured />
        <HowItWorks />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
    </React.Fragment>
  );
}
