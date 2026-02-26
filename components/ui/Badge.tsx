import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "border-transparent bg-background-elevated text-foreground-secondary hover:bg-background-elevated/80": variant === "default",
                    "border-border-default text-foreground-primary": variant === "outline",
                    "border-transparent bg-accent-muted text-accent-primary": variant === "accent",
                },
                className
            )}
            {...props}
        />
    );
}

export { Badge };
