import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { SERVICE_DATA } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowLongRight, CheckCircleFill, CallFill, MailFill } from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getDelayClass } from "@/lib/delay-utils";
import { cn } from "@/lib/utils";


import { ArrowRight } from "@/components/icons";
import { CollapsibleCard, Breakpoint } from "@/components/ui/collapsible-card";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return SERVICE_DATA.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICE_DATA.find((item) => item.id === id) || SERVICE_DATA[0];
  return {
    title: `${service.title} - Solurax Energy Services`,
    description: service.description,
  };
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const service = SERVICE_DATA.find((item) => item.id === id) || SERVICE_DATA[0];
  const otherServices = SERVICE_DATA.filter((item) => item.id !== service.id);

  return (
    <React.Fragment>
      <PageHeader
        heading={service.title}
        smallerHeading={true}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/service", label: "Services" }
        ]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden bg-white">
        <Section>
          <SectionContent>
            <div className="container">
              <div className="row g-12 2xl:gx-16 items-start">
                <div className="lg:column-4">
                  <div className="sticky top-28 space-y-8">
                    <ScrollReveal delay={100}>
                      <CollapsibleCard title="All Energy Services" expanded="lg" >
                        <ul className="row g-1">
                          {SERVICE_DATA.map((item) => {
                            const isActive = item.id === service.id;
                            return (
                              <li className="sm:column-6 lg:column-12" key={item.id}>
                                <Link href={`/service/${item.id}`} className={cn("group flex items-center justify-between py-3 px-3 rounded-xl text-xs lg:text-sm 2xl:text-base font-medium transition-all duration-300", isActive ? "bg-primary-lighter/70 text-primary" : "text-body hover:text-darker hover:translate-x-1")} >
                                  <div className="flex items-center gap-2.5">
                                    <span className={cn("size-2 rounded-full transition-all duration-300", isActive ? "bg-primary scale-120" : "bg-gray-300 group-hover:bg-primary group-hover:scale-110")} />
                                    <span>{item.title}</span>
                                  </div>
                                  <ArrowRight className={cn("size-4 transition-all duration-300", isActive ? "fill-primary translate-x-0" : "fill-gray-400 group-hover:fill-darker group-hover:translate-x-0.5")} />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </CollapsibleCard>
                    </ScrollReveal>

                    <ScrollReveal delay={200} className="hidden lg:block p-8 bg-darker rounded-3xl text-white relative overflow-hidden shadow-xl border-b-4 border-primary">
                      <div className="relative z-10">
                        <div className="size-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                          <CallFill className="size-7 fill-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3">Need Custom Solar Planning?</h4>
                        <p className="text-sm/relaxed text-white/80 mb-6">
                          Speak directly with our solar engineers to calculate system payback and custom site requirements.
                        </p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm text-white/90">
                            <CallFill className="size-4 fill-primary shrink-0" />
                            <span>+1 (800) 555-SOLAR</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-white/90">
                            <MailFill className="size-4 fill-primary shrink-0" />
                            <span>support@solurax-energy.com</span>
                          </div>
                        </div>
                        <Button render={<Link href="/contact" />} size="lg" >
                          Request Consultation
                        </Button>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>{/* Sidebar */}
                <div className="lg:column-8">
                  <ScrollReveal delay={100} className="mb-8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      placeholder="blur"
                      className="w-full rounded-3xl border-b-4 border-primary object-cover max-h-115"
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={150} className="mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                      Comprehensive Energy Solution
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darker leading-tight mb-4">
                      {service.subtitle}
                    </h2>
                    <p className="text-lg/relaxed text-body text-pretty">
                      {service.fullDescription}
                    </p>
                  </ScrollReveal>

                  {/* Key Features List */}
                  <ScrollReveal delay={200} className="p-8 rounded-3xl bg-primary-lighter/40 border border-primary/20 mb-10">
                    <h3 className="text-2xl font-bold text-darker mb-6">Key Engineering Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircleFill className="size-5 fill-primary stroke-primary shrink-0 mt-0.5" />
                          <span className="text-base font-medium text-darker">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>

                  {/* Benefits Grid */}
                  <div className="mb-12">
                    <ScrollReveal delay={100} className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-darker">Core Business & Home Benefits</h3>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {service.benefits.map((benefit, idx) => (
                        <ScrollReveal key={idx} className={cn("p-6 bg-white border border-lighter border-b-4 border-b-primary rounded-2xl shadow-sm h-full", getDelayClass(idx))}>
                          <div className="size-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary font-bold text-lg mb-4">
                            0{idx + 1}
                          </div>
                          <h4 className="text-lg font-semibold text-darker mb-2">{benefit.title}</h4>
                          <p className="text-sm/relaxed text-body">{benefit.description}</p>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>

                  {/* Specifications Table */}
                  <div className="mb-12">
                    <ScrollReveal delay={100} className="mb-12">
                      <h3 className="text-2xl lg:text-3xl font-bold text-darker mb-6">Technical Specifications</h3>
                    </ScrollReveal>
                    <ScrollReveal delay={150} className="overflow-hidden rounded-2xl border border-lighter bg-white shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <tbody>
                          {service.specifications.map((spec, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-primary-lighter/30" : "bg-white"}>
                              <td className="p-4.5 font-semibold text-darker border-b border-lighter/60 w-1/3">{spec.label}</td>
                              <td className="p-4.5 text-body border-b border-lighter/60">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </ScrollReveal>
                  </div>

                  {/* Service FAQs */}
                  <div className="mb-8">
                    <ScrollReveal delay={100} className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-darker">Frequently Asked Questions</h3>
                    </ScrollReveal>
                    <div className="space-y-4">
                      {service.faqs.map((faq, idx) => (
                        <ScrollReveal key={idx} className={cn("p-6 bg-white border border-lighter rounded-2xl shadow-xs", getDelayClass(idx))}>
                          <h5 className="text-lg font-semibold text-darker mb-2 flex items-center gap-2">
                            <span className="text-primary font-bold">Q:</span> {faq.question}
                          </h5>
                          <p className="text-base/relaxed text-body ps-6">{faq.answer}</p>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>

                  <ScrollReveal delay={100} className="lg:hidden p-8 bg-darker rounded-3xl text-white relative overflow-hidden shadow-xl border-b-4 border-primary">
                    <div className="relative z-10">
                      <div className="size-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                        <CallFill className="size-7 fill-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">Need Custom Solar Planning?</h4>
                      <p className="text-sm/relaxed text-white/80 mb-6">
                        Speak directly with our solar engineers to calculate system payback and custom site requirements.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-white/90">
                          <CallFill className="size-4 fill-primary shrink-0" />
                          <span>+1 (800) 555-SOLAR</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/90">
                          <MailFill className="size-4 fill-primary shrink-0" />
                          <span>support@solurax-energy.com</span>
                        </div>
                      </div>
                      <Button render={<Link href="/contact" />} size="lg">
                        Request Consultation
                      </Button>
                    </div>
                  </ScrollReveal>
                </div>{/* Main Column */}

              </div>{/* Row */}
            </div>{/* Container */}
          </SectionContent>
        </Section>
      </main>
    </React.Fragment>
  );
}
