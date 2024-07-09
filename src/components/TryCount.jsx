import { Typography } from "./atom/Typography";
import { useMemoryCtx } from "./memory/MemoryProvider";

export const TryCount = () => {
  const { tryCount, isFinish } = useMemoryCtx();
  if (isFinish)
    return (
      <Typography variant="h3">
        Bien joué ! tu as finis le jeu en {tryCount} essais
      </Typography>
    );
  return <Typography>Vous avez fait {tryCount} essais</Typography>;
};
