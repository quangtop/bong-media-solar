"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import heroBg from "@/images/hero-bg-c.jpg";
import heroVideoCover from "@/images/hero-video-cover.jpg";
import { Button } from "@/components/ui/button";
import { PlayFill, SparkFill } from "@/components/icons";
import VideoPopup from "@/components/ui/video-popup";
import Link from "next/link";
import { CountUp } from "@/hooks/useAnimatedCounter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import lineF from "@/images/decoration/line-f.png"

type HeroV3Props = {
  className?: string;
  wrapperClassName?: string;
};

export default function HeroV3({ className, wrapperClassName }: HeroV3Props) {
  return (
    <header className={cn("relative flex flex-col pt-(--menubar-height) justify-between bg-darker", className)}>
      <div className="absolute -top-(--menubar-height) inset-x-0 bottom-0  pointer-events-none overflow-hidden bg-darker parallax-bg">
        <Image src={heroBg} width={1920} height={1145} placeholder="blur" alt="Hero background" priority className="object-cover object-top w-full h-full" />
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300" />
      </div>

      <div className={cn("flex-1 flex items-center py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-35 z-20 relative", wrapperClassName)}>
        <div className="container">
          <div className="row">
            <div className="lg:column-9 xl:column-9">
              <ScrollReveal stagger>
                <div className="reveal-item reveal-delay-100 inline-flex items-center gap-1.5 px-3 md:px-4 py-1 md:py-2 rounded-full bg-white/28 border border-white/16 text-white text-xs lg:text-sm font-semibold uppercase md:tracking-wider mb-6 backdrop-blur-md">
                  <SparkFill className="size-3 fill-primary-light inline-block"></SparkFill>
                  <span>Clean Energy For Future</span>
                </div>

                <h1 className="reveal-item reveal-delay-150 text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[5.375rem] leading-[1.12] mb-6 md:mb-8 lg:mb-12 2xl:pe-10">
                  Empowering Lives With Renewable <span className="text-primary">Solar Energy</span> Solutions
                </h1>

                <div className="reveal-item reveal-delay-200 flex flex-wrap gap-4">
                  <Button nativeButton={false} render={<Link href="/contact" />} size="lg" className="uppercase"  >
                    Get Free Quote
                  </Button>
                  <Button nativeButton={false} render={<Link href="/service" />} size="lg" variant="outline" className="uppercase" >
                    Explore Services
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-20">
            <div className="row items-center justify-between">
              <div className="xl:column-5">
                <ScrollReveal delay={250}>
                  <p className="text-white/80 text-base sm:text-lg font-medium leading-relaxed max-w-sm">
                    Custom-engineered solar systems that cut your power bill, boost your home's value, and put you on your own grid. Fully installed in weeks, not months.
                  </p>
                </ScrollReveal>
              </div>

              <div className="lg:column-9 xl:column-7 2xl:column-6">
                <ScrollReveal delay={300} className="row g-5 sm:g-9">
                  <div className="sm:column-5">
                    <div className="relative p-6 rounded-xl bg-primary text-white h-full shadow-xl shrink-0 border border-primary-light/30 flex flex-col">
                      <div className="absolute inset-0 pointer-events-none">
                        <Image src={lineF} height={149} width={213} alt="" />
                      </div>
                      <div className="text-4xl xl:text-5xl font-extrabold mb-3">
                        <CountUp end={25} suffix="%" />
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-white leading-5 mt-auto">
                        Greater Efficiency Via Next-Gen Turbines
                      </div>
                    </div>
                  </div>
                  <div className="sm:column-7">

                    <div className="relative rounded-xl overflow-hidden group/video">
                      <Image src={heroVideoCover} width={702} height={456} placeholder="blur" alt="Solar Panel Field Video" className="w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-105" />
                      <VideoPopup
                        video="https://www.youtube.com/embed/AcKskVETHAU"
                        trigger={
                          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 bg-white text-primary-light rounded-full flex justify-center items-center cursor-pointer shadow-lg transition-all duration-300 group-hover/video:scale-110 group-hover/video:bg-white group-hover/video:text-primary">
                            <PlayFill className="size-6 fill-current" />
                          </button>
                        }
                      />
                    </div>
                  </div>

                </ScrollReveal>
              </div>
            </div>{/* Bottom Row */}
          </div>
        </div>{/* Container */}
      </div>
    </header>
  );
}
