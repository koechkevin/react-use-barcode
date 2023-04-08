type BarcodeOptions = {
  width: number;
  height: number;
} & Options;

export declare const useBarcode: (
  value: string,
  options: BarcodeOptions
) => string | undefined;
