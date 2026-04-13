"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/** Shifts hero + cards block right (matches Sage / SB singles). */
export const SB_MAIN_BODY_SHIFT_RIGHT_PX = 80;

/** Gap between hero column and card region; same as between Problem and Solution. */
export const SB_HERO_PROBLEM_SOLUTION_GAP_PX = 16;

/**
 * Splits free space beside the fixed-width card column: more cushion left of cards,
 * less right — matches CustomerUseCasesSbSingleSlides (Sage Surfaces).
 */
export const SB_CARDS_LEADING_FREE_SPACE_GROW = 65;
export const SB_CARDS_TRAILING_FREE_SPACE_GROW = 35;

export const SB_PROBLEM_CARD_WIDTH_PX = 400;
export const SB_SOLUTION_CARD_WIDTH_PX = 460;

export const SB_CARDS_STACK_WIDTH_PX =
  SB_PROBLEM_CARD_WIDTH_PX + SB_HERO_PROBLEM_SOLUTION_GAP_PX + SB_SOLUTION_CARD_WIDTH_PX;

type Props = { hero: ReactNode; cards: ReactNode };

/**
 * Hero (26%) + gap + card region with leading/trailing flex spacers and hero translateX
 * so visual spacing matches SB single-customer slides (e.g. Sage Surfaces).
 */
export function CustomerSlideSbStyleHeroCardsRow({ hero, cards }: Props) {
  const cardsLeadSpacerRef = useRef<HTMLDivElement>(null);
  const [heroNudgePx, setHeroNudgePx] = useState(0);

  useLayoutEffect(() => {
    const el = cardsLeadSpacerRef.current;
    if (!el) return;
    const sync = () => setHeroNudgePx(el.offsetWidth);
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    sync();
    return () => ro.disconnect();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: SB_HERO_PROBLEM_SOLUTION_GAP_PX,
        alignItems: "flex-start",
        marginLeft: SB_MAIN_BODY_SHIFT_RIGHT_PX,
        minWidth: 0,
        width: `calc(100% - ${SB_MAIN_BODY_SHIFT_RIGHT_PX}px)`,
      }}
    >
      <div
        style={{
          width: "26%",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignSelf: "flex-start",
          position: "relative",
          zIndex: 2,
          transform: `translateX(${heroNudgePx}px)`,
        }}
      >
        {hero}
      </div>

      <div
        style={{
          flex: "1 1 auto",
          minWidth: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          alignSelf: "stretch",
        }}
      >
        <div
          ref={cardsLeadSpacerRef}
          aria-hidden
          style={{ flex: `${SB_CARDS_LEADING_FREE_SPACE_GROW} 1 0%`, minWidth: 0 }}
        />
        <div style={{ flex: "0 0 auto", minWidth: 0, maxWidth: "100%" }}>{cards}</div>
        <div
          aria-hidden
          style={{ flex: `${SB_CARDS_TRAILING_FREE_SPACE_GROW} 1 0%`, minWidth: 0 }}
        />
      </div>
    </div>
  );
}
