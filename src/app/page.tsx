"use client";

import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Loading from "./loading";

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="relative">
			{loading ? (
				<Loading />
			) : (
				<>
					<Hero />
					<About />
					<Features />
					<Contact />
				</>
			)}
		</section>
	);
}
