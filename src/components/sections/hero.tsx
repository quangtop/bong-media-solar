"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import heroBg from "@/images/hero-bg.jpg";
import heroVideoCover from "@/images/hero-video-cover.jpg";
import { Button } from "@/components/ui/button";
import { Globe, PlayFill } from "@/components/icons";

import partnerA from "@/images/partner-a.png";
import partnerB from "@/images/partner-b.png";
import partnerC from "@/images/partner-c.png";
import VideoPopup from "@/components/ui/video-popup";
import Link from "next/link";
import { CountUp } from "@/hooks/useAnimatedCounter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type HeroProps = {
  className?: string;
  wrapperClassName?: string;
};

export default function Hero({ className, wrapperClassName }: HeroProps) {
  return (
    <>
      <header className={cn("relative flex flex-col pt-(--menubar-height)", className)}>
        <div className={cn("flex-1 flex items-center pt-12 md:pt-16 xl:pt-22 2xl:pt-35 z-20 relative", wrapperClassName)}>
          <div className="absolute -top-(--menubar-height) inset-x-0 bottom-0 pointer-events-none overflow-hidden -z-10 bg-darker parallax-bg">
            <Image src={heroBg} width={1920} height={1010} placeholder="blur" alt="Hero background" priority className="object-cover object-top w-full h-full" />
            <div className="absolute inset-0 bg-darker/70 transition-opacity duration-300" />
          </div>
          <div className="container">
            <div className="row">
              <div className="xl:column-7">
                <ScrollReveal stagger className="xl:pe-10">
                  <div className="reveal-item reveal-delay-100 font-medium text-primary text-2xl lg:text-3xl 2xl:text-4xl leading-tight mb-4 2xl:mb-6">  Renewable Energy  </div>

                  <h1 className="reveal-item reveal-delay-150 text-white font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-[5.375rem] leading-[1.2] mb-8"> Digital in the Future of Energy </h1>

                  <p className="reveal-item reveal-delay-200 text-lg/relaxed text-white/80 mb-11">
                    Custom-engineered solar systems that cut your power bill, boost your home's value, and put you on your own grid. Fully installed in weeks, not months.
                  </p>

                  <ul className="reveal-item reveal-delay-250 flex flex-wrap gap-4">
                    <li>
                      <Button nativeButton={false} render={<Link href="/contact" />} className="uppercase shadow-lg hover:shadow-primary/25 transition-all" size="lg">
                        Get Free Quote
                      </Button>
                    </li>
                    <li>
                      <Button nativeButton={false} render={<Link href="/service" />} className="uppercase backdrop-blur-md" size="lg" variant="outline">
                        Learn More
                      </Button>
                    </li>
                  </ul>

                  <ul className="reveal-item reveal-delay-300 flex flex-wrap gap-4 sm:gap-0 mt-12 lg:mt-16 2xl:mt-30 pb-8 xl:pb-13 pt-4.5 border-t border-white/20">
                    <li>
                      <div className="text-3xl font-semibold text-white mb-2.5">
                        <CountUp end={14200} suffix="+" />
                      </div>
                      <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                        Systems <br /> Installed
                      </div>
                    </li>
                    <li className="my-5 min-[420px]:my-0 min-[420px]:mx-4 sm:mx-10 md:mx-20 xl:mx-14 2xl:mx-20 sm:border-l border-white/20 hidden sm:block"></li>
                    <li>
                      <div className="text-3xl font-semibold text-white mb-2.5">
                        <CountUp end={2840} prefix="$" />
                      </div>
                      <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                        Avg.Annual <br /> Savings
                      </div>
                    </li>
                    <li className="my-5 min-[420px]:my-0 min-[420px]:mx-4 sm:mx-10 md:mx-20 xl:mx-14 2xl:mx-20 sm:border-l border-white/20 hidden sm:block"></li>
                    <li>
                      <div className="text-3xl font-semibold text-white mb-2.5">
                        <CountUp end={4.9} decimals={1} suffix="/5" />
                      </div>
                      <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                        Customer <br /> Rating
                      </div>
                    </li>
                  </ul>
                </ScrollReveal>
              </div>{/* column */}

              <div className="xl:column-5">
                <ScrollReveal stagger className="relative z-20">
                  <div className="reveal-item reveal-delay-400 pb-12 lg:pb-16 2xl:pb-30">
                    <h4 className="text-white font-semibold text-2xl md:text-3xl leading-[1.33] mb-4">
                      Enable reliable, cost effective and dispatchable power
                    </h4>
                    <p className="text-lg/relaxed text-white/80 mb-7 2xl:mb-10">
                      Sun Energy has accumulated more than 9 gigawatts of total global installed base and backlog for its inverter
                    </p>
                    <Link
                      href="/packages"
                      className="group inline-block p-0.5 rounded-full bg-linear-to-b from-white to-white/80 text-darker transition-transform hover:scale-105 duration-300"
                    >
                      <span className="bg-white/80 backdrop-blur-3xl inline-flex rounded-full items-center gap-4 ps-2.5 pe-6.5 py-2.5 text-2xl/4.5 font-medium transition-all group-hover:bg-white group-hover:text-primary">
                        <span className="inline-flex items-center justify-center rounded-full size-10 fill-white bg-primary transition-transform group-hover:rotate-12 duration-300">
                          <Globe className="size-6" />
                        </span>
                        <span>Save Earth</span>
                      </span>
                    </Link>
                  </div>

                  <div className="reveal-item reveal-delay-500 flex flex-col md:flex-row xl:flex-col items-center gap-10 bg-white border-b-4 border-b-primary px-8 pt-10 pb-9 rounded-2xl text-center mb-12 xl:-mb-52.5 shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_20px_45px_rgba(19,169,88,0.2)] duration-500 relative z-20">
                    <div>
                      <div className="text-4xl lg:text-[5rem] leading-none text-primary font-bold mb-3">
                        <CountUp end={10} suffix="M+" />
                      </div>
                      <div className="text-2xl lg:text-[2rem] leading-[1.2] font-medium text-darker xl:px-10 2xl:px-20 text-pretty">
                        Worldwide product sales per year
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden bg-darker group/video w-full">
                      <Image src={heroVideoCover} width={702} height={456} placeholder="blur" alt="Hero Video Cover" className="w-full opacity-80 transition-transform duration-700 group-hover/video:scale-105" />
                      <VideoPopup
                        video="https://www.youtube.com/embed/AcKskVETHAU"
                        trigger={
                          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 bg-white rounded-full flex justify-center items-center cursor-pointer shadow-lg transition-all duration-300 group-hover/video:scale-110 group-hover/video:bg-primary group-hover/video:text-white">
                            <PlayFill className="size-9 fill-primary group-hover/video:fill-white transition-colors" />
                          </button>
                        }
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>{/* column */}
            </div>{/* row */}
          </div>{/* container */}
        </div>

        {/* Partners Banner */}
        <div className="bg-white pt-20 lg:pt-24 xl:pt-0 xl:h-52.5 flex items-center relative z-10">
          <div className="container">
            <div className="row">
              <div className="xl:column-7">
                <ScrollReveal className="flex flex-nowrap reveal-delay-250">
                  <div className="text-sm/6 font-semibold text-darker uppercase self-center">
                    Trusted by the world's <br /> biggest brands
                  </div>
                  <div className="shrink-0 grow-0 my-1.5 border-l border-darker opacity-30 mx-6.5"></div>
                  <ul className="flex gap-y-2 gap-x-8 flex-wrap items-center">
                    <li className="transition-all duration-300 hover:opacity-100 hover:scale-105">
                      <Image src={partnerA} width={254} height={80} placeholder="blur" alt="Partner A" className="w-auto h-10 opacity-60" />
                    </li>
                    <li className="transition-all duration-300 hover:opacity-100 hover:scale-105">
                      <Image src={partnerB} width={268} height={80} placeholder="blur" alt="Partner B" className="w-auto h-10 opacity-60" />
                    </li>
                    <li className="transition-all duration-300 hover:opacity-100 hover:scale-105">
                      <Image src={partnerC} width={232} height={80} placeholder="blur" alt="Partner C" className="w-auto h-10 opacity-60" />
                    </li>
                  </ul>
                </ScrollReveal>
              </div>{/* column */}
            </div>{/* row */}
          </div>{/* container */}
        </div>
      </header>
    </>
  );
}