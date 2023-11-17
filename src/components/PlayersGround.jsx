import { Typography } from "./atom/Typography";
import { useMemoryCtx } from "./memory/MemoryProvider";
import { ResultMultiplayer } from "./ResultMultiplayer";

export const PlayersGround = ({ players }) => {
  const { isFinish } = useMemoryCtx();
  const currentPlayer = players.find((player) => player.active === true);
  return (
    <div
      style={{ width: "330px" }}
      className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-paper dark:border-gray-700"
    >
      {!isFinish ? (
        <Typography variant="h3" className="font-extrabold text-center w-100">
          <p>À toi de jouer</p>
          <span className="text-purple-200">
            {currentPlayer.name.toUpperCase()}
          </span>
        </Typography>
      ) : (
        <ResultMultiplayer players={players} />
      )}
      <div className="flex justify-around">
        <Typography>
          <p className="text-primary">{players[0].name.toUpperCase()}</p>
          <p className="text-center">{players[0].score}</p>
        </Typography>
        <Typography>
          <p className="text-secondary">{players[1].name.toUpperCase()}</p>
          <p className="text-center">{players[1].score}</p>
        </Typography>
      </div>
    </div>
  );
};
