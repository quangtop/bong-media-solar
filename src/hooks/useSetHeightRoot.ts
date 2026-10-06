// useSetHeightRoot.ts
import { useEffect } from "react";

export function useSetHeightRoot(ref: React.RefObject<HTMLDivElement | null>, cssVar: string) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const updateHeight = () => {
      if (element) {
        const height = element.offsetHeight;
        if (height > 0) {
          document.documentElement.style.setProperty(cssVar, `${height}px`);
        }
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref, cssVar]);
}