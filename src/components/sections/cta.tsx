"use client";

import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type CtaProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Cta({ gap = "none", className }: CtaProps) {
  return (
    <Section gap={gap} className={className}>
      <SectionContent>
        <div className="container">
          <ScrollReveal direction="bottom">
            <div className="bg-darker p-8 sm:p-12 md:p-16 xl:p-20 flex flex-wrap items-center justify-between xl:gap-x-15 gap-y-7 rounded-[1.25rem]">
              <h2 className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.27] uppercase text-pretty max-w-md">
                Energize your home with solar solutions
              </h2>
              <Button size="xl" pill>Request a Quote</Button>
            </div>
          </ScrollReveal>
        </div>{/* Container */}
      </SectionContent>{/* Section Content */}
    </Section>
  );
}
