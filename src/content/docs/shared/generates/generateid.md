---
title: generateId
description: Gera um identificador único (UUID) no formato e tipo especificados.
---

A função `generateId` gera um Identificador Único Universal (UUID) e o retorna no formato e tipo solicitados.

## Parâmetros

A função aceita os seguintes parâmetros:

**`type`**

- **Tipo**: `"text" | "binary"`
- **Descrição**: O tipo de saída desejado para o UUID.
  - `"text"`: Retorna o UUID como uma string.
  - `"binary"`: Retorna o UUID como um `Uint8Array` em formato binário.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`format`**

- **Tipo**: `"v4" | "v7"`
- **Descrição**: A versão do UUID a ser gerada.
  - `"v4"`: Gera um UUID aleatório (versão 4).
  - `"v7"`: Gera um UUID ordenado por tempo (versão 7).
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna o UUID gerado no tipo e formato especificados:

- Se `type` for `"text"`, retorna uma `string`.
- Se `type` for `"binary"`, retorna um `Uint8Array`.

## Erros

A função pode gerar o seguinte erro:

- `Error("Invalid type or format")`: Se um `type` ou `format` inválido for fornecido.

## Exemplo de Uso

### Exemplo 1: Gerar um UUID v4 como Texto

```javascript
import { generateId } from "./generateId";

const idTextV4 = generateId("text", "v4");
console.log(idTextV4); // Ex: "550e8400-e29b-41d4-a716-446655440000"
```

### Exemplo 2: Gerar um UUID v7 como Binário

```javascript
import { generateId } from "./generateId";

const idBinaryV7 = generateId("binary", "v7");
console.log(idBinaryV7); // Saída: Uint8Array([...])
```
