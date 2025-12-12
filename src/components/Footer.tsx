import Link from "next/link";
import { generateSecureRandomId } from "@/lib/utils";
import Facebook from "./social/facebook";
import Instagram from "./social/instagram";
import Youtube from "./social/youtube";

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
		<footer className="min-h-22 w-screen bg-orange-300 py-4 text-black md:min-h-14">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
				{/* Branding */}
				<p className="text-center font-light text-sm md:text-left">
					Ankara Lindy Hop
				</p>

				{/* Footer Links */}
				<div className="flex flex-wrap items-center justify-center gap-4 text-sm md:gap-6">
					<Link
						href="/topluluk-ilkeleri"
						className="transition-colors duration-300 hover:text-zinc-100 hover:underline"
					>
						Topluluk İlkeleri
					</Link>
					<Link
						href="/gizlilik-politikasi"
						className="transition-colors duration-300 hover:text-zinc-100 hover:underline"
					>
						Gizlilik Politikası
					</Link>
				</div>

				{/* Social Links */}
				<div className="flex justify-center gap-6 md:justify-start">
					{socialLinks.map((link) => (
						<Link
							key={generateSecureRandomId()}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-black transition-colors duration-500 ease-in-out hover:text-white"
						>
							{link.icon}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
