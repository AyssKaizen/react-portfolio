import { useRef, useReducer } from "react";

export const useCanvas = () => {
  const canvas = useRef(null);
  const reducer = (state, action) => {
    switch (action.type) {
      case "changeColor": {
        return {
          color: action.value,
          size: state.size,
        };
      }
      case "changeSize": {
        return {
          color: state.color,
          size: action.value,
        };
      }
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, { color: "#000000", size: 4 });
  const changeColor = (color) => {
    dispatch({ type: "changeColor", value: color });
    const context = canvas.current.getContext("2d");
    if (!context) return;
    context.strokeStyle = color;
  };

  const changeSize = (size) => {
    dispatch({ type: "changeSize", value: size });
    const context = canvas.current.getContext("2d");
    if (!context) return;
    context.lineWidth = size;
  };

  const resetCanvas = () => {
    canvas.current
      .getContext("2d")
      .clearRect(0, 0, canvas.current.width, canvas.current.height);
  };

  const saveDrawing = () => {
    const data = canvas.current.toDataURL();
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = data;
    link.click();
  };
  return { state, changeColor, changeSize, resetCanvas, canvas, saveDrawing };
};
