"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { ArrowLongRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

import serviceCover from "@/images/service-cover.jpg";
import { SERVICE_DATA } from "@/data/services";
import shapeA from "@/images/decoration/shape-a.png";
import lineA from "@/images/decoration/line-a.png";
import hexagonSmallA from "@/images/decoration/hexagon-small-a.png";
import hexagonLargeHalfA from "@/images/decoration/hexagon-large-half-a.png";

type ServicesProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Services({ gap = "default", className }: ServicesProps) {
  return (
    <Section gap={gap} className={cn("bg-primary-lighter/50", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75" />
        <Image src={lineA} width={348} height={373} alt="" className="absolute top-0 inset-s-0 w-87 h-93.25" />
        <Image src={hexagonLargeHalfA} width={280} height={429} alt="" className="absolute top-2/5 inset-s-0 w-70 h-107.25" />
        <Image src={hexagonSmallA} width={181} height={157} alt="" className="absolute top-1/10 translate-container-end w-45.25 h-39.25" />
      </div>
      <SectionContent>
        <div className="container">
          <div className="justify-between row gy-8">
            <div className="lg:column-6 xl:column-6">
              <ScrollReveal delay={100} className="flex flex-col h-full">
                <div className="mb-8 xl:mb-12">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-4 xl:mb-6 text-pretty">
                    Chuyển dịch năng lượng bền vững và hiệu quả bằng giải pháp số
                  </h2>
                  <Button render={<Link href="/service" />} variant="link" icon={<ArrowLongRight />}> Tìm hiểu thêm </Button>
                </div>
                <div className="bg-darker p-10 rounded-2xl mt-auto flex gap-6">
                  <div className="w-1 bg-primary shrink-0 rounded-full"></div>
                  <blockquote className="text-xl 2xl:text-2xl leading-snug text-white">
                    Giảm phát thải carbon cần sự cân bằng giữa hệ thống hiện có và công nghệ mới, giữa môi trường và hiệu quả kinh tế.
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
            <div className="lg:column-6 2xl:column-5 relative z-20">
              <ScrollReveal delay={300} className="xl:ps-5 2xl:ps-0 pe-13.5 2xl:-ms-15 relative h-full">
                <Image className="w-full max-lg:max-h-120 lg:min-h-full object-cover rounded-2xl border-b-4 border-primary" src={serviceCover} alt="" />
                <div className="absolute z-20 inset-e-2 bottom-15.5 p-8 rounded-2xl bg-white border-b-4 border-primary flex flex-col items-center gap-4.5 shadow-[0_0_20px_0_rgba(0,0,0,.08)]">
                  <div className="bg-primary rounded-full size-15.5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 34 34">
                      <path fill="#fff" d="M2.123 4.238a2.12 2.12 0 0 1 2.12-2.119H8.48a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12H4.242a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zM2.123 14.833a2.12 2.12 0 0 1 2.12-2.119H8.48a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12H4.242a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zM2.123 25.428a2.12 2.12 0 0 1 2.12-2.119H8.48a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12H4.242a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12z"></path>
                    </svg>
                  </div>
                  <div className="font-semibold text-darker text-xl/none">Giải pháp lưới điện</div>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
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
              {SERVICE_DATA.slice(0, 3).map((item, index) => (
                <CarouselItem key={index} className="pl-7.5 basis-1/1 md:basis-1/2 xl:basis-1/3">
                  <ScrollReveal className={cn("flex flex-col bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl", getDelayClass(index))}>
                    <Image src={item.image} alt={item.title} className="w-full rounded-t-2xl" />
                    <div className="p-8">
                      <h5 className="text-2xl xl:text-3xl leading-normal font-semibold text-darker mb-4">{item.title}</h5>
                      <p className="text-base leading-relaxed text-body mb-6">{item.description}</p>
                      <Button render={<Link href={`/service/${item.id}`} />} variant="link" icon={<ArrowLongRight />}> Khám phá </Button>
                    </div>
                  </ScrollReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="pt-10 xl:hidden" />
          </Carousel>
        </div>{/* Container */}
      </SectionContent>
    </Section>
  );
}
