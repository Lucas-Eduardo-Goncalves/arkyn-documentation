# calculateCardInstallment

The `calculateCardInstallment` function is a utility for calculating installment payments for card transactions with interest rates. This function computes both the individual installment price and the total price including interest, using compound interest calculation methods commonly used in credit card payment plans.

## Import

```ts
import { calculateCardInstallment } from "@arkyn/shared";
```

## Parameters

The function accepts an object with the following properties:

### `cashPrice` (required)

The total cash price of the product or service before any interest is applied. This represents the base amount that will be divided into installments.

**Type:** `number`

### `numberInstallments` (required)

The number of installments for the payment plan. Must be greater than 0. When set to 1, no interest is charged regardless of the fees value.

**Type:** `number`

### `fees` (optional)

The interest rate per installment, expressed as a decimal. For example, 0.0349 represents 3.49% interest per installment. When set to 0 or when `numberInstallments` is 1, no interest is charged.

**Type:** `number`  
**Default:** `0.0349` (3.49%)

## Usage example

The function returns an object containing two properties:

- `totalPrice`: The total price to be paid including all interest, rounded to two decimal places.
- `installmentPrice`: The price of each individual installment, rounded to two decimal places.

**Type:** `{ totalPrice: number; installmentPrice: number }`

```typescript
import { calculateCardInstallment } from "@arkyn/shared";

const result = calculateCardInstallment({
  cashPrice: 1000,
  numberInstallments: 12,
});

console.log(result);
// Output: { totalPrice: 1202.64, installmentPrice: 100.22 }
```

## Errors

The function performs validation and may throw errors in the following scenarios:

**Invalid number of installments:** An error is thrown when `numberInstallments` is less than or equal to 0. The error message is "Number of installments must be greater than 0".

**Invalid fees:** An error is thrown when `fees` is less than 0. The error message is "Fees must be greater than or equal to 0".

## Notes

When the interest amount (`fees`) is equal to 0 or the number of installments (`numberInstallments`) is equal to 1, no interest will be charged. In these cases, the cash price is simply divided by the number of installments.

The function uses the compound interest formula for installment calculations: `PMT = PV × (i × (1 + i)^n) / ((1 + i)^n - 1)`, where PMT is the installment payment, PV is the present value (cash price), i is the interest rate, and n is the number of installments.

All monetary values are rounded to two decimal places to match standard currency precision.

The calculation method is commonly used by financial institutions for credit card payment plans and consumer financing.
