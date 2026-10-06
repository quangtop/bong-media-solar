"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ArrowLongLeft, ArrowLongRight } from "@/components/icons";
import { BLOG_DATA } from "@/data/blog";
import { useFormatDate } from "@/hooks/useFormatDate";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DELAY_50, ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

const POSTS_PER_PAGE = 6;

type BlogAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function BlogAll({ gap = "default", className }: BlogAllProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Latest featured post (always at top)
  const featuredPost = BLOG_DATA.find((item) => item.featured) || BLOG_DATA[0];

  // Exclude featured post from the main grid list
  const otherPosts = BLOG_DATA.filter((item) => item.id !== featuredPost.id);

  // Pagination calculation
  const totalPages = Math.ceil(otherPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = otherPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    const gridElem = document.getElementById("blog-grid");
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
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="column-12">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Solurax Insights & Energy News</h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">Expert Guides, Industry Trends, and Smart Tips to Power Your Life Efficiently.</p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          {/* Latest Featured Post Card */}
          {featuredPost && (
            <div className="pb-10">
              <ScrollReveal delay={100}>
                <Link href={`/blog/${featuredPost.id}`} className="group block bg-white border border-lightest border-b-6 border-b-primary rounded-2xl p-4 shadow-[0_4px_20px_0] shadow-black/8 transition-all duration-300" >
                  <div className="row gy-4">
                    <div className="lg:column-6">
                      <div className="lg:pe-7 h-full">
                        <Image src={featuredPost.image} alt={featuredPost.title} className="rounded-xl lg:min-h-full object-cover" />
                      </div>
                    </div>
                    <div className="lg:column-6 self-center">
                      <div className="xl:pe-4 py-4 max-lg:px-4">
                        <Badge pill className="mb-5 text-sm font-medium py-1 px-4 text-white">FEATURED</Badge>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold text-darker group-hover:text-primary transition-colors mb-4">
                          {featuredPost.title}
                        </h3>
                        <p className="text-body text-sm md:text-base/relaxed line-clamp-3 mb-8">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs md:text-sm text-body">
                          <div className="flex items-center gap-2">
                            <Avatar size="lg" className="bg-primary/10 text-primary font-bold">
                              <AvatarImage src={featuredPost.author.avatar} alt="" />
                            </Avatar>
                            <span className="font-medium text-base text-body">{featuredPost.author.name}</span>
                          </div>
                          <div className="h-3 border-l border-body/20 shrink-0" />
                          <div className="font-medium text-base text-body">{useFormatDate(featuredPost.date)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          )}

          {/* Grid Posts (Paginated 6 per page) */}
          <div id="blog-grid" className="row g-8">
            {currentPosts.map((post, index) => (
              <div key={post.id} className="md:column-6 xl:column-4">
                <ScrollReveal className={cn("flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full", getDelayClass(index, DELAY_50, [2, -1]))}>
                  <Link href={`/blog/${post.id}`}
                    className="group flex flex-col" >
                    <Image src={post.image} alt={post.title} className="rounded-t-2xl" />
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div className="text-primary text-sm/4 font-medium mb-3">
                        {useFormatDate(post.date)}
                      </div>
                      <h4 className="text-lg md:text-xl lg:text-2xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                        {post.title}
                      </h4>
                      <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="pt-6">
                        <Button variant="link" icon={<ArrowLongRight />}><span>Learn More</span></Button>
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
