# DizhTime - Project Master Plan (Revised)

## 1. Executive Summary
**Project Name**: DizhTime
**Objective**: Build a high-scale, microservices-based food delivery platform.
**Core Tech**: Go (High Perf), Node.js (Business Logic), React (UI), Kubernetes (Infra), Kafka (Events).

---

## 2. Infrastructure & Technology Stack
*Before understanding the apps, we must understand the engine running them.*

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Containerization** | **Docker** | Packaging all services into lightweight containers. |
| **Orchestration** | **Kubernetes (K8s)** | Managing, scaling, and networking our containers. |
| **Dev Workflow** | **Skaffold** | Real-time code syncing to K8s for fast development. |
| **Message Broker** | **Apache Kafka** | Asynchronous communication (Order -> Kitchen). |
| **Real-time** | **Socket.io** | Live tracking updates to the frontend. |
| **API Gateway** | **Custom (Go/Node)** | The single entry point handling all traffic. |
| **CI/CD** | **GitHub Actions** | Automated testing and deployment pipelines. |
| **Databases** | Postgres, Mongo, Redis | Polyglot persistence. |
| **Logging** | Grafana LGTM | Centralized logs and metrics. |

---

## 3. The 4 Interfaces (The Frontend)
Built entirely with **React** for a premium, unified experience.

1.  **🏠 Customer App**: For browsing, ordering, and tracking.
2.  **🍳 Restaurant Portal**: For menu management and order acceptance.
3.  **🛵 Delivery App**: For receiving jobs and navigation.
4.  **👮 Admin Dashboard**: For overall platform management.

---

## 4. The Microservices Ecosystem
The backend logic is split into **10 Services**.

### 🛡️ 1. Custom API Gateway (The Entry Point)
*   **Tech**: Go or Node.js
*   **Role**: All 4 interfaces talk ONLY to this Gateway. It routes requests, handles Rate Limiting, and centralized Authentication checks.

### 🔐 2. Auth Service
*   **Tech**: Go (Golang)
*   **Role**: Manages Login, Signup, JWT Tokens, and OTPs.

### 👤 3. User Service
*   **Tech**: Node.js
*   **Role**: Manages Profiles, Saved Addresses, and Preferences.

### 🏪 4. Restaurant Service
*   **Tech**: Node.js + MongoDB
*   **Role**: Stores Menus, Items, Prices, and Restaurant Metadata.

### 🔍 5. Search Service
*   **Tech**: Go + Elasticsearch
*   **Role**: Ultra-fast food/restaurant search engine.

### 🛒 6. Order Service
*   **Tech**: Node.js + Postgres
*   **Role**: The "Brain". Handles Cart, Checkout, and Order State (Placed -> Confirmed).

### 💳 7. Wallet Service
*   **Tech**: Node.js
*   **Role**: Manages User Balances, Payments, Refunds, and Loyalty Points.

### 🚚 8. Delivery Service
*   **Tech**: Go (Golang) + Redis Geo
*   **Role**: Tracks Drivers, Assigns Orders to Drivers, Calculates Routes.

### 🔔 9. Notification Service
*   **Tech**: Node.js + Socket.io
*   **Role**: Sends Real-time Socket updates, Push Notifications, SMS, Email.

### 📊 10. Analytics Service
*   **Tech**: Node.js
*   **Role**: Aggregates data for Admin reports.

---

## 5. Interface 🔗 Service Mapping
*How the 4 Interfaces interact with the Services (via Gateway).*

| Interface | Primary Services Used | Why? |
| :--- | :--- | :--- |
| **Customer App** | **Auth, Search, Restaurant, Order, Wallet, Delivery, Notification** | Needs to Search food, Buy (Order/Wallet), and Track (Delivery/Notif). |
| **Restaurant Portal** | **Auth, Restaurant, Order, Analytics, Notification** | Needs to Edit Menu (Restaurant), Accept Orders (Order), and view Sales (Analytics). |
| **Delivery App** | **Auth, Delivery, Order, Wallet, Notification** | Needs to Receive Jobs (Delivery), Update Status (Order), and Check Earnings (Wallet). |
| **Admin Dashboard** | **ALL SERVICES** | Needs full control over Users, Restaurants, Orders, Refunds, and System Stats. |

---

## 6. Detailed Project Roadmap

### Phase 1: The "Iron Backbone" (Infra)
*   **Goal**: Get the "Engine" running.
*   **To-Do**:
    *   Setup **Monorepo**.
    *   Configure **Docker** files.
    *   Setup **Kubernetes** cluster.
    *   Configure **Skaffold** for hot-reloading.
    *   Deploy **Kafka** & **Databases**.

### Phase 2: The Core Services
*   **Goal**: Enable Users to Exist and connect.
*   **To-Do**:
    *   Build **Custom Gateway**.
    *   Build **Auth Service** (Go).
    *   Build **User Serviice**.

### Phase 3: The Marketplace (Restaurant & Search)
*   **Goal**: Enable looking at food.
*   **To-Do**:
    *   Build **Restaurant Service** (Mongo).
    *   Build **Search Service** (Elastic).
    *   *Frontend*: Build Customer Landing Page & Restaurant Dashboard.

### Phase 4: The Business (Order & Wallet)
*   **Goal**: Enable spending money.
*   **To-Do**:
    *   Build **Order Service** (Saga Pattern).
    *   Build **Wallet Service**.
    *   *Frontend*: Cart & Checkout.

### Phase 5: The Logistics (Delivery & Real-time)
*   **Goal**: Enable getting the food.
*   **To-Do**:
    *   Build **Delivery Service** (Geo).
    *   Build **Notification Service** (Socket.io).
    *   *Frontend*: Driver App & Live Tracking Map.
