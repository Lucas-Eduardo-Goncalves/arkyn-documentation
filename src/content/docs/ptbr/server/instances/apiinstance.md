---
title: ApiInstance
description: Classe que representa uma instância de API para lidar com requisições HTTP com configurações base.
---

A classe `ApiInstance` é utilizada para criar uma instância que gerencia requisições HTTP, permitindo a configuração de uma URL base, cabeçalhos e token de autorização que serão utilizados em todas as chamadas.

## Importação

```ts
import { ApiInstance } from "@arkyn/server";
```

## Construtor

- **props** (`ApiInstanceContructorProps`): As propriedades de configuração para a instância da API.
  - `baseUrl` (`string`): A URL base para a API.
  - `baseHeaders` (`HeadersInit`, opcional): Cabeçalhos base para incluir em todas as requisições.
  - `baseToken` (`string | null`, opcional): Token base para autorização.

## Métodos de Requisição

A `ApiInstance` fornece métodos para os verbos HTTP mais comuns. Todos os métodos retornam uma `Promise` que resolve para um objeto `ApiResponseDTO`.

### `get`

Envia uma requisição get para a rota especificada.

- **Parâmetros**:
  - `route` (`string`): A rota da API.
  - `data` (`ApiRequestDataWithoutBodyProps`, opcional): Dados da requisição, incluindo `headers` e `token`.

### `post`

Envia uma requisição post para a rota especificada.

- **Parâmetros**:
  - `route` (`string`): A rota da API.
  - `data` (`ApiRequestDataWithBodyProps`, opcional): Dados da requisição, incluindo `body`, `headers` e `token`.

### `put`

Envia uma requisição put para a rota especificada.

- **Parâmetros**:
  - `route` (`string`): A rota da API.
  - `data` (`ApiRequestDataWithBodyProps`, opcional): Dados da requisição, incluindo `body`, `headers` e `token`.

### `patch`

Envia uma requisição patch para a rota especificada.

- **Parâmetros**:
  - `route` (`string`): A rota da API.
  - `data` (`ApiRequestDataWithBodyProps`, opcional): Dados da requisição, incluindo `body`, `headers` e `token`.

### `delete`

Envia uma requisição delete para a rota especificada.

- **Parâmetros**:
  - `route` (`string`): A rota da API.
  - `data` (`ApiRequestDataWithBodyProps`, opcional): Dados da requisição, incluindo `body`, `headers` e `token`.

## Funcionamento Interno e Padrão de Retorno

Cada método de requisição (`get`, `post`, etc.) da `ApiInstance` utiliza uma função auxiliar correspondente (`getRequest`, `postRequest`, etc.). Essas funções, por sua vez, são invólucros para a função central `makeRequest`, que é responsável por executar a chamada `fetch` e padronizar a resposta.

A função `makeRequest` realiza as seguintes ações:

1.  Configura a requisição `fetch` com o método, URL, cabeçalhos e corpo corretos.
2.  Define o `Content-Type` como `application/json` e serializa o corpo da requisição.
3.  Registra os detalhes da requisição e da resposta para fins de depuração usando `arkynLogRequest`.
4.  Captura erros de rede ou falhas na requisição.
5.  Retorna um objeto padronizado `ApiResponseDTO`.

### Logging com `arkynLogRequest`

A função `makeRequest` utiliza `arkynLogRequest` para enviar dados detalhados sobre cada requisição HTTP para um serviço de logging centralizado. Isso é útil para monitoramento e depuração em ambientes de produção.

A `arkynLogRequest` realiza as seguintes ações:

1.  **Obtém Configuração**: Recupera a URL da API de log e o token de usuário a partir de `ArkynLogInstance`. Se a configuração não estiver disponível, a função não faz nada.
2.  **Ignora Ambiente de Desenvolvimento**: A função não executa em ambiente de desenvolvimento (`process.env.NODE_ENV === "development"`) para evitar o envio de logs desnecessários.
3.  **Coleta e Envio de Dados**: Monta um objeto com informações detalhadas da requisição e o envia via `post` para a API de logs. Os dados coletados incluem:
    - URL, status, método, e protocolo (HTTP/HTTPS).
    - Tempo de resposta (`elapsedTime`).
    - Cabeçalhos e corpo da requisição e da resposta.
    - Parâmetros de consulta (`queryParams`).

Essa funcionalidade permite um rastreamento completo do ciclo de vida de cada requisição, facilitando a identificação de problemas e a análise de performance.

### O objeto `ApiResponseDTO`

Todos os métodos de requisição retornam uma `Promise` que resolve com um objeto `ApiResponseDTO<T>`, que possui a seguinte estrutura:

- **`success`** (`boolean`): `true` se a requisição foi bem-sucedida (status HTTP 2xx), `false` caso contrário.
- **`status`** (`number`): O código de status HTTP da resposta.
- **`message`** (`string`): Uma mensagem descritiva sobre o resultado da requisição.
- **`response`** (`T | null`): Os dados da resposta, geralmente em formato JSON. É `null` se a resposta não tiver corpo ou se ocorrer um erro de parsing.
- **`cause`** (`any | null`): Informações adicionais sobre o erro, se houver.

### Exemplo de fluxo

1.  `api.patch("/users/1", { body: { name: "John" } })` é chamado.
2.  O método `patch` da `ApiInstance` chama `patchRequest`.
3.  `patchRequest` chama `makeRequest` com o método "patch".
4.  `makeRequest` executa a requisição `fetch` e retorna o `ApiResponseDTO`.

```js
// Exemplo de uso
const api = new ApiInstance({ baseUrl: "https://api.example.com" });

async function updateUser() {
  const result = await api.patch("/users/1", {
    body: { name: "Jane Doe" },
  });

  if (result.success) {
    console.log(result.message, result.response);
  } else {
    console.error(`Error ${result.status}: ${result.message}`);
  }
}
```
