import { type ReactElement } from "react";

type VariantType = "primary" | "secondary" | "destructive" | "ghost" | "link";
type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonProps = {
  variant?: VariantType;
  size?: SizeType;
  text?: string;
  type?: "button" | "submit" | "reset";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<SizeType, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base font-medium",
  xl: "px-8 py-4 text-lg font-medium",
};

const variants: Record<VariantType, string> = {
  primary:
    "bg-[--color-primary] hover:bg-[--color-primary-hover]",

  secondary:
    "border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:bg-[--color-surface-elevated]",

  ghost:
    "text-[color:var(--color-text)] hover:bg-[--color-surface-elevated]",

  destructive:
    "bg-red-600 hover:bg-red-700 text-white",

  link:
    "text-[--color-accent] underline-offset-4 hover:underline",
};

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  text,
  startIcon,
  endIcon,
  onClick,
  fullWidth,
  loading,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        ${base}
        ${sizes[size]}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          {startIcon}
          {text}
          {endIcon}
        </>
      )}
    </button>
  );
}
