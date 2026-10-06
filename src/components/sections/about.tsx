"use client";

import Image from "next/image";
import { Section, SectionContent } from "@/components/layout/section";
import { Check, PlayFill } from "@/components/icons";
import VideoPopup from "@/components/ui/video-popup";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CountUp } from "@/hooks/useAnimatedCounter";
import { cn } from "@/lib/utils";

import aboutA from "@/images/about-a.jpg";
import aboutB from "@/images/about-b.jpg";

type AboutProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};


export default function About({ gap = "default", className }: AboutProps) {
  return (
    <Section gap={gap} className={cn("bg-white overflow-hidden", className)}>
      <SectionContent>
        <div className="container">
          <div className="row items-center gy-12">
            <div className="lg:column-6 xl:column-6">
              <ScrollReveal delay={100} className="relative pb-15 sm:pb-25 pe-10 sm:pe-15 xl:pe-25">
                <div className="relative rounded-2xl overflow-hidden border-b-6 border-primary">
                  <Image src={aboutA} alt="Đội ngũ kỹ sư Bống Media" width={816} height={824} className="w-full object-cover" />
                </div>

                <div className="absolute bottom-0 right-0 w-1/2 sm:w-11/20 rounded-2xl overflow-hidden p-2 sm:p-3 bg-white">
                  <Image src={aboutB} alt="Kỹ thuật viên tấm pin mặt trời" width={539} height={507} className="w-full object-cover rounded-xl" />
                </div>

                <div className="absolute bottom-0 sm:bottom-3 z-20">
                  <VideoPopup video="https://www.youtube.com/embed/AcKskVETHAU"
                    trigger={
                      <button className="flex items-center gap-2.5 lg:gap-4 py-3 rounded-full group cursor-pointer transition-all">
                        <span className="size-9 sm:size-10 xl:size-12 rounded-full bg-primary flex items-center justify-center text-white transition-colors">
                          <PlayFill className="size-5 fill-current" />
                        </span>
                        <span className="text-[11px] sm:text-xs xl:text-sm font-medium tracking-wider uppercase text-darker group-hover:text-primary">
                          <span className="hidden sm:block">Xem cách chúng tôi làm việc</span>
                          <span className="sm:hidden">Quy trình thực hiện</span>
                        </span>
                      </button>
                    }
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:column-6 xl:column-6">
              <ScrollReveal delay={200} className="xl:ps-6">
                <div className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
                  Về chúng tôi
                </div>

                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-[2.75rem] leading-tight mb-6">
                  Giải pháp điện mặt trời <span className="text-primary">với chi phí hợp lý</span>
                </h2>

                <p className="text-base lg:text-lg leading-relaxed text-body mb-4">
                  Với hơn hai thập kỷ trong lĩnh vực năng lượng tái tạo, Bống Media tiên phong trong tích hợp quang điện tiên tiến và hệ thống lưu trữ năng lượng thông minh.
                </p>

                <p className="text-base lg:text-lg leading-relaxed text-body mb-8">
                  Năng lượng tái tạo khai thác những nguồn tài nguyên dồi dào của Trái Đất: sức gió, ánh nắng và dòng nước, cung cấp điện xanh cho các nền kinh tế lớn trên thế giới.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-11">
                  <li className="flex items-center gap-5">
                    <div className="size-6 flex items-center justify-center bg-primary rounded-full shrink-0">
                      <Check className="size-3 fill-white shrink-0" />
                    </div>
                    <span className="text-base font-medium text-darker">Đội ngũ chuyên nghiệp</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-6 flex items-center justify-center bg-primary rounded-full shrink-0">
                      <Check className="size-3 fill-white shrink-0" />
                    </div>
                    <span className="text-base font-medium text-darker">Hỗ trợ năng lượng 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-6 flex items-center justify-center bg-primary rounded-full shrink-0">
                      <Check className="size-3 fill-white shrink-0" />
                    </div>
                    <span className="text-base font-medium text-darker">Cam kết hoàn tiền</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-6 flex items-center justify-center bg-primary rounded-full shrink-0">
                      <Check className="size-3 fill-white shrink-0" />
                    </div>
                    <span className="text-base font-medium text-darker">Khảo sát công trình miễn phí</span>
                  </li>
                </ul>

                <div className="p-6 sm:p-8 rounded-2xl bg-darker text-white flex items-center gap-6 shadow-xl w-max ">
                  <div className="text-4xl lg:text-5xl font-extrabold text-primary shrink-0">
                    <CountUp end={25} suffix="+" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-1">Năm kinh nghiệm</h5>
                    <p className="text-sm text-white/70">Tiên phong chuyển đổi năng lượng xanh </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
    </Section>
  );
}
