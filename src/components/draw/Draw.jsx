import { Button } from "../atom/Button";
import { DrawCanvas } from "./DrawCanvas";
import { DrawControl } from "./DrawControl";
import { useCanvas } from "./useCanvas";

// Draw exercise
export const Draw = () => {
  const { changeColor, changeSize, state, canvas, resetCanvas, saveDrawing } =
    useCanvas();

  return (
    <div className="flex flex-col gap-8">
      <DrawCanvas canvas={canvas} />
      <DrawControl
        divefaultColor={state.color}
        defaultSize={state.size}
        changeColor={changeColor}
        changeSize={changeSize}
      />
      <div className="flex gap-4 m-auto">
        <Button onClick={resetCanvas}>Réinitialiser</Button>
        <Button onClick={saveDrawing}>Enregister</Button>
      </div>
    </div>
  );
};
