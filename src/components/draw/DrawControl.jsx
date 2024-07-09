// Draw exercise
export const DrawControl = ({
  changeColor,
  changeSize,
  defaultColor,
  defaultSize,
}) => {
  return (
    <div>
      <label
        htmlFor="draw-color-picker"
        className="flex items-center justify-center gap-4"
      >
        Couleur
        <input
          id="draw-color-picker"
          type="color"
          onChange={(e) => {
            changeColor(e.target.value);
          }}
          defaultValue={defaultColor}
        />
      </label>
      <label
        htmlFor="draw-size-picker"
        className="flex items-center justify-center gap-4"
      >
        épaisseur du crayon
        <input
          id="draw-size-picker"
          type="range"
          min="2"
          max="32"
          step="2"
          onChange={(e) => {
            changeSize(e.target.value);
          }}
          defaultValue={defaultSize}
        />
      </label>
    </div>
  );
};
