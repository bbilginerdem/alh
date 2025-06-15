import Link from "next/link";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

interface ImageClipBoxProps {
	src: string;
	clipClass: string;
}

const ImageClipBox: React.FC<ImageClipBoxProps> = ({ src, clipClass }) => (
	<div className={clipClass}>
		<img src={src} alt="Clip" />
	</div>
);

const Contact = () => {
	return (
		<section
			id="contact"
			className="relative my-32 min-h-[30rem] w-full px-4 sm:px-8 lg:my-40"
		>
			<div className="relative mx-auto max-w-7xl rounded-2xl bg-gradient-to-br from-gray-900 to-black py-24 text-blue-50 shadow-2xl shadow-blue-900/20 sm:overflow-hidden">
				<div className="absolute inset-0 bg-[url('/img/noise.png')] opacity-10 mix-blend-soft-light" />

				<div className="-top-32 absolute left-1/4 w-56 sm:top-1/2 md:right-16 md:left-auto lg:top-24 lg:w-72 xl:right-24">
					<ImageClipBox
						src="/img/contact-right.jpg"
						clipClass="contact-clip-path md:scale-125 hover:rotate-2 hover:scale-[1.35] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
					/>
				</div>

				<div className="relative z-10 flex flex-col items-center px-6 text-center sm:px-8">
					<div className="mb-12 flex flex-col items-center">
						<p className="font-general text-blue-300/80 text-xs uppercase tracking-[0.3em]">
							Bize Ulaşın
						</p>
						<div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
					</div>

					<AnimatedTitle
						title="Hemen Dansın Keyfine Katılın!"
						containerClass="special-font !text-4xl !font-black !leading-tight w-full max-w-2xl font-zentry !md:text-[5rem] bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent"
					/>

					<Link href="/iletisim" passHref>
						<Button
							title="İletişim"
							containerClass="mt-12 group relative overflow-hidden rounded-lg px-8 py-3 font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
						/>
					</Link>

					<div className="-bottom-10 -translate-x-1/2 absolute left-1/2 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
				</div>
			</div>
		</section>
	);
};

export default Contact;
