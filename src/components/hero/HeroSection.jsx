import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center m-auto md:flex-row max-w-4xp">
      <img
        width={400}
        height={400}
        src="/images/Aissa-Babouri.png"
        alt="avatar"
        className="rounded shadow-lg md:absolute top-[10px] right-[-50px]"
      />
      {/* Hero - Exercise*/}
      <div className="flex flex-col gap-4 md:relative">
        {/* Hero - Exercise*/}
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-8xl">
          Bienvenue Chez{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-xl text-xl">
          <b>Moi c'est Aïssa</b> Je suis le fondateur de <b>webStudZ</b> je
          développe des projets web, de la landing page à l’application web en
          passant par le SaaS, pour des petites et moyennes entreprises. J’ai
          une aspiration certaine pour les projets entrepreneuriaux innovants.
        </p>
      </div>
    </div>
  );
};
