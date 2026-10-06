"use client"
import { Section, SectionContent } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type AboutProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};


import { ABOUT_CARDS } from "@/data/about-cards";

export default function About({ gap = "default", className }: AboutProps) {
  return (
    <Section gap={gap} className={cn("bg-white overflow-hidden", className)}>
      <SectionContent>
        <div className="container">
          <div className="row gy-6">
            {ABOUT_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="sm:column-6 lg:column-3">
                  <ScrollReveal
                    className={cn(
                      "group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 xl:p-8 text-center rounded-2xl hover:border-primary cursor-crosshair h-full",
                      getDelayClass(index)
                    )}
                  >
                    <div className="flex items-center justify-center size-13 bg-primary group-hover:bg-white text-white group-hover:text-primary rounded-xl mx-auto mb-5">
                      <Icon className="size-6.5  " />
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-xl/relaxed mb-3">{card.title}</h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-base/snug">{card.description}</p>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
    </Section>
  );
}
