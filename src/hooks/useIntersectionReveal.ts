"use client";

import { useState, useEffect, useRef, RefObject } from "react";

export interface UseIntersectionRevealOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Reusable custom hook for detecting when an element enters the viewport.
 * Useful for triggering entrance scroll animations, counters, and reveals.
 * Respects preloader state and immediately reveals elements already passed on page reload.
 */
export function useIntersectionReveal<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionRevealOptions = {}
): { ref: RefObject<T | null>; isVisible: boolean } {
  const { threshold = 0.05, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element was already scrolled past before/during page reload
    const rect = element.getBoundingClientRect();
    if (rect.bottom <= 0 || (rect.top < 0 && window.scrollY > 0)) {
      setIsVisible(true);
      return;
    }

    let cleanupPreloaderListener: (() => void) | null = null;

    const triggerReveal = (target: Element, observer: IntersectionObserver) => {
      const isPreloaded =
        typeof document !== "undefined" &&
        (document.documentElement.dataset.loaded === "true" ||
         !document.querySelector(".z-9999")); // fallback if preloader not in DOM

      if (isPreloaded) {
        setIsVisible(true);
        if (triggerOnce) observer.unobserve(target);
      } else {
        const onPreloaderComplete = () => {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(target);
          window.removeEventListener("preloaderComplete", onPreloaderComplete);
        };
        window.addEventListener("preloaderComplete", onPreloaderComplete);
        cleanupPreloaderListener = () => {
          window.removeEventListener("preloaderComplete", onPreloaderComplete);
        };
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerReveal(entry.target, observer);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (cleanupPreloaderListener) cleanupPreloaderListener();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
