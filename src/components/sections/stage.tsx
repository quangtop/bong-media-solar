"use client";
import Image from "next/image";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";


import { STAGES } from "@/data/stage";

type StageProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Stage({ gap = "default", className }: StageProps) {
  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="row justify-between gy-3">
            <div className="lg:column-6 xl:column-5">
              <ScrollReveal delay={100} className="max-w-xl">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darker leading-[1.15]">
                  How clean energy works,{" "}
                  <span className="text-primary">end </span> to
                  <span className="text-primary"> end.</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:column-6 xl:column-5">
              <ScrollReveal delay={150} className="max-w-md text-body text-base/relaxed lg:pt-2">
                <p>
                  From solar collection at the panel to instant energy distribution within your home, our fully integrated technology creates one seamless, highly continuous power flow.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="relative">
            {/* Connected dashed line */}
            <div className="hidden xl:block absolute top-12 left-0 right-0 border-t border-dashed border-dashed-[1rem] border-primary/60 z-0" />

            <div className="justify-between row gy-6 relative z-10">
              {STAGES.map((stageItem, index) => {
                const Icon = stageItem.icon;
                return (
                  <div key={index} className="md:column-6 xl:column-3">
                    <ScrollReveal key={stageItem.stage} className={cn("flex flex-col items-start lg:pe-20 xl:pe-0 2xl:pe-10", getDelayClass(index))}>
                      <div className="size-17 rounded-full bg-primary-lighter border border-primary/12 flex items-center justify-center text-primary mb-7">
                        <Icon className="size-7 stroke-2" />
                      </div>
                      <span className="text-xs font-normal tracking-wider text-primary uppercase mb-3">
                        {stageItem.stage}
                      </span>
                      <h4 className="text-base lg:text-xl xl:text-2xl  leading-snug font-semibold text-darker mb-2">
                        {stageItem.title}
                      </h4>
                      <p className="text-base/relaxed text-body text-pretty">
                        {stageItem.description}
                      </p>
                    </ScrollReveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
