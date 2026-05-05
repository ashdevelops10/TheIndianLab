import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "line";

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = Common & {
  href: string;
  target?: string;
  rel?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
  line: "btn btn-line",
};

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className, children } = props;
  const cls = cn(variantClass[variant], className);
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={cls}>
        {children}
      </Link>
    );
  }
  const { variant: _v, className: _c, children: _ch, ...rest } = props as ButtonProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
