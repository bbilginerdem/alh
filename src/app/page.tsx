"use client";

import { useSelector } from "react-redux";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Story from "./components/Story";

export default function Home() {
	const loading = useSelector(
		(state: { loading: { loading: boolean } }) => state.loading.loading,
	);

	return (
		<>
			{loading && <Loading />}
			<Hero />
			<About />
			<Features />
			<Story />
			<Contact />
		</>
	);
}
