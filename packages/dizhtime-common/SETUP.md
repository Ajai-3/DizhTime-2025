# DizhTime Common Package Setup Guide

## 🚀 Quick Setup

### 1. Install Dependencies
From the root directory:
```bash
npm install
```

### 2. Build the Common Package
```bash
npm run build:common
```

### 3. Add to Your Service
In your service's `package.json`:
```json
{
  "dependencies": {
    "@dizhtime/common": "workspace:*"
  }
}
```

## 📦 Adding to All Services

Update each service's package.json:

### User Service
```bash
cd services/user-service
npm install @dizhtime/common@workspace:*
```

### Admin Service
```bash
cd services/admin-service
npm install @dizhtime/common@workspace:*
```

### Restaurant Service
```bash
cd services/restaurant-service
npm install @dizhtime/common@workspace:*
```

### Delivery Boy Service
```bash
cd services/delivery-boy-service
npm install @dizhtime/common@workspace:*
```

### Chatbot Service
```bash
cd services/chatbot-service
npm install @dizhtime/common@workspace:*
```

## 🔧 Development Workflow

### Making Changes to Common Package
1. Edit files in `packages/dizhtime-common/src/`
2. Build the package: `npm run build:common`
3. Changes will be available to all services

### Auto-rebuild During Development
```bash
npm run dev:common
```

## ✅ Migration Checklist

- [ ] Replace all raw HTTP status codes (200, 404, etc.) with `HttpStatusCode.OK`, `HttpStatusCode.NOT_FOUND`
- [ ] Update controller return types to use `ApiResponse<T>`
- [ ] Replace manual response objects with `ResponseHandler` methods
- [ ] Update error handling to use standardized responses
- [ ] Test all endpoints to ensure consistent response format

## 🎯 Benefits

✅ **No more code duplication** across services  
✅ **Consistent API responses** throughout the application  
✅ **Type safety** with TypeScript  
✅ **Easy maintenance** - update once, apply everywhere  
✅ **Better developer experience** with standardized utilities
