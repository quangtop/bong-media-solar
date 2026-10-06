import { Section, SectionContent } from "@/components/layout/section";

type ComponentProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Component({ gap = "default", className }: ComponentProps) {
  return (
    <Section gap={gap} className={className} >
      <SectionContent>
        <div className="container">
          <div className="justify-between row">
            <div className="lg:column-6 xl:column-6">

            </div>{/* Column */}
            <div className="lg:column-6 xl:column-5">

            </div>{/* Column */}
          </div>{/* Row */}
        </div>{/* Container */}
      </SectionContent>{/* Section Content */}
    </Section>
  )
}
