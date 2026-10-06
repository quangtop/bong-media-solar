"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowLongRight } from "@/components/icons";

import { SERVICE_DATA } from "@/data/services";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

type ServicesAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  sectionHead?: boolean;
};

export default function ServicesAll({ gap = "default", sectionHead = true, className }: ServicesAllProps) {
  return (
    <Section gap={gap} className={cn("bg-white", className)}>
      {sectionHead && (
        <SectionHead>
          <div className="container">
            <div className="justify-center text-center row">
              <div className="lg:column-8 xl:column-9 2xl:column-8">
                <ScrollReveal delay={100} className="2xl:px-8">
                  <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Advanced Solar Solutions Tailored for a Brighter Future</h2>
                  <p className="text-base xl:text-lg leading-relaxed text-body max-w-md mx-auto">From residential rooftops to massive industrial grids, we design and install Tier-1 solar systems engineered to slash your electricity bills from day one.</p>
                </ScrollReveal>
              </div>{/* Column */}
            </div>{/* Row */}
          </div>{/* Container */}
        </SectionHead>
      )}
      <SectionContent>
        <div className="container -mb-20">
          <div className="row pb-20 gy-8">
            {SERVICE_DATA.map((item, index) => (
              <div key={index} className="xl:column-4 md:column-6">
                <ScrollReveal className={cn("flex flex-col bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl h-full", getDelayClass(index))}>
                  <Image src={item.image} alt={item.title} className="w-full rounded-t-2xl" />
                  <div className="p-8">
                    <h5 className="text-2xl xl:text-3xl leading-normal font-semibold text-darker tracking-[-1px] mb-4">{item.title}</h5>
                    <p className="text-base/relaxed text-body mb-6">{item.description}</p>
                    <Button render={<Link href={`/service/${item.id}`} />} variant="link" icon={<ArrowLongRight />}> Explore </Button>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>{/* Container */}
      </SectionContent>
    </Section>
  );
}
