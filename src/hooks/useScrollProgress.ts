import { useEffect, useState, type RefObject } from "react";

export const useScrollProgress = (ref: RefObject<HTMLElement | null>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const travel = rect.height + viewport * 0.45;
      const scrolled = viewport * 0.62 - rect.top;
      setProgress(Math.min(1, Math.max(0, scrolled / travel)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return progress;
};
