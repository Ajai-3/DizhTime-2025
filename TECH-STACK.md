# DizhTime Tech Stack Guide for Beginners

## 🎯 Complete Technology Stack for DizhTime Food Delivery Platform

This guide explains **what technology to use where** and **why** for each part of your microservice architecture.

---

## 📱 Frontend Technologies

### **React Frontend (Web App)**

#### **Core Technologies:**

```json
{
  "framework": "React 18+",
  "language": "TypeScript",
  "buildTool": "Vite",
  "styling": "Tailwind CSS",
  "routing": "React Router v6"
}
```

#### **State Management:**

- **Redux Toolkit** - For complex app state (user data, cart, orders)
- **React Query/TanStack Query** - For server state management
- **Zustand** - Alternative lightweight state management

#### **UI Components & Icons:**

```bash
# UI Component Libraries
npm install @mui/material @emotion/react @emotion/styled
npm install @headlessui/react @heroicons/react
npm install react-hot-toast  # For notifications

# Icons
npm install lucide-react  # Modern, clean icons
npm install react-icons   # Large icon collection
```

#### **Real-time Features:**

```bash
npm install socket.io-client  # WebSocket for live tracking
npm install @tanstack/react-query  # Server state management
```

#### **Maps & Location:**

```bash
npm install @googlemaps/react-wrapper
npm install @react-google-maps/api
```

### **Mobile App (Optional)**

- **React Native** with TypeScript
- **Expo** for easier development
- **React Navigation** for routing

---

## 🚪 API Gateway

### **Technology Choice: Node.js + Express**

#### **Core Dependencies:**

```bash
npm install express cors helmet morgan
npm install express-rate-limit  # Rate limiting
npm install jsonwebtoken       # JWT handling
npm install http-proxy-middleware  # Proxy requests
```

#### **Why API Gateway?**

- **Single entry point** for all client requests
- **Authentication** and authorization
- **Rate limiting** and throttling
- **Request/response logging**
- **Load balancing**

---

## ⚙️ Microservices Backend

### **Core Technology Stack:**

#### **Runtime & Framework:**

```json
{
  "runtime": "Node.js 18+",
  "framework": "Express.js",
  "language": "TypeScript",
  "packageManager": "npm"
}
```

#### **Essential Dependencies for Each Service:**

```bash
# Core Framework
npm install express cors helmet morgan
npm install @types/express @types/node

# Database & ORM
npm install mongoose          # MongoDB ODM
npm install @types/mongoose

# Authentication & Security
npm install jsonwebtoken bcryptjs
npm install @types/jsonwebtoken @types/bcryptjs

# Validation
npm install joi              # Input validation
npm install @types/joi

# Environment & Config
npm install dotenv
npm install @types/dotenv

# Development
npm install nodemon ts-node typescript
npm install @types/cors @types/helmet @types/morgan
```

---

## 🗄️ Database Strategy

### **Database per Service Pattern:**

#### **User Service Database:**

```yaml
Database: MongoDB
Collections:
  - users (profiles, auth data)
  - user_sessions
  - user_preferences
Why: Flexible schema for user profiles
```

#### **Restaurant Service Database:**

```yaml
Database: MongoDB
Collections:
  - restaurants
  - menus
  - menu_items
  - restaurant_analytics
Why: Document-based for complex menu structures
```

#### **Order Service Database:**

```yaml
Database: MongoDB
Collections:
  - orders
  - order_items
  - order_history
Why: ACID transactions for order consistency
```

#### **Delivery Service Database:**

```yaml
Database: MongoDB + Redis
MongoDB Collections:
  - delivery_boys
  - delivery_assignments
  - delivery_history
Redis:
  - real_time_locations
  - active_deliveries
Why: MongoDB for persistent data, Redis for real-time tracking
```

#### **Admin Service Database:**

```yaml
Database: MongoDB
Collections:
  - admin_users
  - system_logs
  - analytics_data
  - reports
Why: Flexible reporting and analytics
```

#### **Chatbot Service Database:**

```yaml
Database: MongoDB
Collections:
  - chat_sessions
  - chat_messages
  - bot_responses
  - user_interactions
Why: Document storage for conversation data
```

---

## 📨 Message Broker (Communication Between Services)

### **Recommended: RabbitMQ**

#### **Why RabbitMQ over Kafka?**

- **Easier to learn** for beginners
- **Better for small-medium scale**
- **Excellent documentation**
- **Good for request-response patterns**

#### **Setup:**

```bash
# Install RabbitMQ client
npm install amqplib
npm install @types/amqplib

# Docker setup
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

#### **Use Cases:**

- **Order placed** → Notify restaurant service
- **Order accepted** → Notify delivery service
- **Payment processed** → Update order status
- **Delivery completed** → Update all services

### **Alternative: Apache Kafka (For High Scale)**

```bash
# If you expect very high traffic
npm install kafkajs
```

---

## ⚡ Caching Strategy

### **Redis - In-Memory Cache**

#### **Installation:**

```bash
npm install redis
npm install @types/redis

