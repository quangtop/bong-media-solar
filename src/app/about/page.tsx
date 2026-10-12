import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import CTA from "@/components/sections/cta";
import Why from "@/components/sections/why";
import Team from "@/components/sections/team";
import Values from "@/components/sections/values";


export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Bống Media giới thiệu các giải pháp điện mặt trời và năng lượng tái tạo với công nghệ hiện đại, hiệu quả và bền vững.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader heading="Giới thiệu" breadcrumb={[{ href: '/', label: "Trang chủ" }, { label: "Giới thiệu" }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Why stats={true} />
        <Values />
        <Team />
        <CTA gap="bottom" />
      </main>
    </React.Fragment>
  );
}
