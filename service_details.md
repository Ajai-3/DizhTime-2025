# DizhTime - Microservices Detail

This document provides a technical deep-dive into each of the 10 services in the ecosystem.

## 1. Gateway Service
*   **Stack**: Go (Golang) / Kong
*   **Type**: Infrastructure
*   **Responsibilities**:
    *   **Routing**: `/api/v1/user/*` -> User Service.
    *   **Auth Termination**: Validates JWT Bearer tokens before passing data downstream.
    *   **Rate Limiting**: "100 requests per minute IP".
    *   **Response Aggregation**: (Optional) Merging data from two services (GraphQL Federation).

## 2. Auth Service
*   **Stack**: Go (Golang)
*   **Database**: Postgres (Users Table)
*   **Responsibilities**:
    *   **Identity Provider**: Stores `email`, `password_hash`, `phone`, `role`.
    *   **Tokens**: Issues Access Tokens (15 min) and Refresh Tokens (7 days).
    *   **OTP**: Integrates with Twilio for Phone Verification.
    *   **OAuth**: Handling Google/Facebook callback flows.

## 3. User Service
*   **Stack**: Node.js (NestJS)
*   **Database**: Postgres
*   **Responsibilities**:
    *   **Profile**: manage `name`, `avatar`.
    *   **Saves**: `addresses` table (Home, Work), `favorite_restaurants`.
    *   **Settings**: Notification preferences.

## 4. Restaurant Service
*   **Stack**: Node.js (NestJS)
*   **Database**: MongoDB (Flexible Schema)
*   **Responsibilities**:
    *   **Catalog**: Stores Menus. Structure: `Restaurant -> Menu -> Category -> Item -> Variant`.
    *   **Availability**: Real-time `is_open` flags.
    *   **Geography**: Stores `location: { type: Point, coordinates: [lat, lng] }`.
    *   **Events**: Publishes `restaurant.menu_updated` to Kafka (for Search Service).

## 5. Search Service
*   **Stack**: Go (Golang) + Elasticsearch
*   **Database**: Elasticsearch (NoSQL)
*   **Responsibilities**:
    *   **Sync**: Consumes Kafka events to keep Elastic index updated.
    *   **Query**: Handles fuzzy search ("Bger" -> "Burger").
    *   **Ranking**: Boosts sponsored restaurants or high-rated ones.

## 6. Order Service
*   **Stack**: Node.js (NestJS)
*   **Database**: Postgres (Transactional)
*   **Responsibilities**:
    *   **State Machine**: `CREATED` -> `PAYMENT_PENDING` -> `CONFIRMED` -> `PREPARING` -> `READY` -> `PICKED_UP` -> `COMPLETED`.
    *   **Cart**: Manages temporary cart state (Redis).
    *   **Saga Orchestrator**:
        1.  Receive Order.
        2.  Call Wallet (Reserve Funds).
        3.  Call Restaurant (Check Inventory).
        4.  Confirm Order.

## 7. Wallet Service
*   **Stack**: Node.js (NestJS)
*   **Database**: Postgres (Ledger Pattern)
*   **Responsibilities**:
    *   **Double Entry**: Every transaction has a Debit and Credit.
    *   **Entities**: `UserWallet`, `RestaurantWallet`, `DriverWallet`, `AdminWallet`.
    *   **Integrations**: Stripe/Razorpay Webhooks for Top-ups.

## 8. Delivery Service
*   **Stack**: Go (Golang)
*   **Database**: Postgres + Redis (Geo)
*   **Responsibilities**:
    *   **Tracking**: Ingests Driver Ping (`lat, lng`) every 10s into Redis.
    *   **Matching Algorithm**: Uses H3/Geohash to find nearest "Online" and "Idle" drivers.
    *   **Routing**: Calculates ETA using OSRM or Google Routes API.

## 9. Notification Service
*   **Stack**: Node.js (NestJS)
*   **Infra**: Socket.io + FCM (Firebase)
*   **Responsibilities**:
    *   **Real-time**: Maintains persistent Socket connections with Apps.
    *   **Triggers**: Listens to Kafka `order.status_changed` -> Emits Socket event to User.

## 10. Analytics Service
*   **Stack**: Node.js / Python
*   **Database**: ClickHouse / Snowflake
*   **Responsibilities**:
    *   **ETL**: Consumers Kafka streams to build hourly aggregates.
    *   **Reports**: "Total Revenue", "Average Delivery Time".
