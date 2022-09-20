import React from "react";

import {MagnifyingGlassPlus} from "phosphor-react";

import * as Dialog from "@radix-ui/react-dialog";

export default function CreateAdBanner() {
  return (
    <div className="pt-1  bg-nlw-gradient self-stretch rounded-lg overflow-hidden m-4 mt-14 md:m-14 ">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center flex-col md:flex-row">
        <div className="flex gap-2 flex-col">
          <strong className="text-2xl text-white font-black block text-center text-[1em] md:text-left md:text-[1.5em]">
            Não encontrou sue duo?
          </strong>
          <span className="text-zinc-400 block text-center text-[0.8em] md:text-left md:text-[1em]">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4 mt-6 text-sm  bg-violet-500 text-white rounded hover:bg-violet-600 transition-all flex self-stretch justify-center items-center gap-3 md:mt-0 md:text-[0.8em]">
          <MagnifyingGlassPlus className="text-md hidden md:text-[2em] md:block" />{" "}
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
