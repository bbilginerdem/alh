"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";

export default function CustomBlackLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuroraBackground>
			<div className="z-30 min-h-screen pt-20 text-white">{children}</div>
		</AuroraBackground>
	);
}
