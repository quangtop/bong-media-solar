import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import Contact from "@/components/sections/conact";
import Map from "@/components/sections/map";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Solurax is a modern, responsive, and beautiful landing page template for solar and renewable energy technologies.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader heading="Contact Us" breadcrumb={[{ href: '/', label: 'Home' }, { label: 'Contact Us' }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Contact gap="top" />
        <Map />
      </main>
    </React.Fragment>
  );
}
