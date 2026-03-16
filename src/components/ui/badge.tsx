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
        "inline-flex items-center rounded-full border border-gold-500/30 bg-ember-700/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400",
        className
      )}
    >
      {children}
    </span>
  );
}
