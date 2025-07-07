---
title: BadGateway
description: Representa uma resposta de erro HTTP com status 502 (Bad Gateway).
---

A classe `BadGateway` é usada para padronizar a estrutura de uma resposta de erro "Bad Gateway", incluindo o corpo da resposta, cabeçalhos, status e texto de status.

## Importação

```ts
import { BadGateway } from "@arkyn/server";
```

## Construtor

- **message** (`string`): Uma mensagem descritiva explicando a causa do erro.
- **cause** (`any`, opcional): Informações adicionais sobre a causa do erro.

## Métodos

### `toResponse()`

Converte a instância `BadGateway` em um objeto `Response` com um corpo JSON. Este método garante que a resposta tenha os cabeçalhos, status e texto de status apropriados.

- **Retorno**: `Response`

### `toJson()`

Converte a instância `BadGateway` em um objeto `Response` usando o método `Response.json`. Este método é uma alternativa ao `toResponse` para gerar respostas de erro JSON.

- **Retorno**: `Response`
