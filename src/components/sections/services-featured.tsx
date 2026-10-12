"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import serviceLargeA from "@/images/service-large-a.jpg";
import serviceLargeB from "@/images/service-large-b.jpg";

import iconHome from "@/images/icon-house.svg";
import iconPlane from "@/images/icon-plane.svg";

type ServicesFeaturedProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function ServicesFeatured({ gap = "default", className }: ServicesFeaturedProps) {
  return (
    <Section gap={gap} className={cn("bg-white", className)}>
      <SectionContent>
        <div className="container">
          <div className="justify-between xl:flex-row-reverse row items-center gy-8">
            <div className="xl:column-6">
              <ScrollReveal delay={300}>
                <Image className="w-full rounded-2xl max-xl:max-h-130 border-b-4 border-primary" src={serviceLargeA} alt="" />
              </ScrollReveal>
            </div>{/* Column */}
            <div className="xl:column-6">
              <ScrollReveal delay={100} className="text-block xl:pe-15">
                <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                  <Image className="size-8 xl:size-10" src={iconHome} alt="" />
                </div>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Tiết kiệm chi phí doanh nghiệp với điện mặt trời</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body mb-2.5">Chi phí năng lượng là một trong những khoản chi khó kiểm soát của doanh nghiệp hiện đại. Giá điện tăng ảnh hưởng trực tiếp đến lợi nhuận.</p>
                <ul className="flex flex-col gap-2.5 text-base/relaxed">
                  <li className="relative ps-5.5 before:absolute before:size-2.25 before:rounded-full before:bg-primary before:inset-s-0 before:top-2">
                    <strong className="font-medium">Giảm mạnh chi phí vận hành:</strong>
                    Giảm đáng kể chi phí hằng ngày. Phần lớn công trình thương mại giảm mức phụ thuộc vào lưới điện từ 40% đến 70% ngay khi đưa vào sử dụng.
                  </li>
                  <li className="relative ps-5.5 before:absolute before:size-2.25 before:rounded-full before:bg-primary before:inset-s-0 before:top-2">
                    <strong className="font-medium">Hoàn vốn đầu tư nhanh:</strong>
                    Nhờ lợi ích khấu hao nhanh và nhu cầu điện thương mại cao trong những giờ nắng cao điểm.
                  </li>
                </ul>
                <div className="pt-7 xl:pt-11">
                  <Button render={<Link href="/contact" />} className="uppercase" size="lg">Nhận báo giá miễn phí</Button>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
      <SectionContent gap="large">
        <div className="container">
          <div className="justify-between items-center row gy-8">
            <div className="xl:column-6">
              <ScrollReveal delay={100}>
                <Image className="w-full rounded-2xl max-xl:max-h-130 border-b-4 border-primary" src={serviceLargeB} alt="" />
              </ScrollReveal>
            </div>{/* Column */}
            <div className="xl:column-6">
              <ScrollReveal delay={300} className="text-block xl:ps-15">
                <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                  <Image className="size-8 xl:size-10" src={iconPlane} alt="" />
                </div>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Cấp điện cho ngôi nhà bằng năng lượng gió</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">Tấm pin mặt trời phát huy hiệu quả vào ban ngày, còn gió tiếp tục cung cấp nguồn năng lượng khác. Tích hợp tuabin gió dân dụng giúp tăng khả năng tự chủ bằng 100% năng lượng xanh. Thiết kế hiện đại, nhỏ gọn và gần như yên tĩnh giúp chuyển gió tại chỗ thành điện sạch cho gia đình. </p>
                <div className="pt-7 xl:pt-11">
                  <Button render={<Link href="/contact" />} className="uppercase" size="lg">Nhận báo giá miễn phí</Button>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
    </Section>
  );
}
