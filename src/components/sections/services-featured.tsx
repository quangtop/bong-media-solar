"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import serviceLargeA from "@/images/service-large-a.jpg";
import serviceLargeB from "@/images/service-large-b.jpg";

import iconHome from "@/images/icon-house.svg";
import iconPlane from "@/images/icon-plane.svg";

type ServicesFeaturedProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function ServicesFeatured({ gap = "default", className }: ServicesFeaturedProps) {
  return (
    <Section gap={gap} className={cn("bg-white", className)}>
      <SectionContent>
        <div className="container">
          <div className="justify-between xl:flex-row-reverse row items-center gy-8">
            <div className="xl:column-6">
              <ScrollReveal delay={300}>
                <Image className="w-full rounded-2xl max-xl:max-h-130 border-b-4 border-primary" src={serviceLargeA} alt="" />
              </ScrollReveal>
            </div>{/* Column */}
            <div className="xl:column-6">
              <ScrollReveal delay={100} className="text-block xl:pe-15">
                <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                  <Image className="size-8 xl:size-10" src={iconHome} alt="" />
                </div>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Save money for your business with solar</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body mb-2.5">Energy consumption is one of the largest uncontrollable expenses for modern enterprises. Rising utility rates directly threaten your company's bottom line.</p>
                <ul className="flex flex-col gap-2.5 text-base/relaxed">
                  <li className="relative ps-5.5 before:absolute before:size-2.25 before:rounded-full before:bg-primary before:inset-s-0 before:top-2">
                    <strong className="font-medium">Massive Overhead Reduction:</strong>
                    Drastically lower your daily operational expenses. Most commercial properties see a drop of 40% to 70% in monthly grid reliance from day one.
                  </li>
                  <li className="relative ps-5.5 before:absolute before:size-2.25 before:rounded-full before:bg-primary before:inset-s-0 before:top-2">
                    <strong className="font-medium">Rapid Investment Payback (Fast ROI):</strong>
                    Thanks to accelerated depreciation benefits and high commercial energy consumption during peak solar hours
                  </li>
                </ul>
                <div className="pt-7 xl:pt-11">
                  <Button className="uppercase" size="lg">Get Free Quote</Button>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
      <SectionContent gap="large">
        <div className="container">
          <div className="justify-between items-center row gy-8">
            <div className="xl:column-6">
              <ScrollReveal delay={100}>
                <Image className="w-full rounded-2xl max-xl:max-h-130 border-b-4 border-primary" src={serviceLargeB} alt="" />
              </ScrollReveal>
            </div>{/* Column */}
            <div className="xl:column-6">
              <ScrollReveal delay={300} className="text-block xl:ps-15">
                <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                  <Image className="size-8 xl:size-10" src={iconPlane} alt="" />
                </div>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Power your home with wind energy</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">While solar panels work wonders during the day, the wind never stops blowing. Integrating a residential wind turbine into your property is a revolutionary way to achieve 100% green energy independence. Modern, sleek, and engineered to be virtually silent, these compact wind turbines capture local breeze patterns and instantly convert them into clean electricity for your household. </p>
                <div className="pt-7 xl:pt-11">
                  <Button className="uppercase" size="lg">Get Free Quote</Button>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
    </Section>
  );
}
