import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StateProvider } from "@/contexts/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalyst",
  description: "rebuilding Catalyst",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StateProvider>
  );
}
