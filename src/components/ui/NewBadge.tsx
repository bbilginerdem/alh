interface NewBadgeProps {
	className?: string;
}

export function NewBadge({ className = "" }: Readonly<NewBadgeProps>) {
	return (
		<div className={`inline-flex items-center justify-center ${className}`}>
			<span className="absolute inline-flex h-5 w-8 animate-ping-2s rounded-full bg-orange-400 opacity-50" />
			<span className="z-10 items-center justify-center rounded-full bg-orange-500 px-2 py-1 font-medium text-white text-xs">
				Yeni
			</span>
		</div>
	);
}
