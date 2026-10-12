"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { ArrowLongRight, PlayFill } from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import VideoPopup from "@/components/ui/video-popup";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { Button } from "@/components/ui/button";
import { STORIES_ITEMS } from "@/data/stories";

type StoriesProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Stories({ gap = "default", className }: StoriesProps) {
  return (
    <Section gap={gap} className={cn("relative overflow-hidden bg-white", className)}>
      <SectionContent>
        <div className="container relative">
          <div className="row g-10 items-center">
            <div className="lg:column-5 relative z-10">
              <ScrollReveal delay={100} className="text-block xl:pe-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darker leading-[1.2] mb-4 xl:mb-6"> Câu chuyện truyền cảm hứng cho tương lai tốt đẹp hơn </h2>
                <p className="text-body text-base md:text-lg leading-relaxed mb-8">
                  Những công trình năng lượng tái tạo mang lại giá trị thiết thực cho cộng đồng, giúp giảm chi phí điện, tăng khả năng tự chủ và bảo vệ môi trường.
                </p>

                <Button variant="link" nativeButton={false} render={<Link href="/about"></Link>} icon={<ArrowLongRight />} >
                  <span>Tìm hiểu thêm</span>
                </Button>
              </ScrollReveal>
            </div>

            <div className="lg:column-7 overflow-visible">
              <ScrollReveal delay={300}>
                <Carousel className="w-full lg:w-[calc(100%+(100vw-100%)/2)]"
                  opts={{
                    align: "start",
                    loop: true,
                  }} autoplay={true}>
                  <CarouselContent className="-ml-4 sm:-ml-6">
                    {STORIES_ITEMS.map((item, index) => (
                      <CarouselItem key={index} className="pl-4 sm:pl-6 basis-60 sm:basis-1/2 md:basis-1/2 lg:basis-77.5 shrink-0">
                        <div className="relative aspect-9/16 w-full rounded-2xl overflow-hidden group">
                          <Image src={item.image} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-linear-to-t from-darker/50 via-transparent to-transparent" />
                          <div className="absolute bottom-4 right-4 z-10">
                            <VideoPopup video="https://www.youtube.com/embed/AcKskVETHAU" trigger={<button type="button" aria-label={`Phát video: ${item.alt}`} className="absolute bottom-7 inset-e-7.5 size-12 bg-primary rounded-full flex justify-center items-center cursor-pointer"><PlayFill className="size-7 fill-white" /></button>} />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
