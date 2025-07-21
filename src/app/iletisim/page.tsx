"use client";

import clsx from "clsx";
import { Send } from "lucide-react";
import { useId, useRef, useState } from "react";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import { sendEmail } from "@/email/sendEmail";
import CustomBlackLayout from "../../components/ui/CustomBlackLayout";

export default function Contact() {
	const [isPending, setIsPending] = useState(false);
	const id = useId();
	const formRef = useRef<HTMLFormElement>(null);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsPending(true);

		try {
			const formData = new FormData(event.currentTarget);
			const { error } = await sendEmail(formData);
			if (error) throw new Error(error);

			toast.success("Email sent successfully!");
			formRef.current?.reset(); // Safely reset using ref
		} catch (error) {
			toast.error(
				error instanceof Error
					? error.message
					: "An unexpected error occurred.",
			);
		} finally {
			setIsPending(false);
		}
	}

	return (
		<CustomBlackLayout>
			<section className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4">
				<div className="w-full max-w-md space-y-6 rounded-xl p-8 backdrop-blur-sm sm:max-w-lg md:max-w-2xl">
					<h1 className="text-center font-bold text-3xl text-gray-100">
						İletişim
					</h1>

					<p className="text-center text-gray-300">
						Bu form aracılığıyla veya doğrudan{" "}
						<a
							className="font-medium text-orange-300 underline hover:text-orange-200"
							href="mailto:ankaralindyhop2018@gmail.com"
						>
							e-posta adresimden
						</a>{" "}
						bana ulaşabilirsiniz.
					</p>

					<form
						className="mt-6 flex flex-col gap-4"
						onSubmit={handleSubmit}
						ref={formRef}
					>
						<div className="space-y-2">
							<label
								htmlFor={`${id}-email`}
								className="block font-medium text-gray-200 text-sm"
							>
								E-posta adresiniz
							</label>
							<input
								className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-gray-100 transition-all placeholder:text-gray-400 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/30"
								name="senderEmail"
								type="email"
								required
								maxLength={500}
								placeholder="ornek@mail.com"
								id={`${id}-email`}
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor={`${id}-message`}
								className="block font-medium text-gray-200 text-sm"
							>
								Mesajınız
							</label>
							<textarea
								className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-gray-100 transition-all placeholder:text-gray-400 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/30"
								name="message"
								placeholder="Size nasıl yardımcı olabilirim?"
								required
								maxLength={5000}
								rows={6}
								id={`${id}-message`}
							/>
						</div>

						<Button
							title={isPending ? "Gönderiliyor..." : "Mesajı Gönder"}
							rightIcon={
								!isPending && (
									<Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
								)
							}
							leftIcon={
								isPending && (
									<div className="h-5 w-5 animate-[spin_1s_linear_infinite] rounded-full border-2 border-zinc-950 border-t-transparent" />
								)
							}
							containerClass={clsx(
								"mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium focus:outline-none focus:ring-4",
								isPending
									? "cursor-not-allowed bg-orange-300/90 text-zinc-950"
									: "",
							)}
							type="submit"
						/>
					</form>
				</div>
			</section>
		</CustomBlackLayout>
	);
}
