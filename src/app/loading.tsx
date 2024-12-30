export default function Loading() {
	return (
		<div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-white">
			<div className="relative w-full max-w-sm">
				<div className="h-2 rounded-full bg-gray-200">
					<div className="h-2 rounded-full bg-blue-500" />
				</div>
				<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform">
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="h-5 w-5 animate-spin text-blue-500"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
