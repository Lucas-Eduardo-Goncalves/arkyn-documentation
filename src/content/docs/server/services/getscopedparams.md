---
title: getScopedParams
description: Extrai parâmetros de URL de uma requisição, opcionalmente dentro de um escopo.
---

## Descrição

A função `getScopedParams` analisa a URL de uma `Request` e retorna um objeto `URLSearchParams`. Se um `scope` for fornecido, ela extrai apenas os parâmetros que pertencem a esse escopo (prefixados com `scope[key]`).

## Parâmetros

- **request** (`Request`): O objeto de requisição.
- **scope** (`string`, opcional): O escopo para filtrar os parâmetros.

## Retorno

- **(`URLSearchParams`)**: Um objeto `URLSearchParams` contendo os parâmetros filtrados.
