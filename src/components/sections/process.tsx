"use client";

import Image from "next/image";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { PROCESS_DATA } from "@/data/process";
import lineD from "@/images/decoration/line-d.png";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

type ProcessProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Process({ gap = "default", className }: ProcessProps) {
  return (
    <Section gap={gap} className={cn("bg-white", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={lineD} width={381} height={780} alt="" className="absolute top-0 inset-e-0 w-95.25 h-195" />
      </div>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-7 2xl:column-7">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">The Solurax 4-Step Process</h2>
                <p className="text-base/relaxed text-body max-w-sm mx-auto xl:px-10">Our Seamless Transition to Clean Energy, our customers are reshaping the region's energy footprint.</p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="relative z-0">
            <div className="hidden xl:block absolute top-10 left-1/8 w-3/4 h-0.5 bg-linear-to-r from-[#1BBE7A] to-[#FFC72C] -z-1 opacity-40"></div>
            <div className="justify-between row gy-6">
              {PROCESS_DATA.map((item, index) => (
                <div key={index} className="md:column-6 xl:column-3">
                  <ScrollReveal className={cn("text-center px-4 xl:px-0 2xl:px-4", getDelayClass(index))}>
                    <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg/normal font-semibold flex justify-center items-center text-primary mx-auto pt-0.5">{item.id}</div>
                    <h5 className="font-semibold text-xl xl:text-2xl text-darker mb-4">{item.title}</h5>
                    <p className="text-sm xl:text-base leading-relaxed text-body">{item.description}</p>
                  </ScrollReveal>
                </div>
              ))}
            </div>{/* Row */}
          </div>
        </div>{/* Container */}
      </SectionContent>{/* Section Content */}
    </Section>
  );
}
