import { Typography } from "./atom/Typography";
import { useMemoryCtx } from "./memory/MemoryProvider";

export const TryCount = () => {
  const { tryCount, isFinish } = useMemoryCtx();
  if (isFinish)
    return (
      <Typography variant="h3">
        Well done ! you finished in {tryCount} tries
      </Typography>
    );
  return <Typography>You tried {tryCount} time(s)</Typography>;
};
