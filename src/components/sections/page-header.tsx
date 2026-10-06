"use client";
import React from "react"
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import pageHeaderBg from "@/images/page-header-bg.jpg";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface BreadcrumbItemData {
    label: ReactNode;
    href?: string;
}

interface PageHeaderProps {
    heading: string;
    breadcrumb?: BreadcrumbItemData[];
    className?: string;
    smallerHeading?: boolean;
}

export default function PageHeader({ heading, smallerHeading = false, breadcrumb = [], className }: PageHeaderProps) {
    return (
        <header className={cn("relative flex flex-col pt-(--menubar-height)", className)}>
            <div className="absolute inset-0 overflow-hidden -z-10 bg-darker">
                <Image src={pageHeaderBg} width={1920} height={936} placeholder="blur" alt="" className="object-cover object-top w-full h-full parallax-bg" />
                <div className="absolute inset-0 bg-darker/63" />
            </div>
            <div className="relative py-12 lg:py-20 xl:py-28">
                <div className="container">
                    <ScrollReveal stagger className="flex flex-col items-center justify-center gap-4">
                        <div className="reveal-item reveal-delay-100">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {breadcrumb.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <BreadcrumbItem>
                                                {item.href ? (
                                                    <BreadcrumbLink render={<a href={item.href} />}>
                                                        {item.label}
                                                    </BreadcrumbLink>
                                                ) : (
                                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                                )}
                                            </BreadcrumbItem>

                                            {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
                                        </React.Fragment>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <h2 className={cn("reveal-item reveal-delay-200 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1]", smallerHeading ? "" : "xl:text-6xl 2xl:text-[5rem]")}>
                            {heading}
                        </h2>
                    </ScrollReveal>
                </div>
            </div>
        </header>
    );
}
