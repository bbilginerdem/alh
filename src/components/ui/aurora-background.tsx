"use client";
import { cn } from "@/lib/utils";
import type React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import type { ReactNode } from "react";

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
	const auroraRef = useRef<HTMLDivElement>(null);
	const afterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!auroraRef.current || !afterRef.current) return;

		// Set initial state
		gsap.set(auroraRef.current, {
			backgroundPosition: "50% 50%, 50% 50%",
			backgroundSize: "300%, 200%",
		});

		gsap.set(afterRef.current, {
			backgroundSize: "200%, 100%",
		});

		// Create animation timeline
		const tl = gsap.timeline({ repeat: -1 });

		// Aurora animation
		tl.to(auroraRef.current, {
			backgroundPosition: "50% 50%, 50% 80%",
			duration: 20,
			ease: "none",
		})
			.to(
				auroraRef.current,
				{
					backgroundPosition: "50% 50%, 80% 50%",
					duration: 20,
					ease: "none",
				},
				0,
			)
			.to(
				auroraRef.current,
				{
					backgroundPosition: "50% 50%, 50% 20%",
					duration: 20,
					ease: "none",
				},
				20,
			)
			.to(
				auroraRef.current,
				{
					backgroundPosition: "50% 50%, 20% 50%",
					duration: 20,
					ease: "none",
				},
				20,
			);

		// After element animation
		tl.to(
			afterRef.current,
			{
				backgroundPosition: "50% 50%, 50% 80%",
				duration: 15,
				ease: "none",
			},
			0,
		)
			.to(
				afterRef.current,
				{
					backgroundPosition: "50% 50%, 80% 50%",
					duration: 15,
					ease: "none",
				},
				0,
			)
			.to(
				afterRef.current,
				{
					backgroundPosition: "50% 50%, 50% 20%",
					duration: 15,
					ease: "none",
				},
				15,
			)
			.to(
				afterRef.current,
				{
					backgroundPosition: "50% 50%, 20% 50%",
					duration: 15,
					ease: "none",
				},
				15,
			);
	}, []);

	return (
		<div
			className={cn(
				"-z-50 items-center justify-center bg-zinc-950 text-slate-950 transition-bg",
				className,
			)}
			{...props}
		>
			<div
				className="inset-0 overflow-hidden"
				style={
					{
						"--aurora":
							"repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
						"--dark-gradient":
							"repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
						"--white-gradient":
							"repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
						"--blue-300": "#93c5fd",
						"--blue-400": "#60a5fa",
						"--blue-500": "#3b82f6",
						"--indigo-300": "#a5b4fc",
						"--violet-200": "#ddd6fe",
						"--black": "#000",
						"--white": "#fff",
						"--transparent": "transparent",
					} as React.CSSProperties
				}
			>
				<div
					ref={auroraRef}
					className={cn(
						"-inset-[10px] pointer-events-none absolute opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)]",
						showRadialGradient &&
							"[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]",
					)}
				>
					<div
						ref={afterRef}
						className="absolute inset-0 mix-blend-difference [background-attachment:fixed] [background-image:var(--white-gradient),var(--aurora)] [background-size:200%,_100%] after:dark:[background-image:var(--dark-gradient),var(--aurora)]"
					/>
				</div>
			</div>
			{children}
		</div>
	);
};
