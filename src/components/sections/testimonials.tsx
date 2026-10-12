"use client";

import Image from "next/image";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { StarFill } from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type TestimonialsProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Testimonials({ gap = "default", className }: TestimonialsProps) {
  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-7 2xl:column-6">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Khách hàng nói về chúng tôi</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">Khám phá những kiến thức thiết thực về năng lượng tái tạo, công nghệ điện mặt trời và cách sử dụng điện hiệu quả trong cuộc sống hằng ngày.</p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>
      <SectionContent>
        <div className="container">
          <Carousel
            className="w-full relative" autoplay={true}
            opts={{
              align: "start",
              breakpoints: {
                "(min-width: 1200px)": {
                  active: false,
                },
              },
            }}>
            <CarouselContent className="-ml-7.5">
              {TESTIMONIALS_DATA.map((item, index) => (
                <CarouselItem key={index} className="pl-7.5 pt-13 basis-1/1 md:basis-1/2 xl:basis-1/3">
                  <ScrollReveal className={cn("flex flex-col p-8 bg-white shadow-[0_0_20px_0_rgba(0,0,0,.08)] rounded-2xl text-center border-b-4 border-primary h-full", getDelayClass(index))}>
                    <div className="flex flex-col items-center gap-5 -mt-22 mb-4">
                      <div className="size-26 border-t-3 border-primary bg-white rounded-full flex justify-center items-center">
                        <Avatar className="me-0!" size="4xl">
                          <Image src={item.customer.avatar} alt="Ảnh đại diện" width={126} height={126} className="rounded-full" />
                        </Avatar>
                      </div>
                      <div className="flex flex-col">
                        <h6 className="text-xl font-semibold text-darker">{item.customer.name}</h6>
                        <span className="text-sm font-regular text-body">{item.customer.title}</span>
                      </div>
                    </div>
                    <p className="text-lg/relaxed text-body mb-8">{item.comment}</p>
                    <ul className="flex justify-center gap-2 mt-auto">
                      {[...Array(5)].map((_, idx) => (
                        <li key={idx} className="li">
                          <StarFill
                            className={`size-6.5 ${idx < Math.round(item.rating)
                              ? "fill-amber-400"
                              : "fill-gray-300"
                              }`}
                          />
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="pt-10 xl:hidden" />
          </Carousel>
        </div>{/* Container */}
      </SectionContent>{/* Section Content */}
    </Section>
  );
}
