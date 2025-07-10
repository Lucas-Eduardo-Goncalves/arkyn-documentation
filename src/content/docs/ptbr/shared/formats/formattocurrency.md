---
title: formatToCurrency
description: Formata um valor numérico em uma string de moeda com base na moeda e configuração especificadas.
---

A função `formatToCurrency` formata um valor numérico para uma string de moeda, permitindo a especificação da moeda e a opção de exibir ou não o prefixo do símbolo da moeda.

## Importação

```ts
import { formatToCurrency } from "@arkyn/shared";
```

## Parâmetros

A função aceita os seguintes parâmetros:

**`value`**

- **Tipo**: `number`
- **Descrição**: O valor numérico a ser formatado.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`currency`**

- **Tipo**: `string`
- **Descrição**: O código da moeda para determinar o estilo de formatação (ex: "USD", "BRL").
- **Obrigatório**: Sim
- **Padrão**: N/A

**`config`** (opcional)

- **Tipo**: `object`
- **Descrição**: Um objeto de configuração.
- **Propriedades**:
  - `showPrefix` (opcional): `boolean` - Determina se o símbolo/prefixo da moeda deve ser incluído. O padrão é `true`.

## Retorno

A função retorna uma `string` com a moeda formatada. Se `config.showPrefix` for `false`, o símbolo da moeda é removido.

## Erros

A função pode gerar o seguinte erro:

- `Error("Unsupported currency code")`: Se o código da moeda fornecido não for suportado.

## Exemplo de Uso

### Exemplo 1: Formatar para Dólar Americano (USD)

```javascript
import { formatToCurrency } from "./formatToCurrency";

// Com prefixo
const formattedUSD = formatToCurrency(1234.56, "USD");
console.log(formattedUSD); // Saída: "$1,234.56"

// Sem prefixo
const withoutPrefixUSD = formatToCurrency(1234.56, "USD", {
  showPrefix: false,
});
console.log(withoutPrefixUSD); // Saída: "1,234.56"
```

### Exemplo 2: Formatar para Real Brasileiro (BRL)

```javascript
import { formatToCurrency } from "./formatToCurrency";

// Com prefixo
const formattedBRL = formatToCurrency(1234.56, "BRL");
console.log(formattedBRL); // Saída: "R$ 1.234,56"

// Sem prefixo
const withoutPrefixBRL = formatToCurrency(1234.56, "BRL", {
  showPrefix: false,
});
console.log(withoutPrefixBRL); // Saída: "1.234,56"
```
