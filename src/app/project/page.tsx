import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ProjectsList from "@/components/sections/projects-all";

export const metadata: Metadata = {
  title: "Projects - Solurax",
  description: "Explore our featured renewable energy projects powering communities worldwide with reliable solar and smart grid technology.",
};

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Project"
        breadcrumb={[
          { href: "/", label: "Home" },
          { label: "Project" },
        ]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden bg-white">
        <ProjectsList />
      </main>
    </React.Fragment>
  );
}
