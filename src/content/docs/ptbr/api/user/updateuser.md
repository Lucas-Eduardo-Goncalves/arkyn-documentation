---
title: Atualizar User
---

Esta funcionalidade permite a atualização dos dados de um usuário existente.

## Rota

```bash
PUT /user/:userId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/api/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para atualizar um usuário, é necessário fornecer o `userId` como parâmetro na URL e os campos a serem atualizados no corpo da requisição. O usuário autenticado só pode atualizar seus próprios dados, a menos que tenha permissões de administrador.

## Parâmetros da rota

| Parâmetro | Tipo   | Descrição                       | Obrigatório |
| :-------- | :----- | :------------------------------ | :---------- |
| `userId`  | string | ID do usuário a ser atualizado. | Sim         |

## Corpo da requisição

Os campos são opcionais. Apenas os campos fornecidos serão atualizados.

| Campo  | Tipo   | Descrição                     |
| :----- | :----- | :---------------------------- |
| `name` | string | Novo nome do usuário.         |
| `utc`  | number | Novo fuso horário do usuário. |

**Exemplo:**

```json
{
  "name": "Nome Atualizado",
  "utc": 0
}
```

## Resposta de sucesso

**Código:** `200 OK`

**Conteúdo:** O objeto do usuário atualizado, sem a senha.

**Exemplo:**

```json
{
  "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "name": "Nome Atualizado",
  "email": "usuario.existente@example.com",
  "utc": 0,
  "createdAt": "2025-07-10T10:00:00.000Z",
  "updatedAt": "2025-07-10T12:30:00.000Z"
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para atualizar os dados deste usuário.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum usuário foi encontrado com o `userId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
