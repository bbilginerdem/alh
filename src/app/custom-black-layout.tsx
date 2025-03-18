"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

export default function CustomBlackLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<AuroraBackground>
			<motion.div
				// initial={{ opacity: 0.0, y: 40 }}
				// whileInView={{ opacity: 1, y: 0 }}
				// transition={{
				// 	delay: 0.3,
				// 	duration: 0.8,
				// 	ease: "easeInOut",
				// }}
				className="z-30 min-h-screen bg-black pt-20 text-white"
			>
				{children}
			</motion.div>
		</AuroraBackground>
	);
}
