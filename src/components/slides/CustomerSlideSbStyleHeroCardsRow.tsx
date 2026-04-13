"use client";

import type { ReactNode } from "react";

export const SB_CUSTOMER_MAIN_TOP_OFFSET_PX = 140;

export const SB_MAIN_BODY_SHIFT_RIGHT_PX = 80;

export const SB_HERO_PROBLEM_SOLUTION_GAP_PX = 16;

export const SB_PROBLEM_CARD_WIDTH_PX = 400;
export const SB_SOLUTION_CARD_WIDTH_PX = 460;

export const SB_CARDS_STACK_WIDTH_PX =
  SB_PROBLEM_CARD_WIDTH_PX + SB_HERO_PROBLEM_SOLUTION_GAP_PX + SB_SOLUTION_CARD_WIDTH_PX;

type Props = { hero: ReactNode; cards: ReactNode; rowGapPx?: number };

export function CustomerSlideSbStyleHeroCardsRow({ hero, cards, rowGapPx = SB_HERO_PROBLEM_SOLUTION_GAP_PX }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: rowGapPx,
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
        }}
      >
        {hero}
      </div>

      <div
        style={{
          flex: "1 1 0%",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignSelf: "stretch",
        }}
      >
        {cards}
      </div>
    </div>
  );
}
