import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";
import {cva, VariantProps} from "class-variance-authority";

const buttonVariants = cva(
  "font-medium cursor-pointer active:scale-99 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-500",
  {
    variants: {
      color: {
        primary: "bg-white text-teal-900",
        secondary: "bg-teal-900 text-white",
        tertiary: "bg-orange-900 text-white",
      },
      size: {
        small: "px-4 py-1.5 text-[14px] rounded-md",
        large: "px-6 py-2 text-[16px] rounded-xl",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, className, color, size, ...props}, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({color, size}), className)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
