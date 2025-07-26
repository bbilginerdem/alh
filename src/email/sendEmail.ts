"use server";

import React from "react";
import { Resend } from "resend";

import { getErrorMessage, validateString } from "@/lib/utils";

import ContactFormEmail from "./ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data: object;
  try {
    console.log("Sending email from:", "iletisim@ankaralindyhop.org");
    console.log("Sending email to:", "ankaralindyhop2018@gmail.com");

    data = await resend.emails.send({
      from: "Ankara Lindy Hop <iletisim@ankaralindyhop.org>",
      to: "ankaralindyhop2018@gmail.com",
      subject: "Ankara Lindy Hop İletişim Formu",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    console.log("Email sent successfully:", data);
  } catch (error: unknown) {
    console.error("Email sending failed:", error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
