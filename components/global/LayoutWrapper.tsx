"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/global/footer";
import { NavbarDemo } from "@/components/global/header";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavAndFooter = pathname.startsWith("/admin");

  return (
    <>
      {!hideNavAndFooter && <NavbarDemo />}
      <main className="bg-foreground min-h-screen text-background">
        {children}
      </main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}
