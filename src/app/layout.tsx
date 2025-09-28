import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "antd/dist/reset.css";
import { NavigationMenuDemo } from "@/components/navigation-menu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "File Sharing - Amaan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ConvexClientProvider>
          <NavigationMenuDemo />
          <Providers>{children}</Providers>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
