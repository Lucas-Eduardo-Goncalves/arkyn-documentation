---
title: Delete Webhook
---

This feature allows you to remove an existing webhook from the system.

## Route

```bash
DELETE /webhooks/:webhookId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/api/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To delete a webhook, you must provide the `webhookId` as a parameter in the URL. Only the owner of the traffic source associated with the webhook can perform the deletion. Once deleted, the webhook will no longer be able to send notifications.

## Route Parameters

| Parameter   | Type   | Description                      | Required |
| :---------- | :----- | :------------------------------- | :------- |
| `webhookId` | string | ID of the webhook to be deleted. | Yes      |

## Success Response

**Code:** `204 No Content`

**Content:** No content is returned in the response body.

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** The provided `webhookId` is invalid.
  - **Reason:** Authentication token missing.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The user does not have permission to delete this webhook.
- **Code:** `404 Not Found`
  - **Reason:** No webhook was found with the provided `webhookId`.
- **Reason:** The traffic source associated with the webhook was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