# Docker setup
docker run -d --name redis -p 6379:6379 redis:alpine
```

#### **Where to Use Redis:**

- **User sessions** (JWT tokens)
- **Restaurant menu cache** (frequently accessed)
- **Real-time delivery locations**
- **API response caching**
- **Rate limiting counters**

---

## 🔐 Authentication & Security

### **JWT-Based Authentication:**

#### **Dependencies:**

```bash
npm install jsonwebtoken bcryptjs
npm install @types/jsonwebtoken @types/bcryptjs
```

#### **Security Middleware:**

```bash
npm install helmet          # Security headers
npm install express-rate-limit  # Rate limiting
npm install cors            # CORS handling
npm install express-validator  # Input validation
```

---

## 📍 External APIs & Services

### **Payment Gateway:**

```bash
# Stripe (Recommended for beginners)
npm install stripe
npm install @types/stripe

# Alternative: PayPal
npm install @paypal/checkout-server-sdk
```

### **Maps & Geolocation:**

```bash
# Google Maps API
npm install @googlemaps/google-maps-services-js

# Alternative: Mapbox
npm install @mapbox/mapbox-sdk
```

### **SMS & Email:**

```bash
# Twilio for SMS
npm install twilio
npm install @types/twilio

# SendGrid for Email
npm install @sendgrid/mail
```

### **AI/Chatbot:**

```bash
# OpenAI for chatbot
npm install openai

# Alternative: Dialogflow
npm install @google-cloud/dialogflow
```

---

## 🐳 DevOps & Deployment

### **Containerization:**

```dockerfile
# Dockerfile for each service
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### **Docker Compose for Development:**

```yaml
version: "3.8"
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "5672:5672"
      - "15672:15672"
```

---

## 📊 Monitoring & Logging

### **Logging:**

```bash
npm install winston          # Structured logging
npm install morgan           # HTTP request logging
```

### **Monitoring:**

```bash
npm install prometheus-client  # Metrics collection
```

---

## 🚀 Development Tools

### **Code Quality:**

```bash
npm install -D eslint prettier
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D husky lint-staged  # Git hooks
```

### **Testing:**

```bash
npm install -D jest supertest
npm install -D @types/jest @types/supertest
```

---

## 📦 Package.json Scripts Template

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts"
  }
}
```

---

## 🏗️ Service-Specific Tech Recommendations

### **1. User Service**

#### **Core Dependencies:**

```bash
# Authentication & Security
npm install jsonwebtoken bcryptjs
npm install passport passport-local passport-jwt
npm install express-session connect-mongo

# Email & SMS
npm install nodemailer @sendgrid/mail
npm install twilio

# Payment Integration
npm install stripe @types/stripe
```

#### **Database Schema Example:**

```javascript
// User Model
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  profile: {
    firstName: String,
    lastName: String,
    phone: String,
    addresses: [AddressSchema]
  },
  preferences: {
    cuisine: [String],
    dietary: [String]
  },
  createdAt: Date,
  updatedAt: Date
}
```

### **2. Restaurant Service**

#### **Core Dependencies:**

```bash
# Image Upload
npm install multer cloudinary
npm install @types/multer

# Search & Filtering
npm install fuse.js  # Fuzzy search

# Geospatial Queries
# MongoDB has built-in geospatial support
```

#### **Database Schema Example:**

```javascript
// Restaurant Model
{
  _id: ObjectId,
  name: String,
  description: String,
  cuisine: [String],
  location: {
    type: "Point",
    coordinates: [longitude, latitude]
  },
  menu: [MenuItemSchema],
  ratings: {
    average: Number,
    count: Number
  },
  operatingHours: {
    monday: { open: String, close: String },
    // ... other days
  },
  isActive: Boolean
}
```

### **3. Delivery Service**

#### **Core Dependencies:**

```bash
# Real-time Location
npm install socket.io
npm install @types/socket.io

# Geospatial Calculations
npm install geolib  # Distance calculations
npm install node-geocoder  # Address to coordinates

# Route Optimization
npm install @googlemaps/google-maps-services-js
```

#### **Real-time Tracking Setup:**

```javascript
// Socket.io for live tracking
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("delivery-location-update", (data) => {
    // Update delivery boy location
    // Broadcast to customer
  });
});
```

### **4. Admin Service**

#### **Core Dependencies:**

```bash
# Data Analytics
npm install chart.js chartjs-adapter-date-fns
npm install d3  # Advanced data visualization

# Report Generation
npm install puppeteer  # PDF generation
npm install exceljs    # Excel reports

