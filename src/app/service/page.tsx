import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import CTA from "@/components/sections/cta";
import ServicesAll from "@/components/sections/services-all";
import Process from "@/components/sections/process";
import Stories from "@/components/sections/stories";

export const metadata: Metadata = {
  title: "Our Services - Solurax",
  description: "Solurax is a modern, responsive, and beautiful landing page template for solar and renewable energy technologies.",
};

export default function ServicePage() {
  return (
    <React.Fragment>
      <PageHeader heading="Our Services" breadcrumb={[{ href: '/', label: 'Home' }, { label: 'Our Services' }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <ServicesAll gap="top" />
        <Process gap="top" />
        <Stories />
        <CTA gap="bottom" />
      </main>
    </React.Fragment>
  );
}
