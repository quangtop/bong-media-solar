"use client";

import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type WhyCardsProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};


import { WHY_CARDS } from "@/data/why-cards";

export default function WhyCards({ gap = "default", className }: WhyCardsProps) {
  return (
    <Section gap={gap} className={cn("bg-white", className)}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-10 xl:column-9 2xl:column-8">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  Vì sao chọn Bống Media? Khác biệt từ tấm pin đến cam kết.
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body max-w-md mx-auto">
                  Mỗi hệ thống được thiết kế theo mái nhà, nhu cầu sử dụng và ngân sách của bạn, kèm chính sách bảo hành vững chắc.
                </p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>

      <SectionContent>
        <div className="container">
          <div className="row gy-6">
            {WHY_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="sm:column-6 lg:column-3">
                  <ScrollReveal
                    className={cn(
                      "group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary cursor-crosshair h-full",
                      getDelayClass(index)
                    )}
                  >
                    <div className="flex items-center justify-center size-13 bg-primary group-hover:bg-white text-white group-hover:text-primary rounded-xl mb-5">
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
