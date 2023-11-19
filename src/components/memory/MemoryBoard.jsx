import { Typography } from "../atom/Typography";
import { useMemoryCtx } from "./MemoryProvider";
import { MemoryCard } from "./MemoryCard";
import { Switch } from "../atom/Switch";
import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";
import { TryCount } from "../TryCount";
import { PlayersGround } from "../PlayersGround";
export const MemoryBoard = () => {
  const {
    cards,
    returnCard,
    handleClickMultiplayer,
    isMultiplayer,
    setIsMultiplayer,
    players,
    setPlayers,
    isMultiplayerGameIsReady,
  } = useMemoryCtx();

  const gameAllowed = () => {
    if (!isMultiplayer) return true;
    if (isMultiplayer && isMultiplayerGameIsReady) return true;
    return false;
  };

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <>
      <TryCount />
      <Switch value={isMultiplayer} setValue={setIsMultiplayer} />
      {isMultiplayer && (
        <div>
          {!gameAllowed() && (
            <form
              onSubmit={handleClickMultiplayer}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-paper dark:border-gray-700"
            >
              <Typography className="mb-5 text-center">
                Entrez les noms des joueurs
              </Typography>
              <div className="flex">
                <div className="mr-4">
                  <TextField
                    label="Joueur 1"
                    onChange={(e) => {
                      setPlayers([
                        { ...players[0], name: e.target.value },
                        players[1],
                      ]);
                    }}
                    name="player1"
                  />
                </div>
                <div>
                  <TextField
                    name="player2"
                    onChange={(e) =>
                      setPlayers([
                        players[0],
                        { ...players[1], name: e.target.value },
                      ])
                    }
                    label="Joueur 2"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <Button
                  disabled={players[0]?.name === "" || players[1]?.name === ""}
                  type="submit"
                  style={{ padding: 8 }}
                >
                  Valider
                </Button>
              </div>
            </form>
          )}
          {isMultiplayer && isMultiplayerGameIsReady && (
            <PlayersGround players={players} />
          )}
        </div>
      )}
      <div className="grid grid-cols-6 grid-rows-6 gap-5 w-max">
        {gameAllowed() &&
          cards.map((card) => (
            <MemoryCard
              key={card.id}
              card={card}
              onClick={() => returnCard(card)}
            >
              {card.emoji}
            </MemoryCard>
          ))}
      </div>
    </>
  );
};
