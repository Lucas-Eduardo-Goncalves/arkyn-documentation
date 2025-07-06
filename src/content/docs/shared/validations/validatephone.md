---
title: validatePhone
description: Valida um número de telefone com base em formatos de países.
---

## Descrição

A função `validatePhone` verifica se um número de telefone corresponde a um formato de país predefinido. Ela itera por uma lista de países e utiliza expressões regulares para validar o número com base no código do país, prefixo e máscara.

Um tratamento especial é aplicado para números de telefone brasileiros (código ISO "BR"), que permite um nono dígito opcional.

## Parâmetros

-   **rawPhone** (`string`): O número de telefone a ser validado.

## Retorno

-   **(`boolean`)**: Retorna `true` se o número de telefone corresponder a qualquer formato de país, caso contrário, retorna `false`.

## Exemplo de Uso

```ts
import { validatePhone } from "./validatePhone";

validatePhone("+55 32912345678"); // true (válido para o Brasil)
validatePhone("+1-684 1234567"); // true (válido para Samoa Americana)
validatePhone("+55 1234567890"); // false (inválido para o Brasil)
```
