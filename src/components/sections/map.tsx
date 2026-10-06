"use client";

import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
                  <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Where Ideas Take Shape</h2>
                  <p className="text-base xl:text-lg leading-relaxed text-body">Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus quis egestas tincidunt neque ut accumsan.</p>
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
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002633!2d-0.24168144921176767!3d51.528558241761614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
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
