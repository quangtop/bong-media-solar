"use client";

import Image from "next/image";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgress, CarouselNow } from "@/components/ui/carousel";
import { TEAM_DATA } from "@/data/team";
import { cn } from "@/lib/utils";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

type TeamProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Team({ gap = "default", className }: TeamProps) {
  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-9 xl:column-8 2xl:column-7">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Đội ngũ chuyên gia</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">Kỹ sư, kỹ thuật viên và nhân viên hỗ trợ phối hợp để lắp đặt an toàn, giao tiếp rõ ràng và duy trì hiệu suất hệ thống lâu dài.</p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>
      <SectionContent>
        <div className="container">
          <Carousel
            className="w-full" autoplay={true}
            opts={{
              align: "start",
            }}>
            <CarouselContent>
              {TEAM_DATA.map((item, index) => (
                <CarouselItem key={index} className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ScrollReveal className={cn("relative overflow-hidden rounded-[1.25rem] text-center group/speaker", getDelayClass(index))}>
                    <Image src={item.image} width={462} height={600} placeholder="blur" alt="" className="w-full" />
                    <div className={cn("absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-darker via-darker/40 to-transparent", "")}>
                      <h5 className="text-xl font-bold text-white">{item.name}</h5>
                      <div className="text-base font-medium text-white">{item.title}</div>

                    </div>
                  </ScrollReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center gap-3 mt-6">
              <CarouselNow className="text-xl font-medium" />
              <CarouselProgress
                className="h-0.5 bg-lighter"
                indicatorClassName="bg-primary"
              />
              <div className="relative flex gap-2 shrink-0">
                <CarouselPrevious className="border-body hover:border-primary hover:bg-primary hover:fill-white" size="md" pill variant="outline-dark" />
                <CarouselNext className="border-body hover:border-primary hover:bg-primary hover:fill-white" size="md" pill variant="outline-dark" />
              </div>
            </div>
          </Carousel>
        </div>{/* Container */}
      </SectionContent>{/* Section Content */}
    </Section>
  );
}
