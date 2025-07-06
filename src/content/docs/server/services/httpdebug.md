---
title: httpDebug
description: Registra informações de depuração no console em modo de desenvolvimento.
---

## Descrição

A função `httpDebug` registra informações detalhadas no console, mas apenas quando a aplicação está em modo de desenvolvimento (`NODE_ENV === "development"`) ou quando a variável de ambiente `SHOW_ERRORS_IN_CONSOLE` está definida como `"true"`.

## Parâmetros

- **name** (`string`): Um nome ou contexto para o log de depuração.
- **body** (`any`): O conteúdo principal ou dados a serem registrados.
- **cause** (`any`, opcional): Informações adicionais ou causa do erro a ser registrada.
