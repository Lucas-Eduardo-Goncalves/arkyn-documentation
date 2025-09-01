---
title: List Webhooks
---

This feature allows you to view all webhooks configured for a specific traffic source.

## Route

```bash
GET /webhooks/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/api/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

This route returns a list of all webhooks configured for the specified traffic source. Only the owner of the traffic source can view their webhooks.

## Route Parameters

| Parameter         | Type   | Description                         | Required |
| :---------------- | :----- | :---------------------------------- | :------- |
| `trafficSourceId` | string | Traffic source ID to list webhooks. | Yes      |

## Success Response

**Code:** `200 OK`

**Content:** Array of webhook objects.

**Example:**

```json
{
  "date": [
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
  "goal": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}
```

## Response for empty list

If no webhooks are configured, an empty array will be returned:

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

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** The provided `trafficSourceId` is invalid.
  - **Reason:** Authentication token missing.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The user does not have permission to view webhooks from this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** The specified traffic source was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
