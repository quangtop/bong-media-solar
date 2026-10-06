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
                <h2 className="text-3xl md:text-4xl xl:text-5xl leading-tight font-bold text-darker text-pretty mb-5">Do you have more questions?</h2>
                <p className="text-base xl:text-xl leading-relaxed text-body text-pretty mb-8">We believe in providing our clients with personalized and efficient logistics solutions. Et et id laoreet ultricies elementum venenatis ornare. </p>
                <h5 className="text-2xl text-darker font-bold mb-3">Have a question?</h5>
                <p className="text-base/relaxed text-body text-pretty mb-8">Need help with something? Our team is here to make things easy. Don’t hesitate to reach out.</p>
                <Button nativeButton={false} size="lg" render={<Link href="/contact" />} className="uppercase" >
                  <span>Contact Us</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
