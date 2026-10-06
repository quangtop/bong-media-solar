import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import BlogAll from "@/components/sections/blog-all";

export const metadata: Metadata = {
  title: "Bài viết",
  description: "Tin tức và kiến thức năng lượng từ Bống Media: hướng dẫn chuyên sâu, xu hướng ngành và mẹo sử dụng điện hiệu quả.",
};

export default function BlogPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Bài viết"
        breadcrumb={[{ href: "/", label: "Trang chủ" }, { label: "Bài viết" }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <BlogAll />
      </main>
    </React.Fragment>
  );
}
