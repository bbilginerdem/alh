import Contact from "@/components/Contact";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
	return (
		<section className="relative">
			<section className="snap-start snap-always">
				<Hero />
			</section>
			<section className="snap-start snap-always">
				<About />
			</section>
			<section className="snap-start snap-always">
				<Features />
			</section>
			<section className="snap-start snap-always">
				<Contact />
			</section>
		</section>
	);
}
