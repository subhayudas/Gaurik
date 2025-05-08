"use client";
import { Dispatch, SetStateAction } from "react";
import Cursor from "@/components/Client/Cursor";
import PlaySVG from "@/components/SVGComponents/PlaySVG";
export default function HeroMobileClient({
  playIntro,
  setPlayIntro,
}: {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
  playIntro: boolean;
}) {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      onClick={() => setPlayIntro((prev) => !prev)}
    >
      <div className="relative size-full md:hidden">
        <img src="/ImageContainer/Guess.jpg" alt="Gaurik Hero Mobile" className="size-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <Cursor
        renderCursor={!playIntro}
        isMobile={true}
        className="absolute grid aspect-square h-11 place-items-center rounded-full"
      >
        <PlaySVG />
      </Cursor>
    </div>
  );
}
