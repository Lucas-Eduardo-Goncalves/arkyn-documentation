---
title: HttpTraffic Entity (HTTP Traffic)
---

The `HttpTraffic` entity is one of the most comprehensive log records in the system. It consolidates information from an entire HTTP transaction, combining data from the `Request`, `Response`, and metadata about the transaction's performance and context.

## Main Attributes

- **id**: Unique identifier for the traffic record.
- **status**: The HTTP status code of the response (e.g., 200, 404, 500).
- **method**: The HTTP method of the request (GET, POST, PUT, DELETE, etc.).
- **level**: The log level (`INFO`, `WARNING`, `FATAL`), derived from the received `status`. - **elapsedTime**: The elapsed time, in milliseconds, between the start of the request and the end of the response.
- **trafficUserId**: An optional identifier for the end user of the monitored application (not to be confused with the `User` in Arkyn Logs).
- **trafficSourceId**: The foreign key for the `TrafficSource`.
- **domainId**: The foreign key for the `Domain`.
- **pathnameId**: The foreign key for the `Pathname`.
- **requestId**: The foreign key for the associated `Request`.
- **responseId**: The foreign key for the associated `Response`.
- **createdAt**: Date and time the traffic record was created.

## Relationships

- [**TrafficSource**](/en/api/trafficsource/introduction), [**Domain**](/en/api/domain/introduction), [**Pathname**](/en/api/pathname/introduction): Provide context for where the transaction occurred.
- [**Request**](/en/api/request/introduction): Contains all the details of the incoming request.
- [**Response**](/en/api/response/introduction): Contains all the details of the outgoing response.

In short, `HttpTraffic` transforms raw request and response data into a structured and enriched log record, which is the basis for most analysis and visualization in the Arkyn Logs platform.
