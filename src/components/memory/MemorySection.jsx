import { Button } from "../atom/Button";
import { SectionWrapper } from "../atom/SectionWrapper";
import { MemoryBoard } from "./MemoryBoard";
import { MemoryContextProvider, useMemoryCtx } from "./MemoryProvider";

export const MemorySection = () => {
  return (
    <SectionWrapper title="Testez votre mémoire en jouant au Memory seul ou affrontez un ami !">
      <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
            <MemoryBoard />
            <ResetButton />
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};
const ResetButton = () => {
  const { reset } = useMemoryCtx();
  return <Button onClick={reset}>Réinitialiser le plateau</Button>;
};
