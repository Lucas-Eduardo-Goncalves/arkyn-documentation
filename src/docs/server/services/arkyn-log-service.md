# ArkynLogInstance

The `ArkynLogInstance` class allows you to define and retrieve the Arkyn log configuration, including the traffic source ID, user token, and API URL.

## Import

```ts
import { ArkynLogInstance } from "@arkyn/server";
```

## Methods

### `setArkynConfig`

Sets the configuration for the logs. This method initializes the configuration with the provided values. If the configuration has already been set, the method will return without making any changes.

- **Parameters**:
  - `arkynConfig` (`SetArkynConfigProps`): An object containing the configuration properties.
    - `arkynTrafficSourceId` (`string`): The key used to identify the traffic source.
    - `arkynUserToken` (`string`): The user token for authentication.
    - `arkynLogBaseApiUrl` (`string`, optional): The API URL for the logs. If not provided, a default URL will be used.

### `getArkynConfig()`

Retrieves the current log configuration.

- **Return**: `ArkynConfigProps | undefined` - The current configuration, or `undefined` if no configuration has been initialized.

### `resetArkynConfig()`

Resets the log configuration to `undefined`.

## Log API Documentation

For developers who want to use Arkyn's log API directly, without using the `@arkyn/server` package, please refer to the complete API documentation at:

**[https://arkyn-logs-documentation.netlify.app/](https://arkyn-logs-documentation.netlify.app/)**
