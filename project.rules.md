# DizhTime Project Rules & Guidelines

## 📋 Project Overview

**DizhTime** is a food delivery platform built with microservice architecture using TypeScript and Node.js.

**📧 Project Email**: dizhtime@gmail.com
**👨‍💼 Team Lead**: Ajai

> **👋 New Team Members**: This guide is simple and easy to follow. Read each section carefully!

## 🏗️ Simple Project Structure

### Our 5 Main Services

1. **user-service** - User accounts & authentication
2. **restaurant-service** - Restaurant & menu management
3. **delivery-boy-service** - Delivery tracking
4. **admin-service** - Admin dashboard
5. **chatbot-service** - Customer support

### Each Service Folder Structure

```
your-service/
├── src/
│   ├── config/        (settings files)
│   ├── controllers/    (main logic)
│   ├── models/        (data models)
│   ├── routes/        (API routes)
│   ├── utils/         (helper functions)
│   └── tests/         (test files)
└── package.json
```

## 📁 File Naming Rules

### Pattern: `filename.foldername.ts`

- **Config**: `database.config.ts`, `server.config.ts`
- **Controllers**: `auth.controller.ts`, `user.controller.ts`
- **Models**: `user.model.ts`, `restaurant.model.ts`
- **Routes**: `auth.routes.ts`, `user.routes.ts`
- **Utils**: `logger.utils.ts`, `validation.utils.ts`
- **Tests**: `auth.test.ts`, `user.test.ts`

## 🔧 What We Use (Technology Stack)

### Backend (Server Side)

- **TypeScript** - Main programming language
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database

### Frontend (User Interface)

- **React + TypeScript** - User interface
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 📝 File Header Rule (MANDATORY)

Every file MUST start with this header:

```typescript
//=================================================================================================================
// [WHAT THIS FILE NAME]
//=================================================================================================================
// [Simple description of the file's purpose]
//=================================================================================================================
```

**Examples:**

```typescript
//=================================================================================================================
// USER AUTHENTICATION CONTROLLER
//=================================================================================================================
// This file handles user login, registration, and password management
//=================================================================================================================

//=================================================================================================================
// DATABASE CONFIGURATION
//=================================================================================================================
// This file contains database connection settings for the user service
//=================================================================================================================
```

## � Status Code Rule (MANDATORY)

**NEVER use hardcoded status code like 200, 404, 500**

✅ **Use status code constants:**

```typescript
import { StatusCodes } from "http-status-codes.ts";

// Good - Use constants
return res.status(StatusCodes.OK).json({ success: true });
return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid data" });
return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Not authorized" });
return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
return res
  .status(StatusCodes.INTERNAL_SERVER_ERROR)
  .json({ error: "Server error" });
```

❌ **Don't do this:**

```typescript
// Bad - Hardcoded numbers
return res.status(200).json({ success: true });
return res.status(404).json({ error: "Not found" });
```

## �🚀 Simple Work Rules

### Before You Commit Code

**MANDATORY STEPS:**

1. ✅ Create API documentation for any new controllers
2. ✅ Write good commit messages (see examples below)
3. ✅ Test your code works

### Git Branch Naming Rules

**Pattern**: `type/service-name-description`

**Branch Types:**

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `test/` - Adding tests

**Good Branch Examples:**

```
feature/user-service-login
feature/restaurant-service-menu-crud
fix/delivery-service-location-bug
docs/api-authentication-guide
test/admin-service-analytics
```

### Git Commit Message Format

**Pattern**: `type(service): what you did`

**Types to use:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `test` - Adding tests

**Good Commit Examples:**

```
feat(user-service): add user login controller
- Created login endpoint
- Added password validation
- Wrote API documentation

fix(restaurant-service): fix menu price validation
- Allow decimal prices
- Update validation rules
- Add test cases

docs(api): update user authentication docs
- Add login/register examples
- Document error responses

test(delivery-service): add location tracking tests
- Test GPS coordinate validation
- Add distance calculation tests
```

### API Documentation Examples

**MANDATORY**: Create API docs for every controller endpoint using this format:

```yaml
# Example: User Login API Documentation
/api/auth/login:
  post:
    summary: User login
    description: Authenticate user with email and password
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              email:
                type: string
                example: "user@example.com"
              password:
                type: string
                example: "password123"
    responses:
      200:
        description: Login successful
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                  example: true
                token:
                  type: string
                  example: "jwt.token.here"
                user:
                  type: object
                  properties:
                    id:
                      type: string
                      example: "user123"
                    email:
                      type: string
                      example: "user@example.com"
      400:
        description: Invalid credentials
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                  example: false
                message:
                  type: string
                  example: "Invalid email or password"
```

**Simple API Doc Template:**

```yaml
/api/your-endpoint:
  method:
    summary: What it does
    description: Detailed explanation
    requestBody: # What data to send
    responses: # What you get back
      200: # Success
      400: # Error
```

## 🔒 Security Basics

### Keep These Safe

- ❌ Never commit passwords or API keys
- ✅ Use `.env` files for secrets
- ✅ Hash passwords with bcrypt
- ✅ Validate all user inputs

## 📋 Simple Checklist

### Before You Push Code

- [ ] File has proper header comment
- [ ] API documentation created/updated
- [ ] Good commit message written
- [ ] Code tested and working
- [ ] No passwords in code

## ❌ Don't Do These Things

- ❌ Put passwords in code
- ❌ Skip file headers
- ❌ Use bad commit messages
- ❌ Skip API documentation
- ❌ Use wrong file naming
- ❌ Forget to test code

## 📞 Need Help?

**Contact**: ajaipjayan@mail.com

**Remember**: Follow these rules step by step, and ask questions if confused!

---

**Last Updated**: Project initialization
**Team**: DizhTime Development Team
