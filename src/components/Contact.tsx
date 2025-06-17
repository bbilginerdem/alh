import Link from "next/link";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import Image from "next/image";

const Contact = () => {
	return (
		<section
			id="contact"
			className="relative my-32 min-h-120 w-full px-4 sm:px-8 lg:my-40"
		>
			{/* bg-linear-to-br from-gray-900 to-black shadow-2xl shadow-blue-900/20 */}
			<div className="image-shadow relative mx-auto max-w-7xl rounded-2xl py-24 text-blue-50 sm:overflow-hidden">
				<div className="absolute inset-0 overflow-hidden rounded-2xl">
					<Image
						src="/img/contact-right.jpg"
						alt="Contact Image"
						className="h-full w-full object-cover brightness-95 contrast-110 saturate-110"
						fill
						loading="lazy"
						style={{ objectPosition: "right center" }}
					/>
					<div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/70 to-transparent" />
				</div>

				<div className="relative z-10 flex flex-col items-center px-6 text-center sm:px-8">
					<div className="mb-12 flex flex-col items-center">
						<p className="font-general text-blue-300/80 text-xs uppercase tracking-[0.3em]">
							Bize Ulaşın
						</p>
						<div className="mt-3 h-[2px] w-16 bg-linear-to-r from-transparent via-blue-400 to-transparent" />
					</div>

					<AnimatedTitle
						title="Hemen Dansın Keyfine Katılın!"
						containerClass="special-font text-4xl! font-black! leading-tight! w-full max-w-2xl font-zentry !md:text-[5rem] bg-linear-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent"
					/>

					<Link href="/iletisim" passHref>
						<Button
							title="İletişim"
							containerClass="group relative mt-12 overflow-hidden rounded-lg px-8 py-3 font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
						/>
					</Link>

					<div className="-bottom-10 -translate-x-1/2 absolute left-1/2 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
				</div>
			</div>
		</section>
	);
};

export default Contact;
