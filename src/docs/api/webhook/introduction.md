# Webhook Entity

The `Webhook` entity represents a notification endpoint configured to receive automatic alerts when specific events occur in the Arkyn Logs system. Each webhook is associated with a `TrafficSource` and allows the system to send real-time notifications to external services.

## Main Attributes

- **id**: Unique identifier for each webhook.
- **type**: Webhook type (currently only supports "discord").
- **level**: Severity level that triggers the webhook ("fatal", "warning", "info").
- **value**: Specific webhook URL or configuration (e.g., Discord webhook URL).
- **trafficSourceId**: Foreign key that links the webhook to a `TrafficSource`.
- **createdAt**: Date and time the record was created. - **updatedAt**: Date and time the log was last updated.

## Supported Webhook Types

### Discord

- **Type**: `discord`
- **Description**: Sends notifications to Discord channels via Discord webhooks.
- **Configuration**: Requires the full Discord webhook URL.

## Severity Levels

Webhooks can be configured for different severity levels:

- **fatal**: Critical errors that require immediate attention
- **warning**: Important alerts that should be monitored
- **info**: General system information

## Relationships

- [**TrafficSource**](/api/trafficsource/introduction): Each webhook belongs to a single traffic source.

## Business Rules

1. **Uniqueness by Level**: Each `TrafficSource` can have only one webhook per severity level.
2. **Ownership**: Only the `TrafficSource` owner can manage their webhooks.
3. **Supported Types**: Currently, only Discord webhooks are supported.

## Summary

Webhooks in Arkyn Logs function as a real-time notification system, allowing users to receive automatic alerts about important events in their monitored applications.
