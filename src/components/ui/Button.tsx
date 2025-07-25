import clsx from "clsx";

interface ButtonProps {
	id?: string;
	title: string;
	rightIcon?: React.ReactNode;
	leftIcon?: React.ReactNode;
	containerClass: string;
	type?: "button" | "submit" | "reset";
	onClick?: () => void; // Add this line
}

const Button = ({
	id,
	title,
	rightIcon,
	leftIcon,
	containerClass,
	type = "button",
	onClick, // Add this line
}: ButtonProps) => {
	return (
		<button
			id={id}
			className={clsx(
				"group grip-1 relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-orange-300 px-7 py-3 text-zinc-950 shadow-md transition-all duration-500 hover:bg-orange-200 hover:shadow-lg",
				containerClass,
			)}
			type={type}
			onClick={onClick} // Add this line
		>
			{leftIcon}

			<span className="relative inline-flex overflow-hidden p-1 font-inter text-sm tracking-wide">
				<div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
					{title}
				</div>
				<div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
					{title}
				</div>
			</span>

			{rightIcon}
		</button>
	);
};

export default Button;
