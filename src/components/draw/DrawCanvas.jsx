import { useEffect, useRef } from "react";
import { getCoordinates } from "../../lib/canvas";

// Draw exercise
export const DrawCanvas = ({ canvas }) => {
  const isDrawing = useRef(false);
  const lastCoordinate = useRef(null);

  const startDrawing = (event) => {
    isDrawing.current = true;
    lastCoordinate.current = getCoordinates(event, canvas.current);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const draw = (event) => {
    if (!isDrawing.current) return;

    const ctx = canvas.current.getContext("2d");
    const coordinates = getCoordinates(event, canvas.current);
    if (!ctx || !coordinates) return;

    if (lastCoordinate.current) {
      // create a rounded corner where two lines meet and rounded end of line.
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(lastCoordinate.current.x, lastCoordinate.current.y);
      ctx.lineTo(coordinates.x, coordinates.y);
      // draw the current path
      ctx.stroke();
    }
    lastCoordinate.current = coordinates;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      stopDrawing();
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseMove={draw}
      width={660}
      height={415}
      ref={canvas}
      className="m-auto bg-white rounded-md shadow-md"
    />
  );
};
