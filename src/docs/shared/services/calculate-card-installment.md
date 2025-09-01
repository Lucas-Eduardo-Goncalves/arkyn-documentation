# calculateCardInstallment

The `calculateCardInstallment` function calculates the total price and the amount of each installment for a payment plan with interest.

## Import

```ts
import { calculateCardInstallment } from "@arkyn/shared";
```

## Parameters

The function accepts a `props` object with the following fields:

**`cashPrice`**

- **Type**: `number`
- **Description**: The total cash price of the product or service.
- **Required**: Yes

**`numberInstallments`**

- **Type**: `number`
- **Description**: The number of installments in the payment plan. - **Required**: Yes

**`fees`** (optional)

- **Type**: `number`
- **Description**: The interest rate per installment.
- **Default**: `0.0349` (3.49%)

## Return

The function returns an object containing:

- **`totalPrice`**: The total price to be paid, rounded to two decimal places.
- **`installmentPrice`**: The amount of each installment, rounded to two decimal places.

## Notes

- **No Interest**: If the interest rate (`fees`) is `0` or the number of installments (`numberInstallments`) is `1`, no interest will be charged.

## Errors

The function can generate the following errors:

- `Error("Number of installments must be greater than 0")`: If the number of installments is less than or equal to 0.
- `Error("Fees must be greater than or equal to 0")`: If the interest rate is less than 0.

## Usage Example

```javascript
import { calculateCardInstallment } from "./calculateCardInstallment";

const resultado = calculateCardInstallment({
  cashPrice: 1000,
  numberInstallments: 12,
  fees: 0.02, // 2% interest
});

console.log(resultado);
// Output: { totalPrice: 1124.62, installmentPrice: 93.72 }
```
