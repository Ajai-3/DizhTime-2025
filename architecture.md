# DizhTime Architecture Documentation

## 🏗️ System Overview

DizhTime is a comprehensive food delivery platform built using **microservices architecture** with TypeScript and Node.js. The system is designed for scalability, maintainability, and efficient development across multiple teams.

## 📁 Project Structure

```
DizhTime/
├── packages/                    # Shared packages
│   └── dizhtime-common/        # Common utilities and types
├── services/                   # Microservices
│   ├── api-gateway/           # API Gateway service
│   ├── user-service/          # User management service
│   ├── admin-service/         # Admin management service
│   ├── restaurant-service/    # Restaurant management service
│   ├── delivery-boy-service/  # Delivery management service
│   └── chatbot-service/       # AI chatbot service
├── frontend/                  # React frontend application
├── package.json              # Root workspace configuration
├── architecture.md           # This file
├── project.rules.md          # Development guidelines
└── swagger.yaml              # API documentation
```

## 🎯 Architecture Principles

### 1. **Microservices Architecture**

- Each service handles a specific business domain
- Services communicate via REST APIs
- Independent deployment and scaling
- Technology stack consistency across services

### 2. **Shared Common Package**

- `@dizhtime/common` package for shared utilities
- Eliminates code duplication
- Consistent HTTP status codes and response formats
- Type safety across all services

### 3. **Workspace Management**

- npm workspaces for monorepo management
- Centralized dependency management
- Shared development scripts

## 🔧 Technology Stack

### **Backend Services**

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Package Manager**: npm with workspaces
- **Architecture**: Microservices

### **Frontend**

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router

### **Shared Utilities**

- **Package**: @dizhtime/common
- **HTTP Status**: Standardized enum-based status codes
- **Response Format**: Consistent API response structure

## 🏢 Service Architecture

### **API Gateway**

- **Purpose**: Central entry point for all client requests
- **Responsibilities**:
  - Request routing to appropriate services
  - Authentication and authorization
  - Rate limiting and throttling
  - Request/response logging
  - Load balancing

### **User Service**

- **Purpose**: User account management and authentication
- **Responsibilities**:
  - User registration and login
  - Profile management
  - Order history
  - Payment processing
  - Chatbot integration
- **Structure**:
  ```
  src/
  ├── controllers/     # auth, user, order, payment, chatbot
  ├── models/         # user, order
  ├── routes/         # API endpoints
  ├── middleware/     # auth, validation, rate limiting
  ├── utils/          # error handling, logging, websocket
  ├── config/         # database, rabbitmq
  └── tests/          # unit and integration tests
  ```

### **Admin Service**

- **Purpose**: Administrative operations and analytics
- **Responsibilities**:
  - Admin authentication
  - User management
  - Restaurant management
  - Order oversight
  - Analytics and reporting
- **Structure**:
  ```
  src/
  ├── controllers/     # auth, user, restaurant, order, analytics
  ├── models/         # admin, user, restaurant, order
  ├── routes/         # Admin API endpoints
  ├── middleware/     # Admin authentication and authorization
  ├── utils/          # Report generation utilities
  ├── config/         # Database and external service configs
  └── tests/          # Admin-specific tests
  ```

### **Restaurant Service**

- **Purpose**: Restaurant and menu management
- **Responsibilities**:
  - Restaurant profile management
  - Menu item management
  - Order processing from restaurant side
  - Restaurant analytics
- **Structure**:
  ```
  src/
  ├── controllers/     # profile, menu, order
  ├── models/         # restaurant, menu, order
  ├── routes/         # Restaurant API endpoints
  ├── middleware/     # Restaurant authentication
  ├── utils/          # Restaurant-specific utilities
  ├── config/         # Database configurations
  └── tests/          # Restaurant service tests
  ```

### **Delivery Boy Service**

- **Purpose**: Delivery management and tracking
- **Responsibilities**:
  - Delivery boy authentication
  - Order assignment and tracking
  - Real-time location updates
  - Delivery status management
- **Structure**:
  ```
  src/
  ├── controllers/     # auth, delivery, tracking
  ├── models/         # deliveryBoy, order
  ├── routes/         # Delivery API endpoints
  ├── middleware/     # Delivery boy authentication
  ├── utils/          # Geolocation utilities
  ├── config/         # Database and mapping service configs
  └── tests/          # Delivery service tests
  ```

### **Chatbot Service**

- **Purpose**: AI-powered customer support and suggestions
- **Responsibilities**:
  - Natural language processing
  - Order suggestions
  - Customer support automation
  - Real-time chat functionality
- **Structure**:
  ```
  src/
  ├── controllers/     # suggestion, chat
  ├── models/         # chat
  ├── routes/         # Chatbot API endpoints
  ├── middleware/     # Chat authentication
  ├── utils/          # WebSocket utilities
  ├── config/         # AI service configurations
  └── tests/          # Chatbot service tests
  ```

