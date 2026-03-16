import { cn } from "@/lib/utils";

export function Badge({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
