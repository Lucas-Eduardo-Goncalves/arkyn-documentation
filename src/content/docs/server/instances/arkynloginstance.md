---
title: ArkynLogInstance
description: A classe ArkynLogInstance gerencia a configuração para o fluxo de logs da Arkyn.
---

## Descrição

A classe `ArkynLogInstance` permite definir e recuperar a configuração dos logs da Arkyn, incluindo o ID da fonte de tráfego, o token do usuário e a URL da API.

## Métodos

### `setArkynConfig`

Define a configuração para os logs. Este método inicializa a configuração com os valores fornecidos. Se a configuração já tiver sido definida, o método retornará sem fazer alterações.

- **Parâmetros**:
  - `arkynConfig` (`SetArkynConfigProps`): Um objeto contendo as propriedades de configuração.
    - `arkynTrafficSourceId` (`string`): A chave usada para identificar a fonte de tráfego.
    - `arkynUserToken` (`string`): O token do usuário para autenticação.
    - `arkynLogBaseApiUrl` (`string`, opcional): A URL da API para os logs. Se não for fornecida, uma URL padrão será usada.

### `getArkynConfig()`

Recupera a configuração atual dos logs.

- **Retorno**: `ArkynConfigProps | undefined` - A configuração atual, ou `undefined` se nenhuma configuração tiver sido inicializada.

### `resetArkynConfig()`

Redefine a configuração dos logs para `undefined`.
