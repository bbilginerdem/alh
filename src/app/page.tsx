"use client";

import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Loading from "./loading";

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timeout);
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
