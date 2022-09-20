import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import {useEffect, useState} from "react";
import logoImg from "./assets/logo-nlw-esports.svg";
import CreateAdBanner from "./components/CreateAdBanner";
import CreateAdModal from "./components/CreateAdModal";
import GameBanner from "./components/GameBanner";
import "./styles/main.css";

/*

!MELHORIAS :

!2. Carousel para mais Games ( KEEN-SLIDER )
!3. Usar Select do Radix 
!4. Validação do formulário ( REACT HOOK FORM )
!5. Autenticação ( Logar com a Twitch, Discord etc...)

*/

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      <h1 className="text-4xl text-white font-black m-10 my-20 mb-5 text-center lg:text-6xl lg:m-20 ">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="flex min-w-full flex-wrap justify-center items-center gap-6 ml-10 mr-10 mt-16  transition-all">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.Ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
