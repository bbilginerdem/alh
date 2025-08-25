"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Contact from "../components/Contact";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Loading from "./loading";

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
			} catch (error) {
				if (error && typeof error === "object" && "message" in error) {
					toast.error(
						`Failed to load data: ${(error as { message: string }).message}`,
					);
				} else {
					toast.error("Failed to load data: Unknown error");
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<section className="relative">
			<Hero />
			<About />
			<Features />
			<Contact />
		</section>
	);
}