## 📦 Shared Common Package (@dizhtime/common)

### **Purpose**

Centralized utilities and types shared across all microservices to eliminate code duplication and ensure consistency.

### **Structure**

```
packages/dizhtime-common/
├── src/
│   ├── http/
│   │   └── httpStatus.ts      # HTTP status codes and response handlers
│   └── index.ts               # Main export file
├── examples/
│   └── usage.example.ts       # Usage examples for developers
├── dist/                      # Compiled JavaScript output
├── package.json               # Package configuration
├── tsconfig.json             # TypeScript configuration
├── README.md                 # Package documentation
└── SETUP.md                  # Setup and migration guide
```

### **Key Features**

- **HttpStatusCode Enum**: Standardized status codes (e.g., `HttpStatusCode.OK` instead of `200`)
- **ResponseHandler Class**: Consistent API response formatting
- **ApiResponse Interface**: Type-safe response structure
- **TypeScript Support**: Full type definitions and IntelliSense

### **Usage Example**

```typescript
import { HttpStatusCode, ResponseHandler } from "@dizhtime/common";

// Success response
const response = ResponseHandler.success(
  userData,
  "User retrieved successfully"
);
res.status(response.statusCode).json(response);

// Error response
const errorResponse = ResponseHandler.error(
  HttpStatusCode.NOT_FOUND,
  "User not found"
);
res.status(errorResponse.statusCode).json(errorResponse);
```

## 🔄 Development Workflow

### **File Naming Convention**

- Pattern: `filename.foldername.ts`
- Examples:
  - `database.config.ts` (in config folder)
  - `auth.controllers.ts` (in controllers folder)
  - `user.models.ts` (in models folder)

### **File Headers**

All files must include standardized headers:

```typescript
//=================================================================================================================
// [WHAT THIS FILE NAME]
//=================================================================================================================
// [Simple description of the file's purpose]
//=================================================================================================================
```

### **Branch Naming Convention**

- **Feature**: `feature/service-name/feature-description`
- **Bug Fix**: `bugfix/service-name/bug-description`
- **Hotfix**: `hotfix/service-name/issue-description`
- **Release**: `release/version-number`

Examples:

- `feature/user-service/add-payment-integration`
- `bugfix/restaurant-service/menu-validation-error`

### **Commit Message Standards**

```
type(scope): brief description

Detailed explanation of changes (if needed)

Examples:
- feat(user-service): add payment integration with Stripe
- fix(restaurant-service): resolve menu validation error
- docs(common): update API response documentation
- refactor(delivery-service): optimize geolocation tracking
```

### **API Documentation Requirements**

- All controllers must include comprehensive API documentation
- Include request/response examples
- Document error scenarios and status codes
- Use standardized response format from @dizhtime/common

## 🚀 Deployment Architecture

### **Containerization**

- Each service runs in its own Docker container
- Docker Compose for local development
- Kubernetes for production deployment

### **Environment Management**

- **Development**: Local Docker containers
- **Staging**: Cloud-based testing environment
- **Production**: Scalable cloud infrastructure

### **Service Communication**

- **Internal**: Service-to-service REST API calls
- **External**: API Gateway as single entry point
- **Real-time**: WebSocket connections for chat and tracking

## 📊 Monitoring and Logging

### **Logging Strategy**

- Centralized logging using shared logger utility
- Structured JSON logs for better parsing
- Service-specific log levels and categories

### **Health Checks**

- Individual service health endpoints
- API Gateway health aggregation
- Database connection monitoring

## 🔐 Security Architecture

### **Authentication & Authorization**

- JWT-based authentication
- Role-based access control (RBAC)
- Service-to-service authentication

### **Data Protection**

- Input validation and sanitization
- Rate limiting and throttling
- HTTPS/TLS encryption

## 📈 Scalability Considerations

### **Horizontal Scaling**

- Stateless service design
- Load balancing across service instances
- Database connection pooling

### **Performance Optimization**

- Caching strategies
- Database indexing
- API response optimization

## 👥 Team Structure

- **Lead**: Ajai
- **Email**: null
- **Development**: Microservice-focused teams
- **Shared Utilities**: Common package maintenance team

## 📚 Documentation Links

- **Project Rules**: [project.rules.md](./project.rules.md)
- **API Documentation**: [swagger.yaml](./swagger.yaml)
- **Common Package Setup**: [packages/dizhtime-common/SETUP.md](./packages/dizhtime-common/SETUP.md)
- **Common Package Usage**: [packages/dizhtime-common/README.md](./packages/dizhtime-common/README.md)

---

**Last Updated**: 1 June 2025
**Version**: 1.0.0
**Maintained by**: DizhTime Development Team
