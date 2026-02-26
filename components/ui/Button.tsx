import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 tracking-wide",
                    {
                        "bg-accent-primary text-background-primary hover:bg-accent-hover hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(200,149,108,0.15)]": variant === "primary",
                        "border border-border-default bg-transparent text-foreground-primary hover:bg-background-elevated hover:border-border-emphasis hover:-translate-y-0.5": variant === "secondary",
                        "bg-transparent text-foreground-primary underline-offset-4 hover:underline hover:text-foreground-primary/80": variant === "tertiary",
                        "h-10 px-6 py-2": size === "default",
                        "h-9 rounded-md px-4": size === "sm",
                        "h-12 rounded-md px-8 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
