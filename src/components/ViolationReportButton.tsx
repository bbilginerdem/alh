"use client";

import Button from "@/components/ui/Button";

export function ViolationReportButton() {
	const handleButtonClick = () => {
		window.open(
			"https://docs.google.com/forms/d/e/1FAIpQLScyrPGGqRb-dUQBOj4VGtpmOHd-SbuoWspXjTCSPb0Fc3_MUA/viewform",
			"_blank",
			"noopener,noreferrer",
		);
	};

	return (
		<Button
			title="İhlal Bildirimi Yap"
			containerClass="mx-auto my-4"
			onClick={handleButtonClick}
		/>
	);
}
