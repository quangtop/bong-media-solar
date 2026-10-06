import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import PricingPlans from "@/components/sections/pricing-plans";
import CTA from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Pricing Plan - Solurax",
  description: "ESolurax is a modern, responsive, and beautiful landing page template for solar and renewable energy technologies.",
};

export default function PackagesPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Pricing Plan"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Pricing Plan" }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <PricingPlans />
        <CTA gap="bottom" />
      </main>
    </React.Fragment>
  );
}
