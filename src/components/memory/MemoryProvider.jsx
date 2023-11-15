import { createContext, useContext, useState, useMemo } from "react";
import {
  getInitialMemory,
  isMemoryFinished,
  isPairCards,
} from "../../lib/memory";
import { CARD_STATE } from "../../lib/memory";

const MemoryContext = createContext(null);

export const useMemoryCtx = () => {
  const ctx = useContext(MemoryContext);
  if (!ctx) {
    throw new Error("useMemory must be called in MemoryProvider");
  }
  return ctx;
};

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory());
  const [tryCount, setTryCount] = useState(0);
  const [isMultiplayer, setIsMultiplayer] = useState(false);
  const [isMultiplayerGameIsReady, setIsMultiplayerGameIsReady] =
    useState(false);
  const [players, setPlayers] = useState([
    { id: 0, name: "", score: 0, active: false },
    { id: 1, name: "", score: 0, active: false },
  ]);

  const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);
  // methods
  const handleClickMultiplayer = (e) => {
    e.preventDefault();
    setIsMultiplayerGameIsReady(true);
    setPlayers((curr) => [{ ...curr[0], active: true }, curr[1]]);
    setTryCount(0);
    setCards(() => getInitialMemory());
  };
  const reset = () => {
    setTryCount(0);
    setCards(() => getInitialMemory());
    setPlayers([
      { id: 0, name: "", score: 0, active: false },
      { id: 1, name: "", score: 0, active: false },
    ]);
    setIsMultiplayerGameIsReady(false);
  };
  const returnCard = (returnedCard) => {
    // if the card is already returned do nothing
    if (returnedCard.state !== CARD_STATE.HIDE) {
      return;
    }
    // whitch cards are already returned
    let currentReturnedCards = cards.filter(
      (card) => card.state === CARD_STATE.RETURNED
    );
    if (
      currentReturnedCards.length === 2 ||
      currentReturnedCards.includes(returnedCard)
    ) {
      return;
    }
    // return card
    setCards((curr) =>
      curr.map((card) => {
        if (card.id === returnedCard.id) {
          card.state = CARD_STATE.RETURNED;
        }
        return card;
      })
    );
    if (currentReturnedCards.length === 0) {
      return;
    }
    currentReturnedCards.push(returnedCard);
    computeReturnedCards(currentReturnedCards);
  };

  const computeReturnedCards = (currentReturnedCards) => {
    const activePlayer = players.find((player) => player.active === true);

    const isPair = isPairCards(
      currentReturnedCards[0],
      currentReturnedCards[1]
    );
    setTimeout(
      () => {
        setTryCount((count) => count + 1);
        setCards((current) =>
          current.map((card) => {
            if (
              card.state === CARD_STATE.RETURNED &&
              currentReturnedCards.includes(card)
            ) {
              card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
            }
            return card;
          })
        );
        if (isPair) {
          activePlayer.score += 1;
          const otherPlayer = players.find(
            (player) => player.id !== activePlayer.id
          );
          if (activePlayer.id === 0) {
            setPlayers([activePlayer, otherPlayer]);
          } else {
            setPlayers([otherPlayer, activePlayer]);
          }
        }
        if (isMultiplayer && !isPair) {
          setPlayers((curr) => [
            { ...curr[0], active: !curr[0].active },
            { ...curr[1], active: !curr[1].active },
          ]);
        }
      },
      isPair ? 400 : 1200
    );
  };
  const values = {
    cards,
    tryCount,
    returnCard,
    reset,
    isFinish,
    handleClickMultiplayer,
    setPlayers,
    players,
    isMultiplayer,
    setIsMultiplayer,
    isMultiplayerGameIsReady,
  };
  return (
    <MemoryContext.Provider value={values}>{children}</MemoryContext.Provider>
  );
};
