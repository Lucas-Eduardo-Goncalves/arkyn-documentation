---
title: formatToDate
description: Converte uma string de data e hora em um objeto Date do JavaScript.
---

A função `formatToDate` converte uma string de data (com hora opcional) de vários formatos para um objeto `Date` do JavaScript, aplicando um ajuste de fuso horário.

## Parâmetros

A função aceita os seguintes parâmetros:

**`dateTime`**

- **Tipo**: `[string, string?]`
- **Descrição**: Um array contendo a string de data e, opcionalmente, a string de hora. A hora padrão é "00:00:00".
- **Obrigatório**: Sim
- **Padrão**: N/A

**`inputFormat`**

- **Tipo**: `"brazilianDate" | "isoDate" | "timestamp"`
- **Descrição**: O formato da string de data de entrada.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`timezone`** (opcional)

- **Tipo**: `number`
- **Descrição**: O deslocamento de fuso horário em horas. O padrão é `0` (UTC).
- **Obrigatório**: Não
- **Padrão**: `0`

### Tipos de Formato de Entrada (`inputFormat`)

- **`brazilianDate`**: Espera a data no formato `DD/MM/YYYY`.
- **`isoDate`**: Espera a data no formato `YYYY-MM-DD`.
- **`timestamp`**: Espera a data no formato `YYYY-MM-DD`.

## Retorno

A função retorna um objeto `Date` do JavaScript representando a data e hora analisadas, ajustadas para o fuso horário especificado.

## Erros

A função pode gerar os seguintes erros:

- `Error("Invalid input format")`: Se o `inputFormat` fornecido for inválido.
- `Error("Invalid date")`: Se a data ou hora fornecida for inválida.

## Exemplo de Uso

### Exemplo 1: Converter Data Brasileira com Fuso Horário

```javascript
import { formatToDate } from "./formatToDate";

// Converte a data para um objeto Date, considerando o fuso horário UTC-3
const date = formatToDate(["25/12/2023", "15:30:00"], "brazilianDate", -3);

console.log(date.toISOString());
// Saída: "2023-12-25T18:30:00.000Z"
```

### Exemplo 2: Converter Data ISO (UTC)

```javascript
import { formatToDate } from "./formatToDate";

const date = formatToDate(["2023-12-25"], "isoDate");

console.log(date.toISOString());
// Saída: "2023-12-25T00:00:00.000Z"
```
