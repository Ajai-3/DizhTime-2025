# @dizhtime/common

Shared utilities and types for DizhTime microservices architecture.

## Installation

```bash
npm install @dizhtime/common
```

## Usage

### HTTP Status Codes and Response Handler

```typescript
import { HttpStatusCode, ResponseHandler, ApiResponse } from '@dizhtime/common';

// Using status codes
const statusCode = HttpStatusCode.OK; // Instead of 200

// Creating success responses
const successResponse = ResponseHandler.success(userData, "User retrieved successfully");

// Creating error responses
const errorResponse = ResponseHandler.error(
  HttpStatusCode.NOT_FOUND,
  "User not found"
);

// Creating created responses
const createdResponse = ResponseHandler.created(newUser, "User created successfully");
```

### Type Definitions

```typescript
import { ApiResponse } from '@dizhtime/common';

// Use in your controller return types
async function getUser(id: string): Promise<ApiResponse<User>> {
  // Your logic here
  return ResponseHandler.success(user);
}
```

## Features

- ✅ Standardized HTTP status codes
- ✅ Consistent API response format
- ✅ TypeScript support
- ✅ Centralized error handling
- ✅ Easy to use response handlers

## Team

- **Lead**: Ajai
- **Email**: dizhtime@gmail.com
