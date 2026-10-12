'use client'

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO_CONFIG } from "@/data/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { BRAND } from "@/data/brand";

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
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">Biến ý tưởng của bạn thành hiện thực</h2>
                    <p className="text-base/relaxed text-body text-pretty">Cùng kết hợp sáng tạo, chiến lược và đổi mới để tạo ra giải pháp thiết thực, thúc đẩy tăng trưởng và mang lại giá trị bền vững cho doanh nghiệp.</p>
                  </div>
                  <ul className="flex flex-col gap-8">
                    {CONTACT_INFO_CONFIG.map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="size-14 flex items-center justify-center bg-primary rounded-md">
                          <item.icon className="size-7 fill-white" />
                        </div>
                        <div className="">
                          <h5 className="text-darker text-xl font-medium mb-0.5">{item.title}</h5>
                          <p className="text-body text-base/normal"><a href={item.href} className="hover:text-primary-strong">{item.info}</a></p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>)}

            {/* Right accordion */}
            <div className="lg:column-6 xl:column-7 2xl:column-6">
              <ScrollReveal delay={300}>
                <h3 className="mb-6 text-4xl font-bold text-darker">Liên hệ với chúng tôi</h3>
                <p id="contact-demo-note" className="mb-6 rounded-lg bg-primary/10 p-4 text-body">
                  Đây là biểu mẫu minh họa, chưa gửi thông tin. Để được tư vấn, gọi <a className="font-semibold text-dark underline" href={BRAND.phoneHref}>{BRAND.phone}</a> hoặc <a className="font-semibold text-dark underline" href={BRAND.facebook} target="_blank" rel="noopener noreferrer">nhắn Facebook Bống Media</a>.
                </p>
                <form aria-describedby="contact-demo-note" className="row g-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-name">
                      Họ và tên *
                    </label>
                    <input className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="text" id="contact-name" placeholder="Nhập họ và tên" required />
                  </div>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-email"> Địa chỉ email * </label>
                    <input className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="email" id="contact-email" placeholder="Nhập địa chỉ email" required />
                  </div>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-phone"> Số điện thoại</label>
                    <input className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="tel" id="contact-phone" placeholder="Nhập số điện thoại của bạn" required />
                  </div>
                  <div className="column-6 lg:column-12 xl:column-6">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-subject"> Loại dịch vụ </label>
                    <div className="relative">
                      <select id="contact-subject" className="border border-lighter bg-white text-darker invalid:text-body/70 placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" required defaultValue="" >
                        <option value="" disabled>Chọn nhu cầu tư vấn...</option>
                        <option value="general">Điện mặt trời dân dụng</option>
                        <option value="sponsorship">Điện mặt trời thương mại</option>
                        <option value="tickets">Pin lưu trữ và trạm sạc</option>
                        <option value="press">Vận hành và bảo trì</option>
                      </select>
                    </div>
                  </div>

                  <div className="column-12">
                    <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-message"> Nội dung </label>
                    <textarea id="contact-message" rows={5} className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all resize-none" placeholder="Nhập nội dung cần trao đổi" required />
                  </div>

                  <div className="pt-3 column-12">
                    <Button type="button" disabled variant="default" size="lg" className="uppercase">
                      <span>Gửi yêu cầu</span>
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
