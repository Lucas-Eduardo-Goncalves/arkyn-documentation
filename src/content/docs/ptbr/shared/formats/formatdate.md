---
title: formatDate
description: Formats a date and time based on the given input and output formats, with optional time zone support.
---

A função `formatDate` é uma ferramenta versátil para converter e formatar strings de data e hora de vários formatos de entrada para um formato de saída personalizável.

## Importação

```ts
import { formatDate } from "@arkyn/shared";
```

## Parâmetros

A função aceita os seguintes parâmetros:

**`dateTime`**

- **Tipo**: `[string, string?]`
- **Descrição**: Um array contendo a data e, opcionalmente, a hora. O primeiro elemento é a data e o segundo é a hora.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`inputFormat`**

- **Tipo**: `"brazilianDate" | "isoDate" | "timestamp"`
- **Descrição**: O formato da data de entrada.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`outputFormat`**

- **Tipo**: `string`
- **Descrição**: O formato de saída desejado para a data.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`timezone`**

- **Tipo**: `number`
- **Descrição**: O deslocamento de fuso horário em horas a ser aplicado à data.
- **Obrigatório**: Não
- **Padrão**: `0` (UTC)

### Tipos de Formato de Entrada (`inputFormat`)

- **`brazilianDate`**: Espera a data no formato `DD/MM/YYYY`.
- **`isoDate`**: Espera a data no formato `YYYY-MM-DD`.
- **`timestamp`**: Espera a data no formato `YYYY/MM/DD`.

### Formato de Saída (`outputFormat`)

Você pode construir a string `outputFormat` usando os seguintes marcadores:

- `YYYY`: Ano com 4 dígitos (ex: 2023)
- `YY`: Ano com 2 dígitos (ex: 23)
- `MM`: Mês com 2 dígitos (01-12)
- `DD`: Dia com 2 dígitos (01-31)
- `hh`: Hora com 2 dígitos (00-23)
- `mm`: Minuto com 2 dígitos (00-59)
- `ss`: Segundo com 2 dígitos (00-59)

## Retorno

A função retorna uma `string` com a data formatada de acordo com a string `outputFormat`.

## Erros

A função pode gerar os seguintes erros:

- `Error("Invalid input format")`: Se o `inputFormat` fornecido não for um dos valores esperados.

- `Error("Invalid date")`: Se a string de data fornecida não puder ser convertida em uma data válida.

## Exemplos de Uso

### Exemplo 1: Converter Data Brasileira para Formato ISO

```javascript
import { formatDate } from "./formatDate";

const formatted = formatDate(
  ["25/12/2023", "15:30:00"],
  "brazilianDate",
  "YYYY-MM-DD hh:mm:ss"
);

console.log(formatted); // Saída: "2023-12-25 15:30:00"
```

### Exemplo 2: Converter Data ISO com Ajuste de Fuso Horário

```javascript
import { formatDate } from "./formatDate";

const formatted = formatDate(
  ["2023-12-25", "15:30:00"],
  "isoDate",
  "DD/MM/YYYY hh:mm:ss",
  -3 // Ajuste para UTC-3
);

console.log(formatted);
// Saída: "2023-12-25 12:30:00"
```

### Exemplo 3: Usando Apenas a Data

Se nenhuma hora for fornecida, o padrão é "00:00:00".

```javascript
import { formatDate } from "./formatDate";

const formatted = formatDate(["2024-01-05"], "isoDate", "DD/MM/YYYY");

console.log(formatted);
// Saída: "05/01/2024"
```
