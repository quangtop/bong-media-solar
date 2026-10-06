import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import CTA from "@/components/sections/cta";
import Why from "@/components/sections/why";
import Team from "@/components/sections/team";
import Values from "@/components/sections/values";


export const metadata: Metadata = {
  title: "About Us",
  description: "Solurax is a modern, responsive, and beautiful landing page template for solar and renewable energy technologies.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader heading="About Us" breadcrumb={[{ href: '/', label: 'Home' }, { label: 'About Us' }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Why stats={true} />
        <Values />
        <Team />
        <CTA gap="bottom" />
      </main>
    </React.Fragment>
  );
}
