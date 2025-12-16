export function NewBadgeCircle() {
	return (
		<span className="absolute -top-1 -right-2 flex h-2 w-2">
			<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-50 opacity-75" />
			<span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-100" />
		</span>
	);
}
