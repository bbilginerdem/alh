"use client";

import { Send } from "lucide-react";
import { useId } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { sendEmail } from "@/lib/api/sendEmail";
import CustomBlackLayout from "../../components/CustomBlackLayout";

export default function Contact() {
  const { pending } = useFormStatus();
  const id = useId();

  return (
    <CustomBlackLayout>
      <section
        id={id}
        className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      >
        <p className="-mt-6 text-gray-700 dark:text-white/80">
          You can contact me through this from or directly at{" "}
          <a className="underline" href="mailto:bbilgin.erdem@gmail.com">
            my e-mail
          </a>
          .
        </p>

        <form
          className="mt-10 flex flex-col gap-1 dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            id={`${id}-email`}
          />
          <textarea
            className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            id={`${id}-message`}
          />
          <div className="mx-auto">
            <button
              type="submit"
              className="group flex h-[3rem] w-[12rem] items-center justify-center gap-4 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
              disabled={pending}
            >
              {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-white border-b-2" />
              ) : (
                <>
                  Submit{" "}
                  <Send className="group-hover:-translate-y-1 text-xs opacity-70 transition-all group-hover:translate-x-1" />{" "}
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </CustomBlackLayout>
  );
}
