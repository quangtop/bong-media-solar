"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Reset loaded state on full page mount
    document.documentElement.dataset.loaded = "false";
    document.body.style.overflow = "hidden";

    // Smooth loading progress animation
    const startTime = Date.now();
    const duration = 800; // 800ms loading duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);

          // Mark document as loaded and unlock scroll
          document.documentElement.dataset.loaded = "true";
          document.body.style.overflow = "";

          // Notify scroll reveal hooks that preloader has completed
          window.dispatchEvent(new Event("preloaderComplete"));

          setTimeout(() => {
            setLoading(false);
          }, 700); // match fade out transition duration (700ms)
        }, 150);
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-darker transition-opacity duration-700 ease-out ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      {/* Background Mask & Sunlight Radial Glow Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-primary/15 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-xs w-full px-6">
        {/* Brand Logo */}
        <div className="relative">
          <BrandLogo />
        </div>

        {/* Progress Bar & Counter */}
        <div className="w-full space-y-3">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-primary rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(19,169,88,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-xs font-medium tracking-widest text-white/75 uppercase">
            <span>Đang tải</span>
            <span className="tabular-nums text-white font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
