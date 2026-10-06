import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ProjectsList from "@/components/sections/projects-all";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Khám phá các dự án năng lượng tái tạo nổi bật cung cấp điện cho cộng đồng bằng công nghệ điện mặt trời và lưới điện thông minh.",
};

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Dự án"
        breadcrumb={[
          { href: "/", label: "Trang chủ" },
          { label: "Dự án" },
        ]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden bg-white">
        <ProjectsList />
      </main>
    </React.Fragment>
  );
}
