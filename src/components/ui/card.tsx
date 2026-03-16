import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-border/70 bg-card/95 p-6 shadow-[0_15px_40px_rgba(22,44,35,0.12)] backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
