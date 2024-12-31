// import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Facebook from "../social/facebook";
import Instagram from "../social/instagram";
import Youtube from "../social/youtube";

const socialLinks = [
	{ href: "https://www.instagram.com/ankaralindyhop/", icon: <Instagram /> },
	{
		href: "https://www.facebook.com/ankaralindyhop/",
		icon: <Facebook />,
	},
	{ href: "https://www.youtube.com/@AnkaraLindyHop", icon: <Youtube /> },
];

const Footer = () => {
	return (
		<footer className="w-screen bg-[#5542ff] py-4 text-black">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
				<p className="text-center font-light text-sm md:text-left">
					Ankara Lindy Hop
				</p>

				<div className="flex justify-center gap-6 md:justify-start">
					{socialLinks.map((link) => (
						<Link
							key={uuidv4()}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-black transition-colors duration-500 ease-in-out hover:text-white"
						>
							{link.icon}
						</Link>
					))}
				</div>

				<a
					href="#privacy-policy"
					className="text-center font-light text-sm hover:underline md:text-right"
				>
					Privacy Policy
				</a>
			</div>
		</footer>
	);
};

export default Footer;
