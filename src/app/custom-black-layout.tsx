export default function CustomBlackLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-black pt-20 text-white">{children}</div>
	);
}
