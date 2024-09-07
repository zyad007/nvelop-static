import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Cookies from "@/components/Cookies";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Cookies />
        {children}
      </body>
    </html>
  );
}
