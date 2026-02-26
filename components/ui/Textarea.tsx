import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-md border border-border-default bg-background-surface px-4 py-2 text-sm text-foreground-primary transition-colors placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-emphasis disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-border-emphasis",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
