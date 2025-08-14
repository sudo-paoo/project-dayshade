import { cn } from "@/lib/utils";

export default function GradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, var(--color-pd-dark-grey) 0%, var(--color-pd-black) 30%, var(--color-pd-black) 100%)",
        minHeight: "100vh",
        position: "relative",
      }}
      className={cn(
        "",
        className
      )}
    >
      <div
        style={{
          backgroundColor: "var(--color-pd-dark-grey)",
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/assets/pattern.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.05,
        }}
      />
      {children}
    </div>
  );
}
