import { createCanvas, Canvas } from "canvas";
import JsBarcode, { Options } from "jsbarcode";
import { useState, useEffect } from "react";

type BarcodeOptions = {
  width: number;
  height: number;
} & Options;

export const useBarcode = (
  value: string,
  options: BarcodeOptions
): string | undefined => {
  const [img, setImg] = useState<string>();
  const { height, width } = options;
  useEffect(() => {
    let canvas: Canvas = createCanvas(width, height);
    JsBarcode(canvas, value, { height: 50, width: 3, displayValue: false });
    const base64String: string = canvas.toDataURL("image/jpeg", 0.5);
    setImg(base64String);
    return () => {
      canvas = null!;
    };
  }, [value]);

  return img;
};
