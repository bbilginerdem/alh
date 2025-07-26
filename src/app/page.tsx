"use client";

import { useState } from "react";
import Contact from "../components/Contact";
import About from "../components/homepage/About";
import Features from "../components/homepage/Features";
import Hero from "../components/homepage/Hero";
import Loading from "./loading";

export default function Home() {
	const [loading, setLoading] = useState(true);

	const handleVideoLoaded = () => {
		setLoading(false);
	};

	return (
		<section className="relative">
			<Hero onVideoLoaded={handleVideoLoaded} />

			{loading ? (
				<Loading />
			) : (
				<>
					<About />
					<Features />
					<Contact />
				</>
			)}
		</section>
	);
}
