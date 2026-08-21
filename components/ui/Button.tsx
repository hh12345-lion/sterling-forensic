import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-highlight text-white hover:bg-highlight-hover focus-visible:ring-highlight",
  secondary:
    "border-2 border-accent bg-accent text-primary hover:bg-accent-muted focus-visible:ring-accent",
  outline:
    "border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const combined = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combined}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
