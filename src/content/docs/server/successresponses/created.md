---
title: Created
description: Representa uma resposta HTTP de sucesso com status 201 (Created).
---

## Descrição

A classe `Created` é usada para padronizar a estrutura de uma resposta "Created", incluindo o corpo da resposta, cabeçalhos, status e texto de status.

## Genéricos

- **T**: O tipo do corpo da resposta.

## Construtor

- **body** (`T`): O corpo da resposta a ser incluído na resposta HTTP.
- **init** (`ResponseInit`, opcional): Objeto de inicialização opcional para personalizar cabeçalhos, status e texto de status.

## Métodos

### `toResponse()`

Converte a instância `Created` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`
