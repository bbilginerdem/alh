"use client";

import Button from "@/components/ui/Button";

export function VolunteerButton() {
	const handleVolunteerClick = () => {
		window.open(
			"https://docs.google.com/forms/d/e/1FAIpQLScZCpPCAqFCMiYHmBwoodiSUHMsWAkXmkFLG8Z2qcgXfi3WFg/viewform?usp=dialog",
			"_blank",
			"noopener,noreferrer",
		);
	};

	return (
		<Button
			title="Gönüllü Ol"
			containerClass="mx-auto"
			onClick={handleVolunteerClick}
		/>
	);
}
