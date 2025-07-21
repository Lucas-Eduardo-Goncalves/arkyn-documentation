---
title: Criar Webhook
---

Esta funcionalidade permite o cadastro de um novo webhook para receber notificações automáticas de uma fonte de tráfego específica.

## Rota

```bash
POST /webhooks/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para criar um novo webhook, é necessário fornecer o tipo, nível de severidade e a URL/configuração do webhook. O webhook será associado à fonte de tráfego especificada na URL. Cada fonte de tráfego pode ter apenas um webhook por nível de severidade.

## Parâmetros da Rota

| Parâmetro         | Tipo   | Descrição                              | Obrigatório |
| :---------------- | :----- | :------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego para o webhook. | Sim         |

## Corpo da requisição

| Campo   | Tipo   | Descrição                                                 | Obrigatório |
| :------ | :----- | :-------------------------------------------------------- | :---------- |
| `type`  | string | Tipo do webhook. Valores aceitos: "discord".              | Sim         |
| `level` | string | Nível de severidade. Valores: "fatal", "warning", "info". | Sim         |
| `value` | string | URL ou configuração do webhook.                           | Sim         |

**Exemplo:**

```json
{
  "type": "discord",
  "level": "fatal",
  "value": "123456789" // ID do canal do Discord
}
```

## Resposta de sucesso

**Código:** `201 Created`

**Conteúdo:** O objeto do webhook criado.

**Exemplo:**

```json
{
  "id": "w1x2y3z4-a5b6-7890-1234-567890abcdef",
  "type": "discord",
  "level": "fatal",
  "value": "123456789", // ID do canal do Discord
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-21T14:30:00.000Z",
  "updatedAt": "2025-07-21T14:30:00.000Z"
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: campos obrigatórios ausentes).
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O usuário não tem permissão para criar webhooks nesta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A fonte de tráfego especificada não foi encontrada.
- **Código:** `409 Conflict`
  - **Motivo:** Já existe um webhook para este nível de severidade nesta fonte de tráfego.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
