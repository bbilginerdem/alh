"use client";
export default function LoadingComponent() {
	return (
		<div className="absolute z-50 h-dvh w-screen flex-center overflow-hidden bg-blue-75">
			<div className="three-body">
				<div className="three-body__dot" />
				<div className="three-body__dot" />
				<div className="three-body__dot" />
			</div>
		</div>
	);
}
