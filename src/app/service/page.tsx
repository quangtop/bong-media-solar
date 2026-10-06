import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import CTA from "@/components/sections/cta";
import ServicesAll from "@/components/sections/services-all";
import Process from "@/components/sections/process";
import Stories from "@/components/sections/stories";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Bống Media giới thiệu các giải pháp điện mặt trời và năng lượng tái tạo với công nghệ hiện đại, hiệu quả và bền vững.",
};

export default function ServicePage() {
  return (
    <React.Fragment>
      <PageHeader heading="Dịch vụ" breadcrumb={[{ href: '/', label: "Trang chủ" }, { label: "Dịch vụ của chúng tôi" }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <ServicesAll gap="top" />
        <Process gap="top" />
        <Stories />
        <CTA gap="bottom" />
      </main>
    </React.Fragment>
  );
}
