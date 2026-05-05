import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Comp = As as React.ElementType;
  return <Comp className={cn("container-page", className)}>{children}</Comp>;
}
