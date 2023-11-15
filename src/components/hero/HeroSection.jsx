import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <div className="flex relative flex-col md:flex-row items-center m-auto max-w-4xp">
      <img
        width={400}
        height={400}
        src="/images/Aissa-Babouri.png"
        alt="avatar"
        className="rounded shadow-lg md:absolute top-[10px] right-[-50px]"
      />
      {/* Hero - Exercise*/}
      <div className="md:relative flex flex-col gap-4">
        {/* Hero - Exercise*/}
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-8xl">
          Hello I'm{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-xl text-xl">
          <b>Apprenti React.</b> I’m a software developer that make thing on
          internet, very happy to see your here, place holder please fill
          something here please fill something here.
        </p>
      </div>
    </div>
  );
};
