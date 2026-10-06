import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import FaqsAll from "@/components/sections/faqs-all";

export const metadata: Metadata = {
  title: "Faqs",
  description: "Solurax is a modern, responsive, and beautiful landing page template for solar and renewable energy technologies.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader heading="Faqs" breadcrumb={[{ href: '/', label: 'Home' }, { label: 'Faqs' }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <FaqsAll />
      </main>
    </React.Fragment>
  );
}
