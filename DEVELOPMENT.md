# DizhTime Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation
```bash
# Install all dependencies (monorepo)
npm install

# Install workspace dependencies
npm run install:all
```

### Development Scripts

#### Frontend Development
```bash
# Start frontend (React + Vite + Tailwind)
npm run dev:frontend
# or
npm run dev

# Build frontend
npm run build:frontend
```

#### Backend Services
```bash
# Start individual services
npm run dev:user        # User Service (Port 3001)
npm run dev:admin       # Admin Service (Port 3005)
npm run dev:restaurant  # Restaurant Service (Port 3002)
npm run dev:delivery    # Delivery Service (Port 3003)
npm run dev:chatbot     # Chatbot Service (Port 3004)
npm run dev:gateway     # API Gateway (Port 3000)

# Start all services at once
npm run start:services
```

#### Common Package
```bash
# Build common package
npm run build:common

# Develop common package
npm run dev:common
```

## 🧪 Testing

### Frontend Test Component
Visit: `http://localhost:5173/test`

This displays the DizhTime test component with project status.

### API Gateway Health Check
Visit: `http://localhost:3000/health`

## 📁 Project Structure

```
DizhTime/
├── packages/
│   └── dizhtime-common/      # Shared utilities, types, constants
├── services/                 # Microservices
│   ├── api-gateway/          # Port 3000
│   ├── user-service/         # Port 3001
│   ├── restaurant-service/   # Port 3002
│   ├── delivery-boy-service/ # Port 3003
│   ├── chatbot-service/      # Port 3004
│   └── admin-service/        # Port 3005
├── frontend/                 # React + TypeScript + Tailwind
└── package.json              # Monorepo root
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for routing
- **React Toastify** for notifications

### Backend
- **Node.js** with TypeScript
- **Express.js** for API servers
- **MongoDB** with Mongoose
- **Zod** for validation (instead of Joi)
- **JWT** for authentication
- **Socket.io** for real-time features

### Development Tools
- **ESLint** + **Prettier** for code quality
- **Husky** for git hooks
- **Jest** for testing
- **Nodemon** for development

## 🔧 Configuration

### Environment Variables
Create `.env` files in each service directory:

```bash
# Example .env for services
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/dizhtime
JWT_SECRET=your-secret-key
```

### Tailwind CSS
Configured in `frontend/tailwind.config.ts` with custom DizhTime theme colors.

## 📝 Development Notes

1. **Monorepo Structure**: All dependencies are managed at the root level
2. **Shared Code**: Use `@dizhtime/common` package for shared utilities
3. **Naming Convention**: Files follow `ComponentName + FolderName` pattern
4. **Features Structure**: Frontend organized by user types (customer, admin, restaurant, delivery)
5. **Validation**: Using Zod instead of Joi for better TypeScript integration

## 🚨 Common Issues

### "Missing script: dev" Error
Make sure you're running commands from the root directory, not individual service directories.

### TypeScript Errors
All types are managed globally. If you see missing type errors, check if the dependency is added to root `package.json`.

### Tailwind Not Working
Ensure PostCSS config exists in `frontend/postcss.config.js` and Tailwind is imported in `frontend/src/index.css`.

## 📞 Support

- **Lead**: Ajai
- **Email**: dizhtime@gmail.com
- **Project**: DizhTime Food Delivery Platform
