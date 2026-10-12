"use client";

import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { BRAND } from "@/data/brand";

type MapProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  sectionHead?: boolean;
};

export default function Map({ gap = "default", sectionHead = true, className }: MapProps) {
  return (
    <Section gap={gap} className={className}>
      {sectionHead && (
        <SectionHead>
          <div className="container">
            <div className="justify-center text-center row">
              <div className="lg:column-8 xl:column-7">
                <ScrollReveal delay={100} className="2xl:px-8">
                  <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Địa điểm liên hệ</h2>
                  <p className="text-base xl:text-lg leading-relaxed text-body">Tìm Bống Media tại Lê Thanh Nghị, Thành phố Hải Phòng. Hãy gọi hoặc liên hệ qua Facebook để được hướng dẫn trước khi đến.</p>
                </ScrollReveal>
              </div>{/* Column */}
            </div>{/* Row */}
          </div>{/* Container */}
        </SectionHead>
      )}
      <SectionContent>
        <div className="container">
          <ScrollReveal direction="bottom" delay={100} className="relative w-full overflow-hidden border shadow-xl h-90 md:h-161.25 rounded-2xl border-primary/15">
            <iframe
              title="Bản đồ Bống Media tại Hải Phòng"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-500 ease-in-out grayscale-25 hover:grayscale-0 size-full"
            ></iframe>
          </ScrollReveal>
        </div>
      </SectionContent>{/* Section Content */}
    </Section>
  );
}
