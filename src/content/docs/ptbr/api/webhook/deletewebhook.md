---
title: Deletar Webhook
---

Esta funcionalidade permite a remoção de um webhook existente do sistema.

## Rota

```bash
DELETE /webhooks/:webhookId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para deletar um webhook, é necessário fornecer o `webhookId` como parâmetro na URL. Apenas o proprietário da fonte de tráfego associada ao webhook pode realizar a exclusão. Uma vez deletado, o webhook não poderá mais enviar notificações.

## Parâmetros da Rota

| Parâmetro   | Tipo   | Descrição                     | Obrigatório |
| :---------- | :----- | :---------------------------- | :---------- |
| `webhookId` | string | ID do webhook a ser deletado. | Sim         |

## Resposta de sucesso

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** O `webhookId` fornecido é inválido.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O usuário não tem permissão para deletar este webhook.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum webhook foi encontrado com o `webhookId` fornecido.
  - **Motivo:** A fonte de tráfego associada ao webhook não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
