'use client'
import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLongRight } from "@/components/icons";
import { BLOG_DATA } from "@/data/blog";
import { formatDate } from "@/hooks/useFormatDate";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type BlogProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Blog({ gap = "default", className }: BlogProps) {
  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-7 2xl:column-6">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Bài viết và kiến thức mới</h2>
                <p className="text-base/relaxed text-body">Khám phá những kiến thức thiết thực về năng lượng tái tạo, công nghệ điện mặt trời và cách sử dụng điện hiệu quả trong cuộc sống hằng ngày.</p>
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
              scrollMode: "page",
              breakpoints: {
                "(min-width: 1200px)": {
                  active: false,
                },
              },
            }}>
            <CarouselContent className="-ml-7.5">
              {BLOG_DATA.slice(0, 3).map((post, index) => (
                <CarouselItem key={index} className="pl-7.5 basis-1/1 md:basis-1/2 xl:basis-1/3">
                  <ScrollReveal className={cn("flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full", getDelayClass(index))}>
                    <Link href={`/blog/${post.id}`}
                      className="group flex flex-col" >
                      <Image src={post.image} alt={post.title} className="rounded-t-2xl" />
                      <div className="p-6 flex flex-col flex-1 justify-between">
                        <div className="text-primary text-sm/4 font-medium mb-3">
                          {formatDate(post.date)}
                        </div>
                        <h4 className="text-lg md:text-xl lg:text-2xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                          {post.title}
                        </h4>
                        <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="pt-6">
                          <Button variant="link" icon={<ArrowLongRight />}><span>Tìm hiểu thêm</span></Button>
                        </div>
                      </div>
                    </Link>
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
