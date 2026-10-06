import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Preloader } from "@/components/ui/preloader";
import "@/css/globals.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: {
    default: "Bống Media — Giải pháp điện mặt trời và năng lượng tái tạo",
    template: "%s | Bống Media",
  },
  description: "Bống Media giới thiệu các giải pháp điện mặt trời và năng lượng tái tạo với công nghệ hiện đại, hiệu quả và bền vững.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`h-full antialiased`}>
      <body suppressHydrationWarning={true} className={`font-instrument-sans min-h-full flex flex-col text-body`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
