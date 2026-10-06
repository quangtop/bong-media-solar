'use client'

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO_CONFIG } from "@/data/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type ContactProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  sectionHead?: boolean;
};

export default function Contact({ gap = "default", className, sectionHead = true }: ContactProps) {
  return (
    <>
      {/* FAQ Section */}
      <Section gap={gap} className={className}>
        <div className="container">
          <div className={cn("row g-12 items-start justify-between", sectionHead ? "justify-between" : "justify-center")}>
            {/* Left header */}
            {sectionHead && (
              <div className="lg:column-6 xl:column-5">
                <ScrollReveal delay={100}>
                  <div className="text-block mb-8">
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Let's turn your vision into reality</h2>
                    <p className="text-base/relaxed text-body text-pretty">Let’s build something meaningful together by combining creativity, strategy, and innovation to create impactful digital solutions that drive growth, strengthen brands, and deliver lasting value for your business.</p>
                  </div>
                  <ul className="flex flex-col gap-8">
                    {CONTACT_INFO_CONFIG.map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="size-14 flex items-center justify-center bg-primary rounded-md">
                          <item.icon className="size-7 fill-white" />
                        </div>
                        <div className="">
                          <h5 className="text-darker text-xl font-medium mb-0.5">{item.title}</h5>
                          <p className="text-body text-base/normal">{item.info}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>)}

            {/* Right accordion */}
            <div className="lg:column-6 xl:column-7 2xl:column-6">
              <ScrollReveal delay={300}>
                <h3 className="mb-6 text-4xl font-bold text-darker">Get In Touch</h3>
                <form className="row g-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-name">
                      Your Full Name  *
                    </label>
                    <input className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="text" id="contact-name" placeholder="Enter your name" required />
                  </div>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-email"> Email Address * </label>
                    <input className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="email" id="contact-email" placeholder="Enter your email " required />
                  </div>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-phone"> Your Phone</label>
                    <input className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="text" id="contact-phone" placeholder="+12 345 6758 29" required />
                  </div>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-subject"> Service Type </label>
                    <div className="relative">
                      <select id="contact-subject" className="border border-lighter bg-white text-darker invalid:text-body/70 placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" required defaultValue="" >
                        <option value="" disabled>Select inquiry type...</option>
                        <option value="general">General Event Inquiry</option>
                        <option value="sponsorship">Sponsorship & Partnership</option>
                        <option value="tickets">Ticketing & Registration</option>
                        <option value="press">Press & Media Access</option>
                      </select>
                    </div>
                  </div>

                  <div className="column-12">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-message"> Message </label>
                    <textarea id="contact-message" rows={5} className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all resize-none" placeholder="Enter your message" required />
                  </div>

                  <div className="pt-3 column-12">
                    <Button variant="default" size="lg" className="uppercase">
                      <span>Send Message</span>
                    </Button>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
