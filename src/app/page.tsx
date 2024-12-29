import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Story from "./components/Story";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Features />
			<Story />
			<Contact />
		</>
	);
}
