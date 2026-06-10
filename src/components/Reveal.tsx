import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  /** Extra classes for the wrapper (e.g. "h-full" inside a grid). */
  className?: string;
  /** Delay in ms — use index * 80 for a staggered grid. */
  delay?: number;
};

/**
 * Fades + lifts its children into place once they scroll into view.
 * Renders a plain div, so it can sit directly inside a grid/flex layout.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}