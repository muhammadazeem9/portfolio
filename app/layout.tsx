import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Muhammad Azeem — Full-Stack Developer",
  description:
    "Portfolio of Muhammad Azeem, full-stack developer specializing in 3D web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${space.variable} font-sans bg-neutral-950 text-neutral-100 antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
