import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionContent } from "@/components/layout/section";
import { PROJECTS_DATA } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import gallery1 from "@/images/project-gallery-a.jpg";
import gallery2 from "@/images/project-gallery-b.jpg";
import gallery3 from "@/images/project-gallery-c.jpg";

import lineG from "@/images/decoration/line-g.png"

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS_DATA.find((item) => item.id === id) || PROJECTS_DATA[0];
  return {
    title: project.title,
    description: `Thông tin và đặc điểm kỹ thuật của dự án năng lượng sạch ${project.title}.`,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((item) => item.id === id) || PROJECTS_DATA[0];

  return (
    <React.Fragment>
      <PageHeader
        heading={project.title}
        breadcrumb={[
          { href: "/", label: "Trang chủ" },
          { href: "/project", label: "Dự án" },
          { label: project.title },
        ]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden bg-white">
        <Section>
          <SectionContent>
            <div className="container">
              {/* Dynamic Project Image */}
              <ScrollReveal delay={100} className="mb-10 lg:mb-15">
                <div className="relative w-full h-80 sm:h-100 lg:h-152 rounded-3xl overflow-hidden shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </ScrollReveal>

              {/* Two Column Layout */}
              <div className="row g-12 items-start">
                {/* Main Content Column */}
                <div className="lg:column-8 space-y-12">

                  {/* Solar Panel Energy Installation Section (Inline text from design) */}
                  <ScrollReveal delay={150} className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-darker">
                      Lắp đặt hệ thống điện mặt trời
                    </h2>
                    <div className="space-y-4 text-base/relaxed text-body">
                      <p>
                        Khu vực Sun Valley đối mặt với nhu cầu điện tăng cao và lưới điện cũ không đủ đáp ứng tải cao điểm mùa hè nếu thiếu các nhà máy nhiên liệu hóa thạch đắt đỏ. Bống Media thiết kế và triển khai hệ thống điện mặt trời 120 MW kết hợp lưu trữ quy mô lưới, thay thế điện nhập bằng năng lượng sạch tại chỗ có thể điều phối.
                      </p>
                      <p>
                        Sau mười tám tháng kể từ ngày khởi công, công trình hiện cung cấp điện cho hơn 85,000 hộ gia đình và trở thành nguồn năng lượng sạch chủ lực của toàn khu vực, giảm phát thải và ổn định giá điện trên lưới.
                      </p>
                      <p>
                        Sau mười tám tháng kể từ ngày khởi công, công trình hiện cung cấp điện cho hơn 85,000 hộ gia đình và trở thành nguồn năng lượng sạch chủ lực của toàn khu vực, giảm phát thải và ổn định giá điện trên lưới.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Benefits of Project Section (Inline text from design) */}
                  <ScrollReveal delay={200} className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-darker">
                      Lợi ích của dự án
                    </h3>
                    <div className="space-y-4 text-base/relaxed text-body">
                      <p>
                        Công trình điện mặt trời và lưu trữ quy mô lớn được thiết kế để cung cấp năng lượng sạch tại chỗ, có thể điều phối cho hàng chục nghìn hộ gia đình.
                      </p>
                      <p>
                        Đội ngũ chuyên gia tư vấn chuyên sâu giúp bạn lựa chọn giải pháp năng lượng tái tạo phù hợp với công trình. Chúng tôi đánh giá nhu cầu điện, ngân sách và địa điểm để thiết kế giải pháp bền vững cho nhà ở, doanh nghiệp và cơ quan công cộng. Hệ thống quản lý năng lượng thông minh cung cấp công cụ theo dõi, phân tích và tối ưu mức tiêu thụ, giúp khai thác hiệu quả khoản đầu tư năng lượng tái tạo.
                      </p>
                    </div>

                    {/* Benefit Cards Grid (Inline text from design) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-2">
                      <div className="p-7 rounded-2xl bg-white border border-dark/12 hover:border-primary/40 transition-colors">
                        <div className="size-12 rounded-xl bg-primary/12 flex items-center justify-center mb-5 text-primary">
                          <svg className="size-6 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                          </svg>
                        </div>
                        <h4 className="text-base font-bold text-darker mb-2">
                          Tấm pin quang điện hiệu suất cao
                        </h4>
                        <p className="text-sm/relaxed text-body">
                          Tấm pin đơn tinh thể hai mặt có hiệu suất 22.8%, được thiết kế để duy trì sản lượng ổn định trong hơn 20 năm.
                        </p>
                      </div>

                      <div className="p-7 rounded-2xl bg-white border border-dark/12 hover:border-primary/40 transition-colors">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                          <svg className="size-6 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <h4 className="text-base font-bold text-darker mb-2">
                          Giám sát theo thời gian thực
                        </h4>
                        <p className="text-sm/relaxed text-body">
                          14,200 cảm biến truyền dữ liệu liên tục; mô hình AI tự động phát hiện các điểm suy giảm hiệu suất.
                        </p>
                      </div>

                      <div className="p-7 rounded-2xl bg-white border border-dark/12 hover:border-primary/40 transition-colors">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                          <svg className="size-6 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                          </svg>
                        </div>
                        <h4 className="text-base font-bold text-darker mb-2">
                          Tối ưu lưới điện
                        </h4>
                        <p className="text-sm/relaxed text-body">
                          Phần mềm cân bằng tải điều phối điện linh hoạt giữa 3,600 nút phân phối.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Challenge of Project Section (Inline text from design) */}
                  <ScrollReveal delay={250} className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-darker">
                      Thách thức của dự án
                    </h3>
                    <p className="text-base/relaxed text-body">
                      Sứ mệnh của chúng tôi là giúp doanh nghiệp ở mọi quy mô phát triển trong thị trường luôn thay đổi. Chúng tôi mang lại giá trị thông qua hiểu biết chiến lược, tư vấn chuyên sâu và những cách tiếp cận đổi mới.
                    </p>

                    {/* Gallery Images Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                      <div className="relative h-48 sm:h-44 lg:h-52 rounded-2xl overflow-hidden shadow-xs border border-lighter">
                        <Image
                          src={gallery1}
                          alt="Ảnh chi tiết dự án 1"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative h-48 sm:h-44 lg:h-52 rounded-2xl overflow-hidden shadow-xs border border-lighter">
                        <Image
                          src={gallery2}
                          alt="Ảnh chi tiết dự án 2"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative h-48 sm:h-44 lg:h-52 rounded-2xl overflow-hidden shadow-xs border border-lighter">
                        <Image
                          src={gallery3}
                          alt="Ảnh chi tiết dự án 3"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                </div>

                {/* Sidebar Column */}
                <div className="lg:column-4">
                  <div className="sticky top-28 space-y-7.5">

                    <ScrollReveal delay={150} className="rounded-3xl overflow-hidden shadow-[0_0_13px_2px] shadow-black/8 bg-white">
                      <div className="bg-primary py-6 px-4 text-center">
                        <h3 className="text-2xl/normal font-semibold text-white">
                          Thông tin dự án
                        </h3>
                      </div>

                      <div className="p-6 pb-4 divide-y divide-dark/8">
                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            DANH MỤC
                          </span>
                          <span className="text-base font-medium text-darker">
                            Điện mặt trời
                          </span>
                        </div>

                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            ĐỊA ĐIỂM
                          </span>
                          <span className="text-base font-medium text-darker">
                            258 Street, California, Hoa Kỳ
                          </span>
                        </div>

                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            CÔNG SUẤT
                          </span>
                          <span className="text-base font-medium text-darker">
                            120 MW
                          </span>
                        </div>

                        <div className="py-3.5 first:pt-0">
                          <span className="text-sm font-normal uppercase text-body block mb-0.5">
                            HOÀN THÀNH
                          </span>
                          <span className="text-base font-medium text-darker">
                            Tháng 3 năm 2025
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200} className=" text-center p-8 sm:p-10 bg-darker rounded-3xl text-white relative overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Image src={lineG} height={282} width={419} alt="" className="absolute" />
                      </div>
                      <span className="text-base/tight font-bold uppercase tracking-wider block mb-3">
                        LIÊN HỆ TƯ VẤN
                      </span>
                      <h4 className="text-4xl leadin-tight font-bold text-white">
                        Chúng tôi có thể giúp gì cho bạn?
                      </h4>
                      <div className="pt-9">
                        <Button render={<Link href="/contact" />} size="lg">
                          Liên hệ
                        </Button>
                      </div>
                    </ScrollReveal>

                  </div>
                </div>

              </div>
            </div>
          </SectionContent>
        </Section>
      </main>
    </React.Fragment>
  );
}
