---
title: Update Webhook
---

This feature allows you to update the configuration of an existing webhook.

## Route

```bash
PUT /webhooks/:webhookId
```

## Authentication

This route requires authentication. You must include a valid Bearer token in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/api/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To update a webhook, you must provide the `webhookId` as a parameter in the URL and the new data in the request body. Only the owner of the traffic source associated with the webhook can perform updates.

## Route Parameters

| Parameter   | Type   | Description                      | Required |
| :---------- | :----- | :------------------------------- | :------- |
| `webhookId` | string | ID of the webhook to be updated. | Yes      |

## Request Body

| Field   | Type   | Description                       | Required |
| :------ | :----- | :-------------------------------- | :------- |
| `value` | string | New webhook URL or configuration. | Yes      |

**Example:**

```json
{
  "value": "999888777"
}
```

## Success Response

**Code:** `200 OK`

**Content:** The updated webhook object.

**Example:**

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

## Answers from Error

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., missing or invalid `value` field).
  - **Reason:** The provided `webhookId` is invalid.
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The user does not have permission to update this webhook.
- **Code:** `404 Not Found`
  - **Reason:** No webhook was found with the provided `webhookId`.
  - **Reason:** The traffic source associated with the webhook was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** Unexpected server error.
