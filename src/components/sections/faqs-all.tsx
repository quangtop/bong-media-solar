"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_DATA } from "@/data/faqs";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type FaqsAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function FaqsAll({ gap = "default", className }: FaqsAllProps) {
  return (
    <>
      {/* FAQ Section */}
      <Section gap={gap} className={className}>
        <div className="container">
          <div className={cn("row g-12 items-start lg:flex-row-reverse justify-between")}>
            <div className="xl:column-7">
              <ScrollReveal delay={300} className="flex flex-col gap-12.5">
                {FAQ_DATA.map((item, index) => (
                  <div key={index} className="">
                    <h4 className="text-3xl/none font-bold text-darker mb-3">{item.title}</h4>
                    <p className="mb-8 text-base/relaxed text-body">{item.description}</p>
                    <Accordion defaultValue={[`faq-${index}-0`]} className="flex flex-col gap-4">
                      {item.questions.map((qItem, qIndex) => (
                        <AccordionItem key={index + qIndex} value={`faq-${index}-${qIndex}`}>
                          <AccordionTrigger>
                            <span className="text-lg font-medium lg:text-xl text-darker pe-4">
                              {qItem.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            {qItem.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </ScrollReveal>
            </div>
            <div className="xl:column-5">
              <ScrollReveal delay={100} className="text-block">
                <h2 className="text-3xl md:text-4xl xl:text-5xl leading-tight font-bold text-darker text-pretty mb-5">Bạn còn câu hỏi khác?</h2>
                <p className="text-base xl:text-xl leading-relaxed text-body text-pretty mb-8">Chúng tôi tư vấn giải pháp phù hợp với nhu cầu của từng khách hàng, giúp bạn hiểu rõ công nghệ, quy trình triển khai và cách sử dụng năng lượng hiệu quả. </p>
                <h5 className="text-2xl text-darker font-bold mb-3">Bạn cần tư vấn?</h5>
                <p className="text-base/relaxed text-body text-pretty mb-8">Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ. Hãy liên hệ để được giải đáp rõ ràng và nhanh chóng.</p>
                <Button nativeButton={false} size="lg" render={<Link href="/contact" />} className="uppercase" >
                  <span>Liên hệ</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
