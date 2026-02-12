# LogService

The `LogService` is a static singleton service for configuring log ingestion endpoints. It stores the traffic source identifier, user token, and API URL used by Arkyn's logging system to send logs to a centralized server.

## Import

```ts
import { LogService } from "@arkyn/server";
```

## Methods

**`setConfig(config)`** - Sets the log service configuration (only once, subsequent calls are ignored).

**`getConfig()`** - Returns the current configuration or `undefined` if not set.

**`resetConfig()`** - Resets the stored configuration, allowing a new initialization.

## Configuration options

- `trafficSourceId` (required): A string identifier for the traffic source, as defined in your Arkyn dashboard. This helps categorize and filter logs by source.
- `userToken` (required): A string token for authenticating log submissions. This should be kept secure and is used to associate logs with your account.
- `logBaseApiUrl` (optional): A custom base URL for the log ingestion API. If not provided, it defaults to Arkyn's standard log server URL.

## Usage example

```typescript
import { LogService } from "@arkyn/server";

// Configure the log service (typically in your app's entry point)
LogService.setConfig({
  trafficSourceId: "your-traffic-source-id",
  userToken: "your-user-token",
});

// With custom API URL
LogService.setConfig({
  trafficSourceId: "your-traffic-source-id",
  userToken: "your-user-token",
  logBaseApiUrl: "https://custom-log-server.com",
});

// Check current configuration
const config = LogService.getConfig();
if (config) {
  console.log(config.apiUrl); // Full API URL for log ingestion
  console.log(config.trafficSourceId);
  console.log(config.userToken);
}

// Reset configuration (useful for testing)
LogService.resetConfig();
```

## Integration with ApiService

When using `ApiService` with route variables (`:param` syntax), the logging system can better aggregate and categorize your API calls:

```typescript
import { ApiService, LogService } from "@arkyn/server";

// Configure logging
LogService.setConfig({
  trafficSourceId: "my-app-traffic-source",
  userToken: "auth-token",
});

const api = new ApiService({
  baseUrl: "https://api.example.com",
  enableDebug: true,
});

// Using route variables helps the log system group requests
await api.get("/users/:userId", { urlParams: { userId: "123" } });
await api.get("/users/:userId", { urlParams: { userId: "456" } });
// Logs are grouped under "/users/:userId" instead of separate entries
```

## Notes

The `setConfig` method is designed to be called once during application initialization. Subsequent calls are silently ignored to prevent accidental reconfiguration.

If `logBaseApiUrl` is not provided, the service uses the default Arkyn log server URL.

The `apiUrl` in the returned configuration includes the full ingestion endpoint path (`/ingest-log`).

Use `resetConfig()` primarily for testing scenarios where you need to reconfigure the service between test cases.
