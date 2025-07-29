"use client";

import Contact from "../components/Contact";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";

export default function Home() {
	return (
		<section className="relative">
			<Hero />
			<About />
			<Features />
			<Contact />
		</section>
	);
}
