# DizhTime - Enterprise Implementation Plan (v4)

## Goal Description
Build a "Full-Fledged" Food Delivery Platform **DizhTime**.
**Standard**: Scalable, Resilient, Event-Driven, Cloud-Native.
**Architecture**: Microservices with **CQRS**, **Kafka**, and **Full Observability**.

## Technical Strategy
*   **Infrastructure First**: We will set up the K8s cluster and Kafka scaffolding before writing business logic.
*   **Visual Debugging**: Centralized logging from Day 1 to avoid "blind" microservices.

## Proposed Services Checklist

### Infrastructure & Shared
- [ ] **Kubernetes Cluster**: Local setup (Minikube/Kind) with Skaffold.
- [ ] **Kafka Cluster**: Zookeeper + Brokers (Strimzi Operator).
- [ ] **Observability Stack**: Grafana, Loki (Logs), Prometheus (Metrics), Tempo (Tracing).
- [ ] **API Gateway**: Custom Ingress Controller handling routing.

### Core Microservices
1.  **Auth Service (Go)**: Handling tokens, OAuth.
2.  **Restaurant Service (NestJS - Command)**: Management of Restaurant Profiles/Menus.
3.  **Search Service (Go/Node - Query)**: ElasticSearch sync & querying.
4.  **Order Service (NestJS)**: Saga Orchestrator for Orders.
5.  **Delivery Service (Go)**: Logic for assigning drivers efficiently.
6.  **Wallet Service (Node)**: Ledger system for reliable payments.
7.  **Notification Service**: Centralized messaging hub.

## Planning Phases

### Phase 1: The Backbone (DevOps & Infra)
*   Initialize Monorepo.
*   Setup **Skaffold** to sync code to Containers.
*   Deploy **Kafka** and **Postgres** within K8s namespace.
*   **DEPLOY GRAFANA + LOKI**: Ensure Promtail is running on all nodes to capture logs.

### Phase 2: Foundation Services
*   **Auth Service**: Implement Registration/Login/JWT.
*   **Gateway**: Connect Gateway to Auth for automatic token validation.
*   **Instrumentation**: Add OpenTelemetry SDKs to Auth/Gateway to start seeing Traces in Grafana.

### Phase 3: The Core Flows (CQRS Impl)
*   **Restaurant + Search**:
    1. Implement Restaurant CRUD (Mongo).
    2. Implement Kafka Producer.
    3. Implement Search Consumer (Elastic).
    4. Implement Query API.

*   **Order + Delivery + Wallet**:
    1. Wallet Top-up logic.
    2. Order Placement (Reserve Funds -> Confirm Order).
    3. Delivery Dispatch logic (Round-Robin or Nearest Neighbor).

### Phase 4: Frontend Development (React Ecosystem)
*   **Design System**: Shared UI Library (Buttons, Inputs, Cards).
*   **Admin Portal**: User/Restaurant management.
*   **Customer Web**: The main ordering interface.
*   **Delivery/Restaurant Portals**: Specialized dashboards.

## Verification Plan
*   **Load Testing**: K6 scripts to spam Order creation and test Kafka lag.
*   **Observability Check**: Verify that a single request ID can be traced from Gateway -> Order -> Kafka -> Wallet in Grafana.
