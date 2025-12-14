export function NewBadgeCircle() {
	return (
		<span className="-top-1 -right-2 absolute flex h-2 w-2">
			<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-50 opacity-75" />
			<span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-100" />
		</span>
	);
}
