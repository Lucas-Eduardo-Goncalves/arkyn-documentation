---
title: NotImplemented
description: Representa uma resposta de erro HTTP com status 501 (Not Implemented).
---

## Descrição

A classe `NotImplemented` é usada para padronizar a estrutura de uma resposta de erro "Not Implemented".

## Construtor

- **message** (`string`): Uma mensagem descritiva explicando por que a funcionalidade não está implementada.
- **cause** (`any`, opcional): Informações adicionais sobre a causa do erro.

## Métodos

### `toResponse()`

Converte a instância `NotImplemented` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`
