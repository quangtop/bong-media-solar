import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import PricingPlans from "@/components/sections/pricing-plans";
import CTA from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Bảng giá",
  description: "Bống Media giới thiệu các giải pháp điện mặt trời và năng lượng tái tạo với công nghệ hiện đại, hiệu quả và bền vững.",
};

export default function PackagesPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Các gói giải pháp"
        breadcrumb={[{ href: "/", label: "Trang chủ" }, { label: "Bảng giá" }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <PricingPlans />
        <CTA gap="bottom" />
      </main>
    </React.Fragment>
  );
}
