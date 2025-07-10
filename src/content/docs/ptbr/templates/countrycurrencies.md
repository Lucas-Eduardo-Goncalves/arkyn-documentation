---
title: Moedas por País
description: Documentação sobre o template `countryCurrencies`, que fornece um mapeamento entre códigos de moeda e configurações de localidade.
---

O arquivo `countryCurrencies.ts` exporta um objeto que mapeia códigos de moeda (ISO 4217) para um objeto contendo a localidade (`countryLanguage`) e o código da moeda (`countryCurrency`).

Este template é útil para formatar valores monetários de acordo com as convenções de um país específico, garantindo que a exibição de preços e outros valores seja clara e correta para o usuário.

## Estrutura do Objeto

O objeto `countryCurrencies` tem como chave o código da moeda (e.g., `"BRL"`) e como valor um objeto com a seguinte estrutura:

```typescript
interface CurrencyInfo {
  countryLanguage: string;
  countryCurrency: string;
}
```

- `countryLanguage`: Um código de idioma e país (e.g., `"pt-BR"`) que pode ser usado com a API `Intl.NumberFormat` para formatar números.
- `countryCurrency`: O código da moeda (e.g., `"BRL"`), também usado na formatação.

## Exemplo de Uso

Para formatar um número como moeda brasileira, você pode usar o objeto da seguinte forma:

```typescript
import { countryCurrencies } from "./countryCurrencies";

function formatToBRL(value: number) {
  const { countryLanguage, countryCurrency } = countryCurrencies.BRL;

  return new Intl.NumberFormat(countryLanguage, {
    style: "currency",
    currency: countryCurrency,
  }).format(value);
}

// Exemplo de saída: R$ 1.234,56
console.log(formatToBRL(1234.56));
```

## Exemplo de Objeto (BRL)

```json
{
  "BRL": {
    "countryLanguage": "pt-BR",
    "countryCurrency": "BRL"
  }
}
```
