import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  /** Keep observing and toggle on every enter/leave. Default: true (fires once). */
  once?: boolean;
};

/**
 * Returns a ref to attach to an element and a boolean that flips to true
 * the first time the element scrolls into view. Honours prefers-reduced-motion
 * by reporting "in view" immediately so nothing stays hidden.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
) {
  const { once = true, threshold = 0.15, rootMargin = "0px 0px -10% 0px", ...rest } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin, ...rest },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView } as const;
}