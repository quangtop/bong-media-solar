import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Preloader } from "@/components/ui/preloader";
import "@/css/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Solurax - NextJS Solar & Renewable Energy Landing Page Template",
    template: "%s | Solurax - NextJS Solar & Renewable Energy Landing Page Template",
  },
  description: "Solurax is a modern, responsive, and beautiful landing page template for solar and renewable energy technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body suppressHydrationWarning={true} className={`font-instrument-sans min-h-full flex flex-col text-body`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
