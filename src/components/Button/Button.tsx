import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, FC } from "react";
import { cn } from "~/lib/utils";

const buttonVariants = cva("rounded-lg text-sm cursor-pointer", {
	variants: {
		variant: {
			primary:
				"bg-sky-500 text-black transition duration-500 hover:bg-sky-600 hover:text-white",
			secondary:
				"bg-black border border-zinc-700 text-white transition duration-500 hover:bg-violet-400 hover:text-black",
		},
		size: {
			default: "px-6 py-3",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "default",
	},
});

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
	className,
	variant,
	size,
	onClick,
	...props
}) => {
	return (
		<button
			className={cn(buttonVariants({ size, className, variant }))}
			onClick={onClick}
			{...props}
		/>
	);
};

export { Button, buttonVariants };
