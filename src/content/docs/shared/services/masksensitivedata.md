---
title: maskSensitiveData
description: Mascara dados sensíveis em uma string JSON, substituindo os valores de chaves especificadas por '****'.
---

A função `maskSensitiveData` processa uma string JSON e mascara os valores associados a chaves sensíveis, substituindo-os por `****`.

## Importação

```ts
import { maskSensitiveData } from "@arkyn/shared";
```

## Parâmetros

A função aceita os seguintes parâmetros:

**`jsonString`**

- **Tipo**: `string`
- **Descrição**: A string JSON a ser processada.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`sensitiveKeys`** (opcional)

- **Tipo**: `string[]`
- **Descrição**: Um array de chaves cujos valores devem ser mascarados.
- **Padrão**: `["password", "confirmPassword", "creditCard"]`

## Retorno

A função retorna uma `string` JSON com os dados sensíveis mascarados. Se a string de entrada não for um JSON válido, a função retorna a string original.

## Exemplo de Uso

```javascript
import { maskSensitiveData } from "./maskSensitiveData";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret",
  profile: {
    creditCard: "1234-5678-9012-3456",
  },
});

const resultado = maskSensitiveData(jsonString, ["password", "creditCard"]);

console.log(resultado);
// Saída: '{"username":"user123","password":"****","profile":{"creditCard":"****"}}'
```
