"use client";

import { Section, SectionContent } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import values from "@/images/values.jpg";
import { CheckCircleFill, PlayFill } from "../icons";
import VideoPopup from "@/components/ui/video-popup";
import shapeA from "@/images/decoration/shape-a.png";
import lineB from "@/images/decoration/line-b.png";
import lineE from "@/images/decoration/line-e.png";
import hexagonSmallA from "@/images/decoration/hexagon-small-a.png";
import hexagonLargeHalfB from "@/images/decoration/hexagon-large-half-b.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type ValuesProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Values({ gap = "default", className }: ValuesProps) {
  return (
    <Section gap={gap} className={cn("bg-primary-lighter", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75" />
        <Image src={lineB} width={348} height={373} alt="" className="absolute top-0 inset-s-0 w-87 h-93.25" />
        <Image src={lineE} width={361} height={647} alt="" className="absolute bottom-0 inset-e-0 w-95.25 h-161.75" />
        <Image src={hexagonLargeHalfB} width={280} height={429} alt="" className="absolute bottom-10 inset-s-0 w-70 h-107.25" />
        <Image src={hexagonSmallA} width={181} height={157} alt="" className="absolute top-1/10 translate-container-end w-45.25 h-39.25" />
      </div>
      <SectionContent>
        <div className="container">
          <div className="justify-between row items-center gy-8">
            <div className="lg:column-6 xl:column-6">
              <ScrollReveal delay={100} className="text-block xl:pe-20">
                <div className="mb-6">
                  <div className="mb-3 text-sm/4.25 font-medium uppercase text-primary">Our Value</div>
                  <h2 className="mb-4 text-darker text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold">Aligning technology with business strategy.</h2>
                  <p className="text-lg/relaxed">We created Solurax to close that gap. Our goal is to explain options in plain language, share honest recommendations, and install systems that perform well over time. We believe solar should feel like a straightforward upgrade, not a complicated project.</p>
                </div>
                <div className="flex flex-col gap-5 xl:pe-15">
                  <div className="flex gap-2.5">
                    <CheckCircleFill className="size-5.5 xl:mt-1 shrink-0 fill-primary" />
                    <div className="">
                      <h5 className="text-darker font-semibold text-xl xl:text-2xl leading-tight mb-2.5">Our Vision</h5>
                      <p className="text-base/relaxed text-body">Transforming industries through impactful, forward - thinking digital solutions.</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <CheckCircleFill className="size-5.5 xl:mt-1 shrink-0 fill-primary" />
                    <div className="">
                      <h5 className="text-darker font-semibold  text-xl xl:text-2xl leading-tight mb-2.5">Our Mission</h5>
                      <p className="text-base/relaxed text-body">Delivering bespoke digital solutions designed to amplify brand connections.</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <CheckCircleFill className="size-5.5 xl:mt-1 shrink-0 fill-primary" />
                    <div className="">
                      <h5 className="text-darker font-semibold  text-xl xl:text-2xl leading-tight mb-2.5">Our Motto</h5>
                      <p className="text-base/relaxed text-body">Driven by creativity, anchored in integrity, and powered by innovation.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
            <div className="lg:column-6 xl:column-6">
              <ScrollReveal delay={300} className="relative">
                <Image src={values} alt="" className="w-full max-lg:max-h-120 rounded-2xl border-b-4 border-primary" />
                <VideoPopup video="https://www.youtube.com/embed/AcKskVETHAU" trigger={<button className="absolute bottom-7 inset-e-7.5 size-12 bg-primary rounded-full flex justify-center items-center cursor-pointer"><PlayFill className="size-7 fill-white" /></button>} />
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>{/* Section Content */}
    </Section>
  );
}
