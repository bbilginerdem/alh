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
								"repeating-linear-gradient(120deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
							"--dark-gradient":
								"repeating-linear-gradient(120deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
							"--white-gradient":
								"repeating-linear-gradient(120deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

							"--orange-300": "#fdba74",
							"--orange-400": "#fb923c",
							"--zinc-950": "#09090b",
							"--white": "#fff",
							"--transparent": "transparent",
						} as React.CSSProperties
					}
				>
					<div
						//   I'm sorry but this is what peak developer performance looks like // trigger warning
						className={cn(
							`-inset-2.5 pointer-events-none absolute bg-position-[50%_50%,50%_50%] bg-size-[250%,175%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--orange-400)_10%,var(--zinc-950)_15%,var(--zinc-950)_20%,var(--orange-300)_25%,var(--orange-300)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--zinc-950)_0%,var(--zinc-950)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--zinc-950)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--white-gradient),var(--aurora)] after:absolute after:inset-0 after:animate-aurora after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-[""] after:[background-image:var(--white-gradient),var(--aurora)]`,

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
