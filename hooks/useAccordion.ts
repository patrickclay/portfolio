"use client";

import { useState, useRef, useEffect } from "react";

export function useAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (expandedIndex !== null && cardRefs.current[expandedIndex]) {
      const el = cardRefs.current[expandedIndex];
      const rect = el!.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        el!.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [expandedIndex]);

  const toggle = (i: number) =>
    setExpandedIndex(expandedIndex === i ? null : i);

  return { expandedIndex, cardRefs, toggle };
}
