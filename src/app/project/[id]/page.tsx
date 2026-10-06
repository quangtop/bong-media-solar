import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionContent } from "@/components/layout/section";
import { PROJECTS_DATA } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import gallery1 from "@/images/project-gallery-a.jpg";
import gallery2 from "@/images/project-gallery-b.jpg";
import gallery3 from "@/images/project-gallery-c.jpg";

import lineG from "@/images/decoration/line-g.png"

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS_DATA.find((item) => item.id === id) || PROJECTS_DATA[0];
  return {
    title: `${project.title} - Solurax Energy Projects`,
    description: `Details and specifications for ${project.title} clean energy project.`,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((item) => item.id === id) || PROJECTS_DATA[0];

  return (
    <React.Fragment>
      <PageHeader
        heading={project.title}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/project", label: "Project" },
          { label: project.title },
        ]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden bg-white">
        <Section>
          <SectionContent>
            <div className="container">
              {/* Dynamic Project Image */}
              <ScrollReveal delay={100} className="mb-10 lg:mb-15">
                <div className="relative w-full h-80 sm:h-100 lg:h-152 rounded-3xl overflow-hidden shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </ScrollReveal>

              {/* Two Column Layout */}
              <div className="row g-12 items-start">
                {/* Main Content Column */}
                <div className="lg:column-8 space-y-12">

                  {/* Solar Panel Energy Installation Section (Inline text from design) */}
                  <ScrollReveal delay={150} className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-darker">
                      Solar Panel Energy Installation
                    </h2>
                    <div className="space-y-4 text-base/relaxed text-body">
                      <p>
                        The Sun Valley region faced rising energy demand and an aging grid unable to meet peak summer loads without costly fossil-fuel peaker plants. Solurax designed and deployed a 120 MW solar array paired with grid-scale storage, replacing dependence on imported power with locally generated, dispatchable clean energy.
                      </p>
                      <p>
                        Eighteen months after breaking ground, the facility now supplies more than 85,000 homes and has become the anchor clean-energy asset for the entire corridor, cutting regional emissions while stabilizing prices across the grid.
                      </p>
                      <p>
                        Eighteen months after breaking ground, the facility now supplies more than 85,000 homes and has become the anchor clean-energy asset for the entire corridor, cutting regional emissions while stabilizing prices across the grid.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Benefits of Project Section (Inline text from design) */}
                  <ScrollReveal delay={200} className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-darker">
                      Benefits of Project
                    </h3>
                    <div className="space-y-4 text-base/relaxed text-body">
                      <p>
                        A utility-scale solar and storage facility engineered to power tens of thousands of homes with locally generated, dispatchable clean energy.
                      </p>
                      <p>
                        Our team of experts provides in-depth consultations to help you explore the best renewable energy options for your property. We assess energy needs, budget, and location to develop customized, sustainable solutions for homes, businesses, and public institutions. Maximize your energy efficiency with our smart energy management systems. We offer tools and software to monitor, analyze, and optimize your energy consumption, helping you make the most of your renewable energy investment.
                      </p>
                    </div>

                    {/* Benefit Cards Grid (Inline text from design) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-2">
                      <div className="p-7 rounded-2xl bg-white border border-dark/12 hover:border-primary/40 transition-colors">
                        <div className="size-12 rounded-xl bg-primary/12 flex items-center justify-center mb-5 text-primary">
                          <svg className="size-6 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                          </svg>
                        </div>
                        <h4 className="text-base font-bold text-darker mb-2">
                          High-Efficiency PV Panels
                        </h4>
                        <p className="text-sm/relaxed text-body">
                          Bifacial monocrystalline modules rated at 22.8% efficiency, engineered for 20+ years of consistent output.
                        </p>
                      </div>

                      <div className="p-7 rounded-2xl bg-white border border-dark/12 hover:border-primary/40 transition-colors">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                          <svg className="size-6 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <h4 className="text-base font-bold text-darker mb-2">
                          Real-Time Monitoring
                        </h4>
                        <p className="text-sm/relaxed text-body">
                          14,200 sensors stream live telemetry, with AI models flagging underperformance automatically.
                        </p>
                      </div>

                      <div className="p-7 rounded-2xl bg-white border border-dark/12 hover:border-primary/40 transition-colors">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                          <svg className="size-6 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                          </svg>
                        </div>
                        <h4 className="text-base font-bold text-darker mb-2">
                          Grid Optimization
                        </h4>
                        <p className="text-sm/relaxed text-body">
                          Load-balancing software routes power dynamically across 3,600 distribution nodes.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Challenge of Project Section (Inline text from design) */}
                  <ScrollReveal delay={250} className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-darker">
                      The Challenge Of Project
                    </h3>
                    <p className="text-base/relaxed text-body">
                      Our mission is to empower businesses size to thrive in an business's ever changing marketplace. We are committed to the delivering exceptional the value through strategic insight, innovative approaches. Our consulting of our missing empower businesses of all sizes to thrive. Committed to the delivering exceptional.
                    </p>

                    {/* Gallery Images Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                      <div className="relative h-48 sm:h-44 lg:h-52 rounded-2xl overflow-hidden shadow-xs border border-lighter">
                        <Image
                          src={gallery1}
                          alt="Project gallery detail 1"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative h-48 sm:h-44 lg:h-52 rounded-2xl overflow-hidden shadow-xs border border-lighter">
                        <Image
                          src={gallery2}
                          alt="Project gallery detail 2"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative h-48 sm:h-44 lg:h-52 rounded-2xl overflow-hidden shadow-xs border border-lighter">
                        <Image
                          src={gallery3}
                          alt="Project gallery detail 3"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                </div>

                {/* Sidebar Column */}
                <div className="lg:column-4">
                  <div className="sticky top-28 space-y-7.5">

                    <ScrollReveal delay={150} className="rounded-3xl overflow-hidden shadow-[0_0_13px_2px] shadow-black/8 bg-white">
                      <div className="bg-primary py-6 px-4 text-center">
                        <h3 className="text-2xl/normal font-semibold text-white">
                          Project Details
                        </h3>
                      </div>

                      <div className="p-6 pb-4 divide-y divide-dark/8">
                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            CATEGORY
                          </span>
                          <span className="text-base font-medium text-darker">
                            Solar Energy
                          </span>
                        </div>

                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            ADDRESS
                          </span>
                          <span className="text-base font-medium text-darker">
                            258 Street, California, USA
                          </span>
                        </div>

                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            CAPACITY
                          </span>
                          <span className="text-base font-medium text-darker">
                            120 MW
                          </span>
                        </div>

                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            COMPLETION
                          </span>
                          <span className="text-base font-medium text-darker">
                            March 2025
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200} className=" text-center p-8 sm:p-10 bg-darker rounded-3xl text-white relative overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Image src={lineG} height={282} width={419} alt="" className="absolute" />
                      </div>
                      <span className="text-base/tight font-bold uppercase tracking-wider block mb-3">
                        CONTACT FOR INQUIRY
                      </span>
                      <h4 className="text-4xl leadin-tight font-bold text-white">
                        How can we help you today?
                      </h4>
                      <div className="pt-9">
                        <Button render={<Link href="/contact" />} size="lg">
                          Contact Us
                        </Button>
                      </div>
                    </ScrollReveal>

                  </div>
                </div>

              </div>
            </div>
          </SectionContent>
        </Section>
      </main>
    </React.Fragment>
  );
}
