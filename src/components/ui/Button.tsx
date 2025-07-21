import clsx from "clsx";

interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  type = "button", // Default type to "button"
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-orange-300 px-7 py-3 text-black grip-1 shadow-md transition-all duration-500 hover:bg-orange-200 hover:shadow-lg",
        containerClass,
      )}
      type={type}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-inter text-sm tracking-wide p-1">
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
