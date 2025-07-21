---
title: Atualizar Webhook
---

Esta funcionalidade permite a atualização da configuração de um webhook existente.

## Rota

```bash
PUT /webhooks/:webhookId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para atualizar um webhook, é necessário fornecer o `webhookId` como parâmetro na URL e os novos dados no corpo da requisição. Apenas o proprietário da fonte de tráfego associada ao webhook pode realizar atualizações.

## Parâmetros da Rota

| Parâmetro   | Tipo   | Descrição                       | Obrigatório |
| :---------- | :----- | :------------------------------ | :---------- |
| `webhookId` | string | ID do webhook a ser atualizado. | Sim         |

## Corpo da requisição

| Campo   | Tipo   | Descrição                            | Obrigatório |
| :------ | :----- | :----------------------------------- | :---------- |
| `value` | string | Nova URL ou configuração do webhook. | Sim         |

**Exemplo:**

```json
{
  "value": "999888777"
}
```

## Resposta de sucesso

**Código:** `200 OK`

**Conteúdo:** O objeto do webhook atualizado.

**Exemplo:**

```json
{
  "id": "w1x2y3z4-a5b6-7890-1234-567890abcdef",
  "type": "discord",
  "level": "fatal",
  "value": "999888777",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-21T14:30:00.000Z",
  "updatedAt": "2025-07-21T16:45:00.000Z"
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: campo `value` ausente ou inválido).
  - **Motivo:** O `webhookId` fornecido é inválido.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O usuário não tem permissão para atualizar este webhook.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum webhook foi encontrado com o `webhookId` fornecido.
  - **Motivo:** A fonte de tráfego associada ao webhook não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
