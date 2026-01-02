# DizhTime - Enterprise Microservices Architecture Design

## 1. System Overview
**DizhTime** is designed as a high-throughput, event-driven food delivery platform. It leverages **CQRS (Command Query Responsibility Segregation)** to separate read and write loads, ensuring high performance for users while maintaining data consistency.

**Core Principles:**
*   **Event-Driven**: Kafka as the central nervous system.
*   **Polyglot**: Go for high-concurrency utils; Node.js/NestJS for complex domain logic.
*   **Scalable infrastructure**: Kubernetes (K8s) driven with Skaffold for DevX.
*   **Observability First**: Full visibility into every request and error.

---

## 2. Infrastructure & Communication
*   **Message Broker**: **Apache Kafka**.
    *   *Topics*: `order.created`, `payment.success`, `driver.location`, `restaurant.menu.update`.
*   **Gateway**: **Kong** or Custom **Go Gateway**.
    *   Handles Auth termination, Rate Limiting, Request routing to downstream services.
*   **Orchestration**: **Kubernetes (K8s)**.
    *   Autoscaling (HPA) based on CPU/Memory and Kafka Lag.
*   **Service Discovery**: Native K8s / Consul.

---

## 3. Observability & Monitoring Stack (The "Centralized Logging" System)
To master the chaos of microservices, we implement the **PLGT Stack** (Prometheus, Loki, Grafana, Tempo).

*   **Centralized Logging**: **Grafana Loki**.
    *   **Agent**: **Promtail** (sidecar/daemonset) scrapes logs from every container's stdout/stderr.
    *   **Storage**: MinIO/S3 (for long-term log retention).
    *   **Viewer**: **Grafana**. You can query logs like `dizh_service="order-service" |= "error"`.
*   **Metrics**: **Prometheus**.
    *   Scrapes `/metrics` endpoints from all Go/Node services.
    *   Alerts on High Error Rates, Latency > 1s, etc.
*   **Distributed Tracing**: **Grafana Tempo**.
    *   Follows a request ID from Gateway -> Order Service -> Kafka -> Delivery Service.
*   **Visualization**: **Grafana Dashboards**.
    *   Unified view of Logs, Metrics, and Traces.

---

## 4. Microservices Breakdown

### A. Core Domain Services (Command Side - Write)
These services handle state changes.

1.  **Identity & Access Management (IAM) Service** [Go]
    *   **Responsibility**: Auth, RBAC (Role Based Access Control).
    *   **Tech**: Go, Keto (for ACL), JWT.
    *   **Data**: Postgres.

2.  **Order Processing Service** [NestJS]
    *   **Responsibility**: Order Lifecycle, State Machine (Saga Pattern for distributed transactions).
    *   **Pattern**: **CQRS Command Handler**.
    *   **Data**: Postgres (Transactional).
    *   **Events**: Publishes `OrderPlacedEvent`.

3.  **Restaurant Management Service** [NestJS]
    *   **Responsibility**: Menu updates, On/Off status, Price changes.
    *   **Data**: MongoDB (Document store for flexible Menu schemas).
    *   **Events**: Publishes `MenuUpdatedEvent` (Consumed by Search Service).

4.  **Delivery Dispatch Service** [Go]
    *   **Responsibility**: Application logic for Driver Matching (Geo-spatial queries).
    *   **Tech**: Go + K8s / Uber H3 Geo Index.
    *   **Data**: Redis (Geo), Postgres.

5.  **Wallet & Payment Service** [Node.js]
    *   **Responsibility**: Wallets (Credits/Debits), Payment Gateway Integration, Refunds.
    *   **Critical**: Ledger implementation (Double-entry consistency).
    *   **Data**: Postgres (Strict ACID compliance).

### B. Query & Specialized Services (Read / Async)

6.  **Search & Discovery Service** [Go/Java/Node]
    *   **Responsibility**: Super fast search for "Pizza", "Italian", "DizhTime Special".
    *   **Pattern**: **CQRS Query Handler**. Consumes `MenuUpdatedEvent`, `RestaurantUpdatedEvent`.
    *   **Data**: **Elasticsearch** / OpenSearch.
    *   **API**: GraphQL for flexible data retrieval by Frontend.

7.  **Notification Service** [Node.js]
    *   **Responsibility**: Push, SMS, Email, In-App.
    *   **Tech**: Socket.io / Firebase (FCM).
    *   **Source**: Consumes generic `NotificationEvent` from Kafka.

8.  **Analytics Service**
    *   **Source**: Kafka Streams processing.
    *   **Data**: ClickHouse / Snowflake.

---

## 5. The CQRS Data Flow
*Example: User searches for a restaurant.*
1.  **Write Path**: Restaurant updates menu in **Restaurant Service** (Mongo).
2.  **Event**: Restaurant Service publishes `RestaurantUpdated` to **Kafka**.
3.  **Sync**: **Search Service** consumes event, validates/formats, and indexes into **Elasticsearch**.
4.  **Read Path**: User App queries **Search Service** directly (hitting Elastic) for sub-millisecond results.
    *   *Benefit*: Search load never impacts the main Transactional Database.

---

## 6. Wallet Service Design
**Features**:
*   `TopUp`: User adds money via Gateway.
*   `PayOrder`: Deduct balance transactionally.
*   `Refund`: Traceable refund logic.
*   `LoyaltyPoints`: Parallel currency logic.
**Architecture**:
*   Uses **Optimistic Locking** for concurrent balance updates.
*   Audit log for every single cent movement.

---

## 7. Frontend Applications (Clients)
1.  **Customer App** (React Native / Next.js): Optimized for conversion.
2.  **Delivery Partner App** (React Native): Optimized for Location/GPS & Battery.
3.  **Restaurant Dashboard** (React Admin): Real-time order management.
4.  **Super Admin Portal** (React): Platform configuration & monitoring.

---

## 8. Technology Grid
| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Lang (High Perf)** | Go (Golang) | Dispatcher, Auth, Gateway |
| **Lang (Logic)** | TypeScript (NestJS) | Order, Restaurant, Wallet |
| **Event Bus** | Apache Kafka | High throughput, Persistence |
| **Search Engine** | Elasticsearch | Complex text queries, Geo-queries |
| **Cache** | Redis Cluster | Session, Cart, Geo-hashing |
| **Infra** | K8s + Skaffold | Microservices Industry Standard |
| **Logging/Mon** | **Grafana LGTM** | Unified Logging & Metrics |
