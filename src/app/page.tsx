import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Story from "./components/Story";
// import Navbar from './components/Navbar';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Features />
			<Story />
			<Contact />
		</main>
	);
}
