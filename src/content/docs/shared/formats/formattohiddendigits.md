---
title: formatToHiddenDigits
description: Oculta dígitos específicos em uma string dentro de um determinado intervalo.
---

A função `formatToHiddenDigits` formata uma string substituindo dígitos dentro de um intervalo especificado por um caractere de ocultação, como `*`.

## Parâmetros

A função aceita os seguintes parâmetros:

**`value`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser formatada.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`options`**

- **Tipo**: `object`
- **Descrição**: Objeto de configuração para a formatação.
- **Obrigatório**: Sim
- **Padrão**: N/A
- **Propriedades**:
  - **`range`** (opcional)
    - **Tipo**: `number | [number, number]`
    - **Descrição**: O intervalo de dígitos a serem ocultados.
      - Um número positivo (`n`): oculta os primeiros `n` dígitos.
      - Um número negativo (`-n`): oculta os últimos `n` dígitos.
      - Uma tupla `[inicio, fim]`: oculta os dígitos do `inicio` ao `fim` (inclusivo).
    - **Padrão**: `3` (oculta os três primeiros dígitos).
  - **`hider`** (opcional)
    - **Tipo**: `string`
    - **Descrição**: O caractere usado para ocultar os dígitos.
    - **Padrão**: `*`

## Retorno

A função retorna uma `string` com os dígitos especificados ocultos.

## Exemplo de Uso

### Exemplo 1: Ocultar os Primeiros Dígitos (Padrão)

```javascript
import { formatToHiddenDigits } from "./formatToHiddenDigits";

const resultado = formatToHiddenDigits("123-456-7890", { range: 3 });
console.log(resultado); // Saída: "***-456-7890"
```

### Exemplo 2: Ocultar um Intervalo Específico com Caractere Personalizado

```javascript
import { formatToHiddenDigits } from "./formatToHiddenDigits";

const resultado = formatToHiddenDigits("123-456-7890", {
  range: [4, 6],
  hider: "#",
});
console.log(resultado); // Saída: "123-###-7890"
```

### Exemplo 3: Ocultar os Últimos Dígitos

```javascript
import { formatToHiddenDigits } from "./formatToHiddenDigits";

const resultado = formatToHiddenDigits("123-456-7890", { range: -4 });
console.log(resultado); // Saída: "123-456-****"
```
