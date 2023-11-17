import { Typography } from "./atom/Typography";

export const ResultMultiplayer = ({ players }) => {
  const Winner = ({ name }) => (
    <>
      <Typography variant="h3" className="text-center">
        Bravo !
      </Typography>
      <Typography className="font-bold text-center">
        {name} a gagné la partie.
      </Typography>
    </>
  );

  if (players[0].score < players[1].score) {
    return <Winner name={players[1].name} />;
  }
  if (players[0].score > players[1].score) {
    return <Winner name={players[0].name} />;
  }
  return (
    <>
      <Typography variant="h3" className="text-center">
        Bravo a vous deux!
      </Typography>
      <Typography className="font-bold text-center">
        Vous êtes arrivé a égalité.
      </Typography>
    </>
  );
};
