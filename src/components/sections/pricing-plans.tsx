"use client";

import Link from "next/link";
import { useState } from "react";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CheckCircleFill } from "@/components/icons";
import { cn } from "@/lib/utils";
import { PLANS_DATA } from "@/data/packages";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

type PricingPlansProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function PricingPlans({ gap = "default", className }: PricingPlansProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-7 2xl:column-6">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Gói giải pháp linh hoạt</h2>
                <p className="text-base/relaxed text-body">Chọn mức hỗ trợ phù hợp: giao trọn gói cho chúng tôi hoặc chủ động tham gia vào từng bước triển khai.</p>
              </ScrollReveal>
            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionHead>

      <SectionContent>
        <div className="container">
          <ScrollReveal delay={100} className="flex justify-center mb-10">
            <div className="inline-flex items-center p-0.75 rounded-full border border-primary bg-white">
              <button type="button" onClick={() => setBillingCycle("monthly")}
                className={cn("flex items-center gap-2.5 px-5 py-2.25 rounded-full text-sm/4.5 font-medium transition-all cursor-pointer", billingCycle === "monthly" ? "bg-primary-strong text-white" : "text-body hover:text-darker")} >
                Hằng tháng
              </button>
              <button type="button" onClick={() => setBillingCycle("yearly")} className={cn("flex items-center gap-2.5 ps-4 pe-2.5 py-2.25 rounded-full text-sm/4.5 font-medium transition-all cursor-pointer", billingCycle === "yearly" ? "bg-primary-strong text-white shadow-sm" : "text-body hover:text-darker")} >
                <span>Hằng năm</span>
                <span className={cn("px-1.5 py-px text-[10px]/4 font-semibold rounded-full transition-colors", billingCycle === "yearly" ? "bg-white text-primary-strong" : "bg-primary-strong text-white")} >
                  25%
                </span>
              </button>
            </div>
          </ScrollReveal>

          <div className="row gy-8">
            {PLANS_DATA.map((plan, index) => {
              const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              const formattedPrice = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(price);

              return (
                <div key={index} className="md:column-6 lg:column-4">
                  <ScrollReveal className={cn("rounded-2xl h-full flex flex-col border-b-4 border-primary transition-all duration-300 shadow-[0_4px_20px_0] shadow-black/8", plan.isFeatured ? "bg-primary-strong" : "bg-white", getDelayClass(index))} >
                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className={cn("text-xl/normal font-semibold mb-1", plan.isFeatured ? "text-white" : "text-darker")} >
                          {plan.name}
                        </h3>
                        <p className={cn("text-base", plan.isFeatured ? "text-white" : "text-body")} >
                          {plan.subtitle}
                        </p>
                      </div>
                      <div className="mb-6.5">
                        <div className={cn("text-4xl lg:text-5xl font-semibold tracking-tight", plan.isFeatured ? "text-white" : "text-darker")} >
                          {formattedPrice}
                        </div>
                        <p className={cn("text-sm font-regular mt-2", plan.isFeatured ? "text-white" : "text-body")}  >
                          {plan.periodText}
                        </p>
                      </div>
                      <Button render={<Link href="/contact" />} variant={plan.isFeatured ? "light" : "default"}>
                        {plan.buttonText}
                      </Button>
                    </div>
                    <div className={cn("h-px bg-linear-to-r from-black/0 to-black/0", plan.isFeatured ? "via-white/60" : "via-primary/60")} />
                    <div className="p-8">
                      <ul className="space-y-5">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="shrink-0 mt-0.5">
                              {plan.isFeatured ? (
                                <CheckCircleFill className="size-4 fill-white stroke-white" />
                              ) : (
                                <CheckCircleFill className="size-4 fill-primary stroke-primary" />
                              )}
                            </div>
                            <span className={cn("text-base/5.5 font-regular tracking-[-1%]", plan.isFeatured ? "text-white" : "text-darker")} >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
