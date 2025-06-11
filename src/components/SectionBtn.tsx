import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";

export default function SubmitBtn() {
	const { pending } = useFormStatus();

	return (
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
	);
}
