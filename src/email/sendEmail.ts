"use server";

import React from "react";
import { Resend } from "resend";

import { contactFormSchema } from "@/lib/schemas";
import { getErrorMessage } from "@/lib/utils";

import ContactFormEmail from "./ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const parsedContactForm = contactFormSchema.safeParse({
		senderEmail: formData.get("senderEmail"),
		message: formData.get("message"),
	});

	if (!parsedContactForm.success) {
		return {
			error: parsedContactForm.error.issues[0]?.message ?? "Form verisi geçersiz.",
		};
	}

	const { senderEmail, message } = parsedContactForm.data;

	let data: object;
	try {
		data = await resend.emails.send({
			from: "Ankara Lindy Hop <iletisim@ankaralindyhop.org>",
			to: "ankaralindyhop2018@gmail.com",
			subject: "Web İletişim Formu",
			replyTo: senderEmail,
			react: React.createElement(ContactFormEmail, {
				message,
				senderEmail,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
