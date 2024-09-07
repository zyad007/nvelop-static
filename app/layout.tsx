import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Cookies from "@/components/Cookies";
import ChatBot from "@/components/ChatBot";
import NavBar from "@/components/NavBar";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro600 = Be_Vietnam_Pro({
  weight: '600',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Nvelop",
  abstract: 'AI-driven SaaS platform for sourcing ICT',
  description: "Nvelop transforms the way software and Services are bought for large and mid sized organizations. Nvelop is a scalable, AI-native SaaS platform for sourcing IT services and software. Nvelop manages the entire sourcing process end-to-end, including automation of requirements gathering, proposal evaluation, contracting, and vendor management."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ChatBot />
        <Cookies />
        <div className={beVietnamPro600.className + ' relative pt-5 px-5 md:px-10 flex flex-col justify-center items-center'}>
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
