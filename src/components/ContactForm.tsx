"use client";

import clsx from "clsx";
import { Send } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useId } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import { sendEmail } from "@/email/sendEmail";

type ContactFormState = {
	error?: string;
	success?: boolean;
};

async function submitContactForm(
	_previousState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	const result = await sendEmail(formData);

	if (result.error) {
		return { error: result.error };
	}

	return { success: true };
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			title={pending ? "Gönderiliyor..." : "Gönder"}
			disabled={pending}
			rightIcon={
				!pending && <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
			}
			leftIcon={
				pending && (
					<div className="h-5 w-5 animate-spin rounded-full border border-zinc-100 border-t-transparent" />
				)
			}
			containerClass={clsx(
				"mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium focus:ring-4 focus:outline-none",
				pending ? "cursor-not-allowed bg-orange-300/90 text-zinc-100" : "",
			)}
			type="submit"
		/>
	);
}

export function ContactForm() {
	const id = useId();
	const [state, formAction] = useActionState(submitContactForm, {});

	useEffect(() => {
		if (state.error) {
			toast.error(state.error);
		} else if (state.success) {
			toast.success("E-posta başarıyla gönderildi.");
		}
	}, [state]);

	return (
		<div className="w-full max-w-md space-y-8 rounded-xl p-10 sm:max-w-lg md:max-w-2xl">
			<h1 className="text-center text-3xl font-bold text-gray-100">İletişim</h1>

			<p className="text-center text-gray-300">
				Form aracılığıyla veya doğrudan{" "}
				<Link
					className="font-medium text-orange-300 underline hover:text-orange-200"
					href="mailto:ankaralindyhop2018@gmail.com"
					target="_blank"
				>
					e-posta adresimizden
				</Link>{" "}
				bize ulaşabilirsiniz.
			</p>

			<form
				className="mt-8 flex flex-col gap-5"
				action={formAction}
				data-mcp-tool="send_contact_email"
				data-mcp-description="İletişim formunu doldurarak Ankara Lindy Hop topluluğuna e-posta gönderin."
			>
				<div className="space-y-3">
					<label htmlFor={`${id}-email`} className="block text-sm font-medium text-zinc-300">
						E-posta adresiniz:
					</label>
					<input
						className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-gray-100 transition-all placeholder:text-gray-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-300/30 focus:outline-none"
						name="senderEmail"
						type="email"
						required
						maxLength={500}
						placeholder="ornek@mail.com"
						id={`${id}-email`}
						data-mcp-param-description="Gönderenin e-posta adresi"
					/>
				</div>

				<div className="space-y-3">
					<label htmlFor={`${id}-message`} className="block text-sm font-medium text-zinc-300">
						Mesajınız:
					</label>
					<textarea
						className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-gray-100 transition-all placeholder:text-gray-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-300/30 focus:outline-none"
						name="message"
						placeholder="Size nasıl yardımcı olabiliriz?"
						required
						maxLength={5000}
						rows={6}
						id={`${id}-message`}
						data-mcp-param-description="İletişim mesajı içeriği"
					/>
				</div>

				<SubmitButton />
			</form>
		</div>
	);
}
