import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutWrapper from "@/components/global/LayoutWrapper";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Programmers' Den",
  description: "A community for programmers to share and learn.",
  keywords: [
    "programming",
    "community",
    "coding",
    "developers",
    "TSU",
    "Tarlac State University",
    "Programmers' Den",
  ],
  // TODO: put the authors in an array
  authors: [
    {
      name: "John Andrei Tacujan",
      url: "https://dreidevs-portfolio.vercel.app",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <head>
          <link rel="icon" href="/assets/pd-logo.png" />
        </head>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster richColors />
      </body>
    </html>
  );
}
