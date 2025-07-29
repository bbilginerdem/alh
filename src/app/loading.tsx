export default function Loading() {
	return (
		<div className="absolute z-50 h-dvh w-screen flex-center overflow-hidden bg-zinc-950">
			<div className="three-body">
				<div className="three-body__dot" />
				<div className="three-body__dot" />
				<div className="three-body__dot" />
			</div>
		</div>
	);
}
