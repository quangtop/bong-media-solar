import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import Contact from "@/components/sections/conact";
import Map from "@/components/sections/map";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Bống Media giới thiệu các giải pháp điện mặt trời và năng lượng tái tạo với công nghệ hiện đại, hiệu quả và bền vững.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader heading="Liên hệ" breadcrumb={[{ href: '/', label: "Trang chủ" }, { label: "Liên hệ" }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Contact gap="top" />
        <Map />
      </main>
    </React.Fragment>
  );
}
