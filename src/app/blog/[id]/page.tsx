import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { BLOG_DATA } from "@/data/blog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowLongRight } from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import blogG from "@/images/blog-g.jpg";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/hooks/useFormatDate";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_DATA.find((item) => item.id === id) || BLOG_DATA[0];
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_DATA.find((item) => item.id === id) || BLOG_DATA[0];

  return (
    <React.Fragment>
      <PageHeader
        heading={post.title}
        smallerHeading={true}
        breadcrumb={[{ href: "/", label: "Trang chủ" }, { href: "/blog", label: "Bài viết" }]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Section gap="top">
          <SectionContent>
            <div className="container">
              <div className="row justify-center">
                <div className="2xl:column-8 xl:column-9">
                  <ScrollReveal delay={100} className="relative pb-7">
                    <Image src={post.image} alt={post.title} className="w-full rounded-3xl" />
                  </ScrollReveal>
                  <ScrollReveal delay={150} className="flex flex-wrap items-center md:px-12 lg:px-20 pb-5">
                    <div className="flex items-center gap-4 text-xs md:text-sm text-body">
                      <div className="flex items-center gap-2">
                        <Avatar size="lg" className="bg-primary/10 text-primary font-bold">
                          <AvatarImage src={post.author.avatar} alt="" />
                        </Avatar>
                        <span className="font-medium text-base text-body">{post.author.name}</span>
                      </div>
                      <div className="h-3 border-l border-body/20 shrink-0" />
                      <div className="font-medium text-base text-body">{formatDate(post.date)}</div>
                      <div className="h-3 border-l border-body/20 shrink-0" />
                      <div className="font-medium text-base text-body"> Đọc trong 5 phút</div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <article className="max-w-full dynamic-prose">
                      {/* Introduction */}
                      <h2>Giới thiệu</h2>
                      <p>Hãy hình dung mái nhà trở thành nguồn thu nhập thụ động ổn định và góp phần bảo vệ môi trường. Khi chuyển sang hệ thống điện mặt trời hiện đại, các tấm pin thường tạo ra lượng điện lớn hơn nhu cầu sử dụng của gia đình, đặc biệt vào những buổi chiều nắng đẹp. Thay vì để nguồn năng lượng dư thừa bị lãng phí, bạn có thể đưa điện trở lại lưới điện quốc gia và nhận thanh toán theo cơ chế áp dụng.</p>
                      <p>Cơ chế này được gọi là đo đếm điện năng ròng (Net Metering). Bài viết giải thích cách tận dụng cơ chế này để giảm hóa đơn điện hoặc tích lũy tín dụng từ đơn vị cung cấp điện.</p>
                      <Image src={blogG} alt="Lắp đặt tấm pin mặt trời" />

                      <h3> Đo đếm điện năng ròng là gì và hoạt động thế nào? </h3>
                      <p> Về bản chất, đo đếm điện năng ròng là cơ chế tính hóa đơn ghi nhận lượng điện mà chủ hệ thống điện mặt trời đưa lên lưới:</p>

                      <ul>
                        <li>
                          <strong>Điện dư vào ban ngày:</strong> Trong những giờ nắng cao điểm, tấm pin mặt trời hoạt động với hiệu suất tối đa. Nếu điện năng tiêu thụ của gia đình thấp hơn lượng điện tạo ra, điện dư sẽ đi qua công tơ thông minh hai chiều và hòa vào lưới điện địa phương để cung cấp cho các hộ lân cận.
                        </li>
                        <li>
                          <strong>Lấy điện vào ban đêm:</strong> Ban đêm, khi tấm pin mặt trời không phát điện, gia đình tự động sử dụng điện từ lưới.
                        </li>
                        <li>
                          <strong>Tính lượng điện ròng:</strong> Cuối tháng, đơn vị cung cấp điện lấy lượng điện bạn đã tiêu thụ trừ đi lượng điện đã đưa lên lưới. Bạn chỉ thanh toán phần chênh lệch ròng. Nếu lượng điện đưa lên lưới lớn hơn lượng lấy về, hóa đơn sẽ ghi số dư âm hoặc tín dụng chuyển sang kỳ sau.
                        </li>
                      </ul>

                      <blockquote>
                        “Chúng ta có thể xử lý công việc dễ dàng nếu mỗi ngày chỉ mang gánh nặng của ngày đó. Nhưng gánh nặng sẽ lớn hơn nhiều nếu hôm nay lại mang cả gánh nặng hôm qua, rồi cộng thêm nỗi lo của ngày mai khi chưa đến lúc phải đối mặt.”
                        <cite> — Sam Kurtis, Quản lý sản phẩm </cite>
                      </blockquote>

                      <h3> Quy định về AI và pháp luật bảo vệ dữ liệu</h3>
                      <p>
                        Sự khác biệt này rất cần thiết với lãnh đạo doanh nghiệp khi xây dựng chiến lược AI và năng lượng sạch. Kết hợp mục tiêu hoàn vốn với các nền tảng hiện đại giúp nâng cao năng lực phân tích của doanh nghiệp. Thay vì phỏng đoán, bộ phần mềm cung cấp những chỉ số như địa điểm, loại dự án và khoảng ngân sách để lựa chọn hệ thống phù hợp. Dữ liệu cập nhật theo thời gian thực hỗ trợ phản ứng nhanh với những thay đổi về hiệu quả đầu tư.
                      </p>
                    </article>
                  </ScrollReveal>
                </div>
              </div>

            </div>
          </SectionContent>
        </Section>

        {/* Related Posts Section */}
        <Section>
          <SectionHead>
            <div className="container text-center">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl font-bold text-darker md:text-4xl">Bài viết liên quan</h2>
              </ScrollReveal>
            </div>
          </SectionHead>

          <SectionContent>
            <div className="container">
              <Carousel
                className="w-full relative" autoplay={true}
                opts={{
                  align: "start",
                  scrollMode: "page",
                  breakpoints: {
                    "(min-width: 1200px)": {
                      active: false,
                    },
                  },
                }}>
                <CarouselContent className="-ml-7.5">
                  {BLOG_DATA.slice(0, 3).map((item, index) => (
                    <CarouselItem key={index} className="pl-7.5 basis-1/1 md:basis-1/2 xl:basis-1/3">
                      <ScrollReveal delay={100} className="flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full">
                        <Image src={item.image} alt={item.title} className="w-full rounded-t-2xl" />
                        <div className="p-8">
                          <div className="text-primary-strong text-sm/normal font-medium mb-3">{item.date}</div>
                          <h5 className=" text-xl xl:text-2xl leading-normal font-bold text-darker line-clamp-2 mb-4">{item.title}</h5>
                          <p className="text-base xl:text-lg leading-relaxed text-body line-clamp-2 mb-4">{item.excerpt}</p>
                          <Button variant="link" icon={<ArrowLongRight />}> Khám phá </Button>
                        </div>
                      </ScrollReveal>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className="pt-10 xl:hidden" />
              </Carousel>
            </div>
          </SectionContent>
        </Section>

      </main>
    </React.Fragment>
  );
}
