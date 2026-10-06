"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import whyC from "@/images/why-c.jpg";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import lineH from "@/images/decoration/line-h.png";
import hexagonLargeHalfB from "@/images/decoration/hexagon-large-half-b.png";

type WhyV2Props = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

import { RENEWABLES_REASONS } from "@/data/why-v2";


export default function WhyV2({ gap = "default", className }: WhyV2Props) {
  return (
    <Section gap={gap} className={className}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={lineH} width={779} height={260} alt="" className="absolute bottom-0 -inset-s-27 w-194.75 h-65" />
        <Image src={hexagonLargeHalfB} width={280} height={429} alt="" className="absolute top-1/3 inset-e-0 w-70 h-107.25 -scale-x-100" />
      </div>
      <SectionContent>
        <div className="container">
          <div className="justify-between row gy-8">
            <div className="lg:column-6 xl:column-5">
              <ScrollReveal delay={100} className="mb-8 lg:mb-10">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-4">Why the future runs on <span className="text-primary">renewables.</span></h2>
                <p className="text-base xl:text-lg leading-relaxed text-body max-w-md mx-auto">Clean energy isn't a trade-off anymore — it's the more efficient, more resilient, and more profitable choice.</p>
              </ScrollReveal>
              <ScrollReveal delay={150} className="2xl:-me-6">
                <Image src={whyC} alt="" className="w-full h-full rounded-2xl border-b-6 border-primary" />
              </ScrollReveal>
            </div>{/* Column */}
            <div className="lg:column-6">
              {RENEWABLES_REASONS.map((reason, index) => (
                <ScrollReveal
                  key={reason.id}
                  className={cn("py-7 flex items-start border-b first:border-t border-darker/10", getDelayClass(index))}
                >
                  <span className="text-base font-medium text-body w-12 sm:w-20 shrink-0 mt-1">
                    {reason.id}
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-base lg:text-xl xl:text-2xl leading-snug font-semibold text-darker">
                      {reason.title}
                    </h4>
                    <p className="text-base/relaxed text-body">
                      {reason.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
    </Section>
  );
}