# Dashboard
npm install express-admin  # Admin panel generator
```

### **5. Chatbot Service**

#### **Core Dependencies:**

```bash
# AI/NLP
npm install openai
npm install @google-cloud/dialogflow
npm install natural  # Natural language processing

# WebSocket for real-time chat
npm install socket.io
npm install @types/socket.io
```

---

## 🌐 Frontend State Management Strategy

### **Redux Toolkit Setup:**

#### **Installation:**

```bash
npm install @reduxjs/toolkit react-redux
npm install @types/react-redux
```

#### **Store Structure:**

```javascript
// store/index.ts
export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    orders: ordersSlice,
    restaurants: restaurantsSlice,
    delivery: deliverySlice,
  },
});
```

#### **When to Use Redux:**

- **User authentication state**
- **Shopping cart data**
- **Order tracking information**
- **Restaurant filters and search**

#### **When to Use React Query:**

- **API data fetching**
- **Server state caching**
- **Background data updates**

---

## 🔄 API Design Patterns

### **RESTful API Structure:**

#### **User Service APIs:**

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/users/addresses
```

#### **Restaurant Service APIs:**

```
GET    /api/restaurants
GET    /api/restaurants/:id
GET    /api/restaurants/:id/menu
POST   /api/restaurants (admin only)
PUT    /api/restaurants/:id
```

#### **Order Service APIs:**

```
POST   /api/orders
GET    /api/orders/user/:userId
GET    /api/orders/:orderId
PUT    /api/orders/:orderId/status
```

### **Response Format (Using @dizhtime/common):**

```javascript
// Success Response
{
  "success": true,
  "statusCode": 200,
  "message": "Order created successfully",
  "data": {
    "orderId": "12345",
    "status": "pending"
  }
}

// Error Response
{
  "success": false,
  "statusCode": 400,
  "message": "Invalid order data",
  "error": "Missing required field: restaurantId"
}
```

---

## 🚀 Deployment Strategy

### **Development Environment:**

```bash
# Local development with Docker
docker-compose up -d  # Start all services

# Individual service development
npm run dev  # Each service runs on different port
```

### **Production Deployment Options:**

#### **Option 1: Cloud Platforms (Beginner Friendly)**

- **Vercel** - Frontend deployment
- **Railway/Render** - Backend services
- **MongoDB Atlas** - Database
- **Redis Cloud** - Caching

#### **Option 2: AWS (Scalable)**

- **EC2** - Virtual servers
- **ECS/EKS** - Container orchestration
- **RDS** - Managed databases
- **ElastiCache** - Redis caching
- **API Gateway** - API management

#### **Option 3: Google Cloud Platform**

- **Cloud Run** - Serverless containers
- **Cloud SQL** - Managed databases
- **Cloud Memorystore** - Redis

---

## 📱 Mobile App Considerations

### **React Native Setup:**

```bash
npx create-expo-app DizhTimeMobile --template
cd DizhTimeMobile
npm install @react-navigation/native
npm install react-native-maps
npm install @react-native-async-storage/async-storage
```

### **Key Mobile Features:**

- **Push notifications** (Expo Notifications)
- **Location services** (Expo Location)
- **Camera for food photos** (Expo Camera)
- **Offline support** (Redux Persist)

---

## 🎯 Beginner's Implementation Order

### **Phase 1: Foundation (Week 1-2)**

1. Set up **User Service** with basic auth
2. Create **React frontend** with login/register
3. Set up **MongoDB** and **Redis**
4. Implement **@dizhtime/common** package

### **Phase 2: Core Features (Week 3-4)**

1. **Restaurant Service** with menu management
2. **Order Service** with basic ordering
3. **API Gateway** setup
4. Frontend **restaurant browsing** and **ordering**

### **Phase 3: Advanced Features (Week 5-6)**

1. **Delivery Service** with tracking
2. **Real-time updates** with Socket.io
3. **Payment integration**
4. **Admin dashboard**

### **Phase 4: Polish (Week 7-8)**

1. **Chatbot Service**
2. **Mobile app** (optional)
3. **Testing** and **deployment**
4. **Performance optimization**

---

## 💡 Pro Tips for Beginners

### **Start Simple:**

- Begin with **one database** (MongoDB) for all services
- Use **HTTP** communication before message queues
- Deploy to **free tiers** first (Vercel, Railway)

### **Learn Gradually:**

- Master **one service** before moving to next
- Add **complexity incrementally**
- Focus on **core features** first

### **Best Practices:**

- Use **TypeScript** everywhere
- Write **tests** from day one
- Keep **services small** and focused
- Document **APIs** thoroughly

---

**Created by**: DizhTime Development Team
**Lead**: Ajai
**Email**: dizhtime@gmail.com
**Last Updated**: December 2024
