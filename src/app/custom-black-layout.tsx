"use client";

import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
				className="min-h-screen bg-black pt-20 text-white z-30"
			>
				{children}
			</motion.div>
		</AuroraBackground>
	);
}
