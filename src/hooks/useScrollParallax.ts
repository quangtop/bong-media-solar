import { useState, useEffect, useRef, RefObject, useSyncExternalStore } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const getMotionSnapshot = () => window.matchMedia(motionQuery).matches;
const getServerMotionSnapshot = () => false;

export interface UseScrollParallaxOptions {
  /** Speed multiplier for background translation */
  bgSpeed?: number;
  /** Max scale multiplier for background zoom */
  bgScaleFactor?: number;
  /** Speed multiplier for left foreground column translation */
  leftSpeed?: number;
  /** Speed multiplier for right foreground column translation */
  rightSpeed?: number;
}

export interface UseScrollParallaxReturn<T extends HTMLElement = HTMLElement> {
  headerRef: RefObject<T | null>;
  scrollY: number;
  scrollRatio: number;
  isVisible: boolean;
  prefersReducedMotion: boolean;
  scrollIndicatorOpacity: number;
  bgTranslate: number;
  bgScale: number;
  bgOverlayOpacity: number;
  leftColTranslate: number;
  leftColOpacity: number;
  rightColTranslate: number;
  rightColScale: number;
  rightColOpacity: number;
  scrollToNextSection: () => void;
}

/**
 * Reusable custom hook for multi-layer scroll parallax calculations,
 * scroll position tracking, and reduced-motion accessibility.
 */
export function useScrollParallax<T extends HTMLElement = HTMLElement>(
  options: UseScrollParallaxOptions = {}
): UseScrollParallaxReturn<T> {
  const {
    bgSpeed = 0.35,
    bgScaleFactor = 0.08,
    leftSpeed = 0.14,
    rightSpeed = 0.08,
  } = options;

  const headerRef = useRef<T>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(800);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(subscribeToMotion, getMotionSnapshot, getServerMotionSnapshot);

  useEffect(() => {
    // Trigger reveal when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);

    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      setSectionHeight(entry.target instanceof HTMLElement ? entry.target.offsetHeight || 800 : 800);
    });
    if (headerRef.current) resizeObserver.observe(headerRef.current);

    // Optimized scroll listener using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  const scrollRatio = Math.min(Math.max(scrollY / sectionHeight, 0), 1);

  // Parallax transform & opacity calculations
  const bgTranslate = prefersReducedMotion ? 0 : scrollY * bgSpeed;
  const bgScale = prefersReducedMotion ? 1 : 1 + scrollRatio * bgScaleFactor;
  const bgOverlayOpacity = Math.min(0.92, 0.7 + scrollRatio * 0.25);

  const leftColTranslate = prefersReducedMotion ? 0 : scrollY * leftSpeed;
  const leftColOpacity = prefersReducedMotion ? 1 : Math.max(0, 1 - scrollRatio * 1.2);

  const rightColTranslate = prefersReducedMotion ? 0 : scrollY * rightSpeed;
  const rightColScale = prefersReducedMotion ? 1 : Math.max(0.94, 1 - scrollRatio * 0.05);
  const rightColOpacity = prefersReducedMotion ? 1 : Math.max(0, 1 - scrollRatio * 1.15);

  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 140);

  const scrollToNextSection = () => {
    if (headerRef.current) {
      const nextElem = headerRef.current.nextElementSibling;
      if (nextElem) {
        nextElem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: sectionHeight, behavior: "smooth" });
      }
    }
  };

  return {
    headerRef,
    scrollY,
    scrollRatio,
    isVisible,
    prefersReducedMotion,
    scrollIndicatorOpacity,
    bgTranslate,
    bgScale,
    bgOverlayOpacity,
    leftColTranslate,
    leftColOpacity,
    rightColTranslate,
    rightColScale,
    rightColOpacity,
    scrollToNextSection,
  };
}
