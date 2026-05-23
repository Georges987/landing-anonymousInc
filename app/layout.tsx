import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AnonymousInc — IT Development Services",
  description:
    "AnonymousInc delivers cutting-edge IT development services: custom software, cloud infrastructure, DevOps, and digital transformation for ambitious businesses.",
  keywords: ["IT services", "software development", "cloud", "DevOps", "digital transformation"],
  openGraph: {
    title: "AnonymousInc — IT Development Services",
    description: "Cutting-edge IT development services for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
