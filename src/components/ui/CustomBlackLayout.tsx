"use client";

import { AuroraBackground } from "@/components/ui/AuroraBackground";

export default function CustomBlackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuroraBackground>
      <div className="z-30 min-h-screen pt-18 pb-9 text-white">{children}</div>
    </AuroraBackground>
  );
}
