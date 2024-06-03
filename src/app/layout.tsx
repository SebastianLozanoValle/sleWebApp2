import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Switch } from "@/components/switch/Switch";
import { NavBar } from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SLE Developers",
  description: "SLE Developers official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Switch />
      </body>
    </html>
  );
}
