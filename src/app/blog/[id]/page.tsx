import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { BLOG_DATA } from "@/data/blog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowLongRight } from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import blogG from "@/images/blog-g.jpg";
import { Button } from "@/components/ui/button";
import { useFormatDate } from "@/hooks/useFormatDate";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_DATA.find((item) => item.id === id) || BLOG_DATA[0];
  return {
    title: `${post.title} - Solurax Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_DATA.find((item) => item.id === id) || BLOG_DATA[0];

  return (
    <React.Fragment>
      <PageHeader
        heading={post.title}
        smallerHeading={true}
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Section gap="top">
          <SectionContent>
            <div className="container">
              <div className="row justify-center">
                <div className="2xl:column-8 xl:column-9">
                  <ScrollReveal delay={100} className="relative pb-7">
                    <Image src={post.image} alt={post.title} className="w-full rounded-3xl" />
                  </ScrollReveal>
                  <ScrollReveal delay={150} className="flex flex-wrap items-center md:px-12 lg:px-20 pb-5">
                    <div className="flex items-center gap-4 text-xs md:text-sm text-body">
                      <div className="flex items-center gap-2">
                        <Avatar size="lg" className="bg-primary/10 text-primary font-bold">
                          <AvatarImage src={post.author.avatar} alt="" />
                        </Avatar>
                        <span className="font-medium text-base text-body">{post.author.name}</span>
                      </div>
                      <div className="h-3 border-l border-body/20 shrink-0" />
                      <div className="font-medium text-base text-body">{useFormatDate(post.date)}</div>
                      <div className="h-3 border-l border-body/20 shrink-0" />
                      <div className="font-medium text-base text-body"> 5 Min Read</div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <article className="max-w-full dynamic-prose">
                      {/* Introduction */}
                      <h2>Introduction</h2>
                      <p>Imagine turning your roof into a reliable source of passive income while protecting the environment. When you switch to a modern solar power system, your panels often generate more electricity than your home actually consumes—especially during bright, sunny afternoons. Instead of letting that surplus energy go to waste, you can legally feed it back into the national utility grid and get paid for it.</p>
                      <p>This system is called Net Metering, and here is exactly how you can leverage it to slash your bills to zero or even earn credits from your power company.</p>
                      <Image src={blogG} alt="Solar Panel Installation" />

                      <h3> What is Net Metering and How Does It Work? </h3>
                      <p> At its core, Net Metering is a billing mechanism that credits solar energy system owners for the electricity they add to the power grid:</p>

                      <ul>
                        <li>
                          <strong>The Daytime Surplus:</strong> During the peak hours of the day, your solar panels work at maximum efficiency. If your house consumes less energy than you produce, the extra electricity flows back through a special bi-directional smart meter and goes out into the local power grid to supply your neighbors.
                        </li>
                        <li>
                          <strong>The Nighttime Draw:</strong> At night, when your solar panels aren't producing, you automatically pull electricity back from the grid to power your home.
                        </li>
                        <li>
                          <strong>The Net Calculation:</strong> At the end of the month, your utility provider subtracts the amount of energy you gave to the grid from the amount you consumed. You only pay for the net difference. If you gave more than you took, your bill carries over a negative balance or credit.
                        </li>
                      </ul>

                      <blockquote>
                        "We can easily manage if we will only take, each day, the burden appointed to it. But the load will be far heavier if we carry yesterday's burden over again today, and then add the burden of the morrow before we are required to bear it."
                        <cite> — Sam Kurtis, Product Manager </cite>
                      </blockquote>

                      <h3> AI Regulations and Data Protection Laws</h3>
                      <p>
                        The distinction is crucial for any business leader planning their AI and clean energy strategy. Combine the sharp focus on ROI with the power of modern frameworks to build enterprise intelligence. Rather than guessing, our software suite provides advanced metrics — location, project type, budget range — to help you pinpoint your system for the best opportunities. Make sure that it's providing your updates in real-time, so that ROI can respond right away.
                      </p>
                    </article>
                  </ScrollReveal>
                </div>
              </div>

            </div>
          </SectionContent>
        </Section>

        {/* Related Posts Section */}
        <Section>
          <SectionHead>
            <div className="container text-center">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl font-bold text-darker md:text-4xl">More blog posts like this</h2>
              </ScrollReveal>
            </div>
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
                  {BLOG_DATA.slice(0, 3).map((item, index) => (
                    <CarouselItem key={index} className="pl-7.5 basis-1/1 md:basis-1/2 xl:basis-1/3">
                      <ScrollReveal delay={100} className="flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full">
                        <Image src={item.image} alt={item.title} className="w-full rounded-t-2xl" />
                        <div className="p-8">
                          <div className="text-primary text-sm/normal font-medium mb-3">{item.date}</div>
                          <h5 className=" text-xl xl:text-2xl leading-normal font-bold text-darker line-clamp-2 mb-4">{item.title}</h5>
                          <p className="text-base xl:text-lg leading-relaxed text-body line-clamp-2 mb-4">{item.excerpt}</p>
                          <Button variant="link" icon={<ArrowLongRight />}> Explore </Button>
                        </div>
                      </ScrollReveal>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className="pt-10 xl:hidden" />
              </Carousel>
            </div>
          </SectionContent>
        </Section>

      </main>
    </React.Fragment>
  );
}
