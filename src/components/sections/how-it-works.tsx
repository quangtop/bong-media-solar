"use client";

import Image from "next/image";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { HOW_DATA } from "@/data/how";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

import shapeA from "@/images/decoration/shape-a.png";
import lineB from "@/images/decoration/line-b.png";
import lineC from "@/images/decoration/line-c.png";
import lineD from "@/images/decoration/line-d.png";
import hexagonSmallA from "@/images/decoration/hexagon-small-a.png";
import hexagonLargeHalfB from "@/images/decoration/hexagon-large-half-b.png";

type HowItWorksProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function HowItWorks({ gap = "default", className }: HowItWorksProps) {
  return (
    <Section gap={gap} className={cn("bg-primary-lighter/50", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75" />
        <Image src={lineB} width={348} height={373} alt="" className="absolute top-0 inset-s-0 w-87 h-93.25" />
        <Image src={lineC} width={361} height={362} alt="" className="absolute bottom-0 inset-e-0 w-90.25 h-90.5" />
        <Image src={lineD} width={381} height={780} alt="" className="absolute top-0 inset-e-0 w-95.25 h-195" />
        <Image src={hexagonLargeHalfB} width={280} height={429} alt="" className="absolute bottom-0 translate-y-3/5 inset-s-0 w-70 h-107.25" />
        <Image src={hexagonSmallA} width={181} height={157} alt="" className="absolute top-1/10 translate-container-end w-45.25 h-39.25" />
      </div>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-6 xl:column-5">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Cách hệ thống hoạt động</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">Từ tư vấn đến kích hoạt, cùng khách hàng thay đổi cách sử dụng năng lượng trong khu vực.</p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="relative z-0">
            <div className="hidden xl:block absolute top-10 left-1/8 w-3/4 h-0.5 bg-linear-to-r from-[#1BBE7A] to-[#FFC72C] -z-1"></div>
            <div className="justify-between row gy-6">
              {HOW_DATA.map((item, index) => (
                <div key={index} className="md:column-6 xl:column-3">
                  <ScrollReveal className={cn("text-center px-4 xl:px-0 2xl:px-4", getDelayClass(index))}>
                    <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg/normal font-semibold flex justify-center items-center text-primary-strong mx-auto">{item.id}</div>
                    <h5 className="font-semibold text-xl xl:text-2xl leading-normal text-darker mb-4">{item.title}</h5>
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
