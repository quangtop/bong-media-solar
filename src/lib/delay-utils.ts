/* Static Tailwind reveal-delay class arrays for JIT compiler scanning */
export const DELAY_100: string[] = [
  "reveal-delay-100",
  "reveal-delay-200",
  "reveal-delay-300",
  "reveal-delay-400",
  "reveal-delay-500",
  "reveal-delay-600",
  "reveal-delay-700",
  "reveal-delay-800",
  "reveal-delay-900",
  "reveal-delay-1000",
  "reveal-delay-1100",
  "reveal-delay-1200",
  "reveal-delay-1300",
  "reveal-delay-1400",
  "reveal-delay-1500",
  "reveal-delay-1600",
  "reveal-delay-1700",
  "reveal-delay-1800",
  "reveal-delay-1900",
  "reveal-delay-2000",
];

export const DELAY_50: string[] = [
  "reveal-delay-50",
  "reveal-delay-100",
  "reveal-delay-150",
  "reveal-delay-200",
  "reveal-delay-250",
  "reveal-delay-300",
  "reveal-delay-350",
  "reveal-delay-400",
  "reveal-delay-450",
  "reveal-delay-500",
  "reveal-delay-550",
  "reveal-delay-600",
  "reveal-delay-650",
  "reveal-delay-700",
  "reveal-delay-750",
  "reveal-delay-800",
  "reveal-delay-850",
  "reveal-delay-900",
  "reveal-delay-950",
  "reveal-delay-1000",
];

/**
 * Unified function to safely return a reveal-delay-[ms] class from a delay array.
 * Pure utility function compatible with both Server Components and Client Components.
 * 
 * @param index - The loop index (0-based)
 * @param delayArray - The static delay array to use (defaults to DELAY_100)
 * @param range - Optional tuple [startIndex, endIndex]. 
 *                If endIndex is -1, it continues for all items starting from startIndex.
 *                If index exceeds (endIndex - startIndex), returns "" (no delay class).
 */
export function getDelayClass(
  index: number,
  delayArray: string[] = DELAY_100,
  range?: [number, number]
): string {
  if (!range) {
    return delayArray[index % delayArray.length];
  }

  const [start, end] = range;

  if (end !== -1) {
    const maxItems = end - start + 1;
    if (index >= maxItems) {
      return "";
    }
  }

  const targetIndex = start + index;
  return delayArray[targetIndex % delayArray.length];
}

export const DELAY_100_CLASSES = DELAY_100;
export const DELAY_50_CLASSES = DELAY_50;

export function getDelay100Class(index: number, range?: [number, number]): string {
  return getDelayClass(index, DELAY_100, range);
}

export function getDelay50Class(index: number, range?: [number, number]): string {
  return getDelayClass(index, DELAY_50, range);
}
