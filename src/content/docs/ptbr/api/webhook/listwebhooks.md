---
title: Listar Webhooks
---

Esta funcionalidade permite visualizar todos os webhooks configurados para uma fonte de tráfego específica.

## Rota

```bash
GET /webhooks/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Esta rota retorna uma lista de todos os webhooks configurados para a fonte de tráfego especificada. Apenas o proprietário da fonte de tráfego pode visualizar seus webhooks.

## Parâmetros da Rota

| Parâmetro         | Tipo   | Descrição                                    | Obrigatório |
| :---------------- | :----- | :------------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego para listar webhooks. | Sim         |

## Resposta de sucesso

**Código:** `200 OK`

**Conteúdo:** Array de objetos webhook.

**Exemplo:**

```json
{
  "data": [
    {
      "id": "w1x2y3z4-a5b6-7890-1234-567890abcdef",
      "type": "discord",
      "level": "fatal",
      "value": "123456789",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-21T14:30:00.000Z",
      "updatedAt": "2025-07-21T14:30:00.000Z"
    },
    {
      "id": "w2x3y4z5-b6c7-8901-2345-678901bcdefg",
      "type": "discord",
      "level": "warning",
      "value": "987654321",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-21T15:00:00.000Z",
      "updatedAt": "2025-07-21T15:00:00.000Z"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}
```

## Resposta para lista vazia

Se não houver webhooks configurados, será retornado um array vazio:

```json
{
  "data": [],
  "meta": {
    "total": 0,
    "page": 1,
    "limit": 10
  }
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** O `trafficSourceId` fornecido é inválido.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O usuário não tem permissão para visualizar webhooks desta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A fonte de tráfego especificada não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
