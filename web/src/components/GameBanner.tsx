import React from "react";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export default function GameBanner(props: GameBannerProps) {
  return (
    <a
      href="#"
      className="relative rounded-lg overflow-hidden border-b-4 border-b-[#eeeeee1e] hover:translate-y-2 hover:border-b-emerald-500 transition-all "
    >
      <img src={props.bannerUrl}></img>

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
