# Create Webhook

This feature allows you to register a new webhook to receive automatic notifications from a specific traffic source.

## Route

```bash
POST /webhooks/:trafficSourceId
```

## Authentication

This route requires authentication. You must include a valid Bearer token in the request's `Authorization` header. The token must be obtained through the [user authentication route](/api/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To create a new webhook, you must provide the type, severity level, and the webhook URL/configuration. The webhook will be associated with the traffic source specified in the URL. Each traffic source can have only one webhook per severity level.

## Route Parameters

| Parameter         | Type   | Description                        | Required |
| :---------------- | :----- | :--------------------------------- | :------- |
| `trafficSourceId` | string | Traffic source ID for the webhook. | Yes      |

## Request Body

| Field   | Type   | Description                                         | Required |
| :------ | :----- | :-------------------------------------------------- | :------- |
| `type`  | string | Webhook type. Accepted values: "discord".           | Yes      |
| `level` | string | Severity level. Values: "fatal", "warning", "info". | Yes      |
| `value` | string | Webhook URL or configuration.                       | Yes      |

**Example:**

```json
{
  "type": "discord",
  "level": "fatal",
  "value": "123456789" // Discord channel ID
}
```

## Success response

**Code:** `201 Created`

**Content:** The created webhook object.

**Example:**

```json
{
  "id": "w1x2y3z4-a5b6-7890-1234-567890abcdef",
  "type": "discord",
  "level": "fatal",
  "value": "123456789", // Discord channel ID
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-21T14:30:00.000Z",
  "updatedAt": "2025-07-21T14:30:00.000Z"
}
```

## Error responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., missing required fields).
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The user does not have permission to create webhooks on this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** The specified traffic source was not found.
- **Code:** `409 Conflict`
  - **Reason:** A webhook for this severity level already exists on this traffic source.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
