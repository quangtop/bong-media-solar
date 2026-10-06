"use client";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

import shapeA from "@/images/decoration/shape-a.png";
import lineB from "@/images/decoration/line-b.png";
import hexagonSmallA from "@/images/decoration/hexagon-small-a.png";
import hexagonLargeHalfB from "@/images/decoration/hexagon-large-half-b.png";

import { PROJECTS_DATA } from "@/data/projects";

type ProjectProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};


export default function Project({ gap = "default", className }: ProjectProps) {
  return (
    <Section gap={gap} className={cn("bg-primary-lighter", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75" />
        <Image src={lineB} width={348} height={373} alt="" className="absolute top-0 inset-s-0 w-87 h-93.25" />
        <Image src={hexagonLargeHalfB} width={280} height={429} alt="" className="absolute top-1/3 inset-s-0 w-70 h-107.25" />
        <Image src={hexagonSmallA} width={181} height={157} alt="" className="absolute top-1/10 translate-container-end w-45.25 h-39.25" />
      </div>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-9 2xl:column-8">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Projects powering <span className="text-primary">real places.</span></h2>
                <p className="text-base xl:text-lg leading-relaxed text-body max-w-md mx-auto">Explore four featured installations across our international network, highlighting how our seamless technology delivers reliable power.</p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>
      <SectionContent>
        <div className="container">

          <div className="row">
            {PROJECTS_DATA.slice(0, 4).map((project, index) => (
              <div className="md:column-6" key={project.title}>

                <ScrollReveal className={cn("group relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-end border-b-6 border-primary", getDelayClass(index))} >
                  <Link href={`/project/${project.id}`} >
                    <Image src={project.image} alt={project.title} className="object-cover transition-transform duration-700 group-hover:scale-105 min-h-100" />
                    <div className="absolute inset-0 bg-linear-to-b from-darker/9 via-darker/35 via-30% to-darker/92 to-72%" />
                    <div className="absolute bottom-0 px-9 pb-9 inset-x-0 z-10">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-primary-light text-[11px] font-normal backdrop-blur-xl tracking-wider uppercase mb-4.5"> {project.tag} </span>
                      <h3 className="text-2xl lg:text-3xl leading-snug font-semibold text-white mb-1"> {project.title} </h3>
                      <p className="text-base/relaxed text-white/65">  {project.location} </p>
                      <div className="pt-4.5 border-t border-white/18 flex flex-wrap gap-x-7 gap-y-5 mt-5.5">
                        {project.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-lg lg:text-xl leading-relaxed font-medium text-white mb-1"> {stat.value} </div>
                            <div className="text-xs text-white/60 font-normal tracking-tight uppercase"> {stat.label} </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </SectionContent>
    </Section>
  );
}
