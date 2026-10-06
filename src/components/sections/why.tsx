"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { ArrowLongRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { STATS_DATA } from "@/data/stats";
import whyA from "@/images/why-a.jpg";
import whyB from "@/images/why-b.jpg";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { CountUp } from "@/hooks/useAnimatedCounter";

function parseStatCount(raw: string) {
  const clean = raw.replace(/,/g, "");
  const match = clean.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (match) {
    const prefix = match[1] || "";
    const end = parseFloat(match[2]);
    const suffix = match[3] || "";
    return { end, prefix, suffix };
  }
  return null;
}

type WhyProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  stats?: boolean;
};

export default function Why({ gap = "default", stats = false, className }: WhyProps) {
  return (
    <Section gap={gap} className={className}>
      <SectionContent>
        <div className="container">
          <div className="justify-between row gy-8">
            <div className="lg:column-4 xl:column-3 relative z-20">
              <ScrollReveal delay={100} className="lg:me-7 xl:-me-7.5 relative">
                <Image className="w-full rounded-2xl border-b-4 border-primary max-lg:max-h-100 object-cover object-top" src={whyA} alt="" />
                <div className="absolute z-20 bottom-10 lg:bottom-30 xl:bottom-20 2xl:bottom-43 inset-e-10 lg:-inset-e-17 p-8 rounded-2xl bg-white border-b-4 border-primary flex flex-col items-center gap-4.5 shadow-[0_0_20px_0_rgba(0,0,0,.08)]">
                  <div className="bg-primary rounded-full size-15.5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 35 35">
                      <mask id="mask0_1_163" width="26" height="32" x="4" y="1" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
                        <path fill="#fff" fillRule="evenodd" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.838" d="M17.03 31.223c6.271 0 11.354-5.084 11.354-11.354 0-9.225-11.354-17.03-11.354-17.03S5.677 10.643 5.677 19.868c0 6.27 5.083 11.354 11.353 11.354" clipRule="evenodd" ></path>
                      </mask>
                      <g mask="url(#mask0_1_163)">
                        <path fill="#fff" d="M0 0h34.06v34.061H0z"></path>
                        <path stroke="#13A958" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.838" d="M17.03 14.192 14.19 19.87h5.677l-2.838 5.677" ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="font-semibold text-darker text-xl/none">Thủy điện</div>
                </div>
              </ScrollReveal>
            </div>{/* Column */}
            <div className="lg:column-8 xl:column-9">
              <ScrollReveal delay={150} className="lg:ms-6 xl:ms-16.5 mb-8 lg:mb-12 xl:mb-16 2xl:mb-21 max-w-md">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-4 xl:mb-6">Giảm phát thải carbon là sứ mệnh thiết yếu của hành tinh</h2>
                <Button render={<Link href="/service" />} variant="link" icon={<ArrowLongRight />}> Tìm hiểu thêm </Button>
              </ScrollReveal>

              <div className="lg:-ms-4 xl:ms-7.5">
                <div className="flex flex-col lg:flex-row gap-y-5 gap-x-7.5">
                  <ScrollReveal delay={250} className="lg:w-54 xl:w-54 2xl:w-66.5 shrink-0">
                    <Image className="w-full max-lg:max-h-100 object-cover rounded-2xl border-b-4 border-primary" src={whyB} alt="" />
                  </ScrollReveal>

                  <ScrollReveal delay={350} className="flex flex-col text-lg/relaxed gap-6 py-2 text-body xl:pe-20 text-pretty">
                    <p>Ngành năng lượng toàn cầu sẽ thay đổi trong 10 năm tới nhiều hơn cả một thế kỷ trước. Khi chuyển từ nhiên liệu hóa thạch sang năng lượng tái tạo, các doanh nghiệp công nghiệp cần những giải pháp chuyển đổi toàn diện.</p>
                    <p> Năng lượng tái tạo khai thác sức gió, ánh nắng và dòng nước, cung cấp điện xanh cho các nền kinh tế lớn cũng như cộng đồng ở vùng xa. </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>
      {stats && (
        <SectionContent>
          <div className="container">
            <div className="justify-between row gy-6">
              {STATS_DATA.map((item, index) => (
                <div key={index} className="sm:column-6 lg:column-3">
                  <ScrollReveal className={cn("group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary hover:scale-105 cursor-crosshair h-full", getDelayClass(index))}>
                    <div className="text-darker transition-colors group-hover:text-white font-semibold text-5xl/[1.1] mb-5">
                      {(() => {
                        const parsed = parseStatCount(item.count);
                        return parsed ? (
                          <CountUp end={parsed.end} prefix={parsed.prefix} suffix={parsed.suffix} />
                        ) : (
                          item.count
                        );
                      })()}
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-xl/relaxed mb-3">{item.title}</h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-base/snug">{item.description}</p>
                  </ScrollReveal>
                </div>
              ))}
            </div>{/* Row */}
          </div>{/* Container */}
        </SectionContent>
      )}
    </Section>
  );
}
