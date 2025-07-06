---
title: Found
description: Representa uma resposta HTTP 302 Found.
---

## Descrição

A classe `Found` é usada para criar uma resposta HTTP padronizada com status 302 (Found), incluindo cabeçalhos opcionais e um corpo de resposta.

## Genéricos

- **T**: O tipo do corpo da resposta.

## Construtor

- **body** (`T`): O corpo da resposta.
- **init** (`ResponseInit`, opcional): Objeto de inicialização opcional para definir cabeçalhos, status e texto de status.

## Métodos

### `toResponse()`

Converte a instância `Found` em um objeto `Response`.

- **Retorno**: `Response`
