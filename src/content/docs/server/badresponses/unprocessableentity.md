---
title: UnprocessableEntity
description: Representa uma resposta de erro HTTP com status 422 (Unprocessable Entity).
---

A classe `UnprocessableEntity` é usada para padronizar a estrutura de uma resposta de erro "Unprocessable Entity".

## Importação

```ts
import { UnprocessableEntity } from "@arkyn/server";
```

## Construtor

- **props** (`UnprocessableEntityProps`): Um objeto contendo detalhes sobre o erro.
  - `data` (`any`, opcional): Dados adicionais relacionados ao erro.
  - `fieldErrors` (`Record<string, string>`, opcional): Um registro de mensagens de erro específicas do campo.
  - `fields` (`Record<string, string>`, opcional): Um registro de valores de campo que causaram o erro.
  - `message` (`string`, opcional): Uma mensagem descritiva explicando o erro.
- **enableDebug** (`boolean`, opcional): Um booleano que indica se o log de depuração deve ser ativado para este erro.
