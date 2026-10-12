import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import FaqsAll from "@/components/sections/faqs-all";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp",
  description: "Bống Media giới thiệu các giải pháp điện mặt trời và năng lượng tái tạo với công nghệ hiện đại, hiệu quả và bền vững.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader heading="Câu hỏi thường gặp" breadcrumb={[{ href: '/', label: "Trang chủ" }, { label: "Câu hỏi thường gặp" }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <FaqsAll />
      </main>
    </React.Fragment>
  );
}
