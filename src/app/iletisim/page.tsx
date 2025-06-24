"use client";

import { Send } from "lucide-react";
import { useId } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { sendEmail } from "@/email/sendEmail";
import CustomBlackLayout from "../../components/CustomBlackLayout";

export default function Contact() {
  const { pending } = useFormStatus();
  const id = useId();

  return (
    <CustomBlackLayout>
      <section className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6 rounded-xl p-8 backdrop-blur-sm sm:max-w-lg md:max-w-2xl">
          <h1 className="text-center text-3xl font-bold text-gray-100">
            Contact Me
          </h1>

          <p className="text-center text-gray-300">
            You can contact me through this form or directly at{" "}
            <a
              className="font-medium text-orange-300 underline hover:text-orange-200"
              href="mailto:bbilgin.erdem@gmail.com"
            >
              my e-mail
            </a>
            .
          </p>

          <form
            className="mt-6 flex flex-col gap-4"
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
          >
            <div className="space-y-2">
              <label
                htmlFor={`${id}-email`}
                className="block text-sm font-medium text-gray-200"
              >
                Your email
              </label>
              <input
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-gray-100 transition-all focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/30 placeholder:text-gray-400"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="you@example.com"
                id={`${id}-email`}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor={`${id}-message`}
                className="block text-sm font-medium text-gray-200"
              >
                Your message
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-gray-100 transition-all focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/30 placeholder:text-gray-400"
                name="message"
                placeholder="How can I help you?"
                required
                maxLength={5000}
                rows={6}
                id={`${id}-message`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-orange-300 px-6 py-3 font-medium text-gray-900 transition-all hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300/50 disabled:opacity-70"
              disabled={pending}
            >
              {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </CustomBlackLayout>
  );
}
