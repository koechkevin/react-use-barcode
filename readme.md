# react-use-barcode

A React hook for generating barcode images.

## Installation

```sh
npm install react-use-barcode
```

## Usage

To use the useBarcode hook, simply import it into your component and call it with the value and options parameters:

```ts
import { useBarcode, BarcodeOptions } from 'react-use-barcode';

const MyComponent = () => {
  const options: BarcodeOptions = { height: 50, width: 3 };
  const barcode = useBarcode('123456789', options);

  return (
    <img src={barcode} alt="Barcode" />
  );
};
```

The `useBarcode` hook takes two parameters:

`value`: the value to be encoded as a barcode (required).
`options`: an object containing options for the barcode generation (optional)
The options parameter is an object with two properties:

`height`: the height of the barcode image.
`width`: the width of the barcode image.
any option passed to [JSBarcode](https://www.npmjs.com/package/jsbarcode)

The `useBarcode` hook returns a base64-encoded string representing the barcode image, or undefined if the image has not yet been generated.

## Example

Here's an example of how to use the useBarcode hook in a component:

```typescript
import { useBarcode, BarcodeOptions } from 'react-use-barcode';

const MyComponent = () => {
  const options: BarcodeOptions = { height: 50, width: 3 };
  const barcode = useBarcode('123456789', options);

  return (
    <img src={barcode} alt="Barcode" />
  );
};
```
