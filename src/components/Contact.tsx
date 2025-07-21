import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "./homepage/AnimatedTitle";
import Button from './ui/Button';

const Contact = () => {
  return (
    <section className="relative my-32 min-h-120 w-full px-4 sm:px-8 lg:my-40">
      <div className="relative mx-auto max-w-7xl rounded-2xl py-24 text-zinc-50 sm:overflow-hidden">
        <div className="image-shadow absolute inset-0 overflow-hidden rounded-2xl">
          <Image
            src="/images/contact.jpg"
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
            <p className="font-inter text-orange-300 text-sm tracking-[0.3em]">
              Bize Ulaşın
            </p>
            <div className="mt-3 h-[2px] w-16 bg-linear-to-r from-transparent via-blue-400 to-transparent" />
          </div>

          <AnimatedTitle
            title="Hemen Dansın Keyfine Katılın!"
            containerClass="special-font text-4xl! font-black! leading-tight! w-full max-w-2xl font-zentry !md:text-[5rem] bg-linear-to-r from-orange-100 via-white to-orange-200 bg-clip-text text-transparent"
          />

          <Link
            href="/iletisim"
            passHref
            className="pt-5"
          >
            <Button
              title="İletişim Formu"
              containerClass="flex-center gap-1"
            />
          </Link>

          <div className="-bottom-10 -translate-x-1/2 absolute left-1/2 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
