"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

export default function Home() {
	const loading = useSelector(
		(state: { loading: { loading: boolean } }) => state.loading.loading,
	);

	console.log("xd", loading);

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
