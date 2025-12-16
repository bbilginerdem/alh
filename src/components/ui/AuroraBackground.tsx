"use client";
import type React from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
}

export const AuroraBackground = ({
	className,
	children,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<main>
			<div
				className={cn(
					"relative flex flex-col items-center justify-center bg-zinc-950 transition-bg",
					className,
				)}
				{...props}
			>
				<div
					className="absolute inset-0 overflow-hidden"
					style={
						{
							"--aurora":
								"repeating-linear-gradient(120deg,#fdba74_10%,#fdba74_15%,#fdba74_20%,#fdba74_25%,#fdba74_30%)",
							"--dark-gradient":
								"repeating-linear-gradient(120deg,#09090b_0%,#09090b_7%,transparent_10%,transparent_12%,#09090b_16%)",
							"--zinc-100-gradient":
								"repeating-linear-gradient(120deg,#f4f4f5_0%,#f4f4f5_7%,transparent_10%,transparent_12%,#f4f4f5_16%)",

							"--orange-300": "#fdba74",
							"--orange-400": "#fb923c",
							"--zinc-950": "#09090b",
							"--zinc-100": "#f4f4f5",
							"--transparent": "transparent",
						} as React.CSSProperties
					}
				>
					<div
						className={cn(
							`pointer-events-none absolute -inset-2.5 bg-position-[50%_50%,50%_50%] bg-size-[250%,175%] opacity-45 blur-[15px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--orange-400)_10%,var(--zinc-950)_15%,var(--zinc-950)_20%,var(--orange-300)_25%,var(--orange-300)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--zinc-950)_0%,var(--zinc-950)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--zinc-950)_16%)] [--zinc-100-gradient:repeating-linear-gradient(100deg,var(--zinc-100)_0%,var(--zinc-100)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--zinc-100)_16%)] [background-image:var(--zinc-100-gradient),var(--aurora)] after:absolute after:inset-0 after:animate-aurora after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-[""] after:[background-image:var(--zinc-100-gradient),var(--aurora)]`,

							showRadialGradient &&
								"mask-[radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_55%)]",
						)}
					/>
				</div>
				{children}
			</div>
		</main>
	);
};
