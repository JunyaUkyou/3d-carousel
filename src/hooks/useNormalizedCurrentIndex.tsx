import { useMemo } from "react";
import { getNormalizedIndex } from "../utilities/getNormalizedIndex";

export function useNormalizedCurrentIndex(
  currentIndex: number,
  totalItems: number,
): number {
  return useMemo(
    () => getNormalizedIndex(currentIndex, totalItems),
    [currentIndex, totalItems],
  );
}
