"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { ArrowLongLeft, ArrowLongRight } from "@/components/icons";

const PROJECTS_PER_PAGE = 6;

export default function ProjectsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTS_DATA.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = PROJECTS_DATA.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    const gridElem = document.getElementById("projects-grid");
    if (gridElem) {
      const menubarHeightStr = getComputedStyle(document.documentElement)
        .getPropertyValue("--menubar-height")
        .trim();
      const offset = parseInt(menubarHeightStr, 10) || 76;
      const elementPosition = gridElem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset - 24;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const formatPageNum = (num: number) => String(num).padStart(2, "0");

  return (
    <Section className="bg-white">
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-9 2xl:column-8">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  Projects powering <span className="text-primary">real places.</span>
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body max-w-md mx-auto">
                  Explore four featured installations across our international network, highlighting how our seamless technology delivers reliable power.
                </p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>

      <SectionContent>
        <div className="container">
          <div className="row">
            {currentProjects.map((project, index) => (
              <div className="md:column-6" key={project.id}>
                <ScrollReveal className={cn("group relative rounded-2xl overflow-hidden shadow-md border-b-6 border-primary", getDelayClass(index))} >
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <ScrollReveal delay={150} className="mt-16 flex items-center justify-center gap-3">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-darker transition-colors px-3 py-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous Page"
              >
                <ArrowLongLeft className="size-4" />
                <span>Previous</span>
              </button>

              {/* Page Counter Display (e.g. 01 / 03) */}
              <span className="text-xs font-medium text-body px-2">
                {formatPageNum(currentPage)} / {formatPageNum(totalPages)}
              </span>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={cn(
                    "size-9 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer",
                    currentPage === pageNum
                      ? "bg-darker text-white shadow-xs scale-105"
                      : "bg-white border border-lighter text-body hover:bg-gray-100 hover:text-darker"
                  )}
                >
                  {formatPageNum(pageNum)}
                </button>
              ))}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-darker transition-colors px-3 py-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next Page"
              >
                <span>Next</span>
                <ArrowLongRight className="size-4" />
              </button>
            </ScrollReveal>
          )}
        </div>
      </SectionContent>
    </Section>

  );
}
