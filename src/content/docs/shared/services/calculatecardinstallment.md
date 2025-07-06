---
title: calculateCardInstallment
description: Calcula o valor da parcela e o preço total para um plano de pagamento com cartão.
---

A função `calculateCardInstallment` calcula o preço total e o valor de cada parcela para um plano de pagamento com juros.

## Parâmetros

A função aceita um objeto `props` com os seguintes campos:

**`cashPrice`**

- **Tipo**: `number`
- **Descrição**: O preço total à vista do produto ou serviço.
- **Obrigatório**: Sim

**`numberInstallments`**

- **Tipo**: `number`
- **Descrição**: O número de parcelas do plano de pagamento.
- **Obrigatório**: Sim

**`fees`** (opcional)

- **Tipo**: `number`
- **Descrição**: A taxa de juros por parcela.
- **Padrão**: `0.0349` (3.49%)

## Retorno

A função retorna um objeto contendo:

- **`totalPrice`**: O preço total a ser pago, arredondado para duas casas decimais.
- **`installmentPrice`**: O valor de cada parcela, arredondado para duas casas decimais.

## Observações

- **Sem Juros**: Se a taxa de juros (`fees`) for `0` ou o número de parcelas (`numberInstallments`) for `1`, não serão cobrados juros.

## Erros

A função pode gerar os seguintes erros:

- `Error("Number of installments must be greater than 0")`: Se o número de parcelas for menor ou igual a 0.
- `Error("Fees must be greater than or equal to 0")`: Se a taxa de juros for menor que 0.

## Exemplo de Uso

```javascript
import { calculateCardInstallment } from "./calculateCardInstallment";

const resultado = calculateCardInstallment({
  cashPrice: 1000,
  numberInstallments: 12,
  fees: 0.02, // 2% de juros
});

console.log(resultado);
// Saída: { totalPrice: 1124.62, installmentPrice: 93.72 }
```
