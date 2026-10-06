"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import heroBg from "@/images/hero-bg-b.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CountUp } from "@/hooks/useAnimatedCounter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type HeroV2Props = {
  className?: string;
  wrapperClassName?: string;
};

export default function HeroV2({ className, wrapperClassName }: HeroV2Props) {
  return (
    <header className={cn("relative flex flex-col pt-(--menubar-height) justify-between", className)}>
      <div className="absolute -top-(--menubar-height) inset-0 overflow-hidden parallax-bg">
        <Image src={heroBg} width={1920} height={961} placeholder="blur" alt="Ảnh nền đội ngũ kỹ sư Bống Media" priority className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-r from-darker via-darker/60 to-darker/0" />
      </div>

      <div className={cn("flex-1 flex items-center pt-16 lg:pt-24 2xl:pt-40 pb-16 lg:pb-20 z-20 relative", wrapperClassName)}>
        <div className="container">
          <div className="row">
            <div className="xl:column-8 2xl:column-8">
              <ScrollReveal stagger className="pe-4 lg:pe-8">
                <div className="reveal-item reveal-delay-100 flex items-center gap-2.5 text-secondary text-sm md:text-base tracking-wider mb-5">
                  <span className="w-6.5 h-0.5 bg-secondary inline-block"></span>
                  <span>Điện mặt trời cho nhà ở và doanh nghiệp</span>
                </div>

                <h1 className="reveal-item reveal-delay-150 text-white font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[4rem] leading-[1.125] mb-5">
                  Bống Media: <span className="text-primary">Năng lượng sạch. </span>
                  Tiết kiệm hơn. <span className="text-secondary">Tương lai tươi sáng.</span>
                </h1>

                <p className="reveal-item reveal-delay-200 text-white/85 text-base md:text-lg leading-relaxed max-w-md mb-10">
                  Hệ thống điện mặt trời thiết kế riêng giúp giảm hóa đơn điện, nâng giá trị ngôi nhà và chủ động nguồn năng lượng. Lắp đặt hoàn chỉnh trong vài tuần.
                </p>

                <div className="reveal-item reveal-delay-250 flex flex-wrap gap-4 mb-16">
                  <Button nativeButton={false} render={<Link href="/contact" />} size="2xl" className="uppercase">
                    Nhận báo giá miễn phí
                  </Button>
                  <Button nativeButton={false} render={<Link href="/service" />} size="2xl" variant="outline" className="uppercase">
                    Tìm hiểu thêm
                  </Button>
                </div>

                <ul className="reveal-item reveal-delay-300 flex flex-wrap gap-4 sm:gap-0 mt-12 lg:mt-14 pt-4.5 border-t border-white/20">
                  <li>
                    <div className="text-3xl font-semibold text-white mb-2.5">
                      <CountUp end={14200} suffix="+" />
                    </div>
                    <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                      Hệ thống <br /> đã lắp đặt
                    </div>
                  </li>
                  <li className="my-5 min-[420px]:my-0 min-[420px]:mx-4 sm:mx-10 md:mx-20 xl:mx-14 2xl:mx-20 sm:border-l border-white/20 hidden sm:block"></li>
                  <li>
                    <div className="text-3xl font-semibold text-white mb-2.5">
                      <CountUp end={2840} prefix="$" />
                    </div>
                    <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                      Tiết kiệm <br /> hằng năm
                    </div>
                  </li>
                  <li className="my-5 min-[420px]:my-0 min-[420px]:mx-4 sm:mx-10 md:mx-20 xl:mx-14 2xl:mx-20 sm:border-l border-white/20 hidden sm:block"></li>
                  <li>
                    <div className="text-3xl font-semibold text-white mb-2.5">
                      <CountUp end={4.9} decimals={1} suffix="/5" />
                    </div>
                    <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                      Đánh giá <br /> của khách hàng
                    </div>
                  </li>
                </ul>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </div>
    </header>
  );
}
