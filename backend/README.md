# Finance Dashboard Backend

A production-ready REST API for managing financial records, built with **Node.js**, **Express**, and **TypeScript**. Features role-based access control, JWT authentication, and full Swagger documentation.

---

## Tech Stack

| Layer          | Technology                   |
| -------------- | ---------------------------- |
| Backend        | Node.js, Express, TypeScript |
| Database       | MongoDB (via Mongoose)       |
| Authentication | JWT                          |
| Validation     | Zod                          |
| Documentation  | Swagger                      |
| Dev Tooling    | tsx, nodemon                 |

---

## Features

### Authentication

- Register users with roles: `admin`, `analyst`, `viewer`
- Login and receive a JWT token
- Protect routes with JWT middleware
- Role-based access control (RBAC)

### Financial Records

- Full CRUD operations
- Soft delete functionality
- Filter by type, category, and date range
- Pagination support
- Ownership check via `createdBy` field

### Dashboard Summary

- Total income, total expenses, and net balance
- Category-wise totals
- Monthly trends
- Recent 5 financial records

---

## Project Structure

```
finance-dashboard-backend/
├── src/
│   ├── controllers/
│   │   ├── auth.controllers.ts        # Register, login, me
│   │   ├── record.controllers.ts      # CRUD for financial records
│   │   └── dashboard.controllers.ts   # Summary, trends, recent records
│   ├── middleware/
│   │   ├── auth.middleware.ts         # JWT protection
│   │   ├── role.middleware.ts         # Role-based access control
│   │   └── validate.middleware.ts     # Zod request validation
│   ├── models/
│   │   ├── user.model.ts
│   │   └── record.model.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── record.routes.ts
│   │   └── dashboard.routes.ts
│   ├── validators/
│   │   └── auth.validators.ts
│   └── server.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd finance-dashboard-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

```env
PORT=4000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

### 4. Run in development

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
npm start
```

---

## API Reference

### Auth

| Method | Endpoint             | Description           | Access        |
| ------ | -------------------- | --------------------- | ------------- |
| `POST` | `/api/auth/register` | Register a new user   | Public        |
| `POST` | `/api/auth/login`    | Login and receive JWT | Public        |
| `GET`  | `/api/auth/me`       | Get current user info | Authenticated |

### Financial Records

| Method   | Endpoint           | Description                         | Access        |
| -------- | ------------------ | ----------------------------------- | ------------- |
| `GET`    | `/api/records`     | List records (filters + pagination) | Authenticated |
| `POST`   | `/api/records`     | Create a new record                 | Authenticated |
| `GET`    | `/api/records/:id` | Get a single record                 | Authenticated |
| `PUT`    | `/api/records/:id` | Update a record (owner only)        | Authenticated |
| `DELETE` | `/api/records/:id` | Soft delete a record (owner only)   | Authenticated |

### Dashboard

| Method | Endpoint                  | Description                   | Access        |
| ------ | ------------------------- | ----------------------------- | ------------- |
| `GET`  | `/api/dashboard/summary`  | Income, expenses, net balance | Authenticated |
| `GET`  | `/api/dashboard/category` | Category-wise totals          | Authenticated |
| `GET`  | `/api/dashboard/trends`   | Monthly trend data            | Authenticated |
| `GET`  | `/api/dashboard/recent`   | Last 5 financial records      | Authenticated |

---

## API Documentation

Interactive Swagger UI is available at:

```
http://localhost:4000/api-docs
```

All endpoints are documented with request/response schemas. Use the **Try it out** button to test directly in the browser.

---

## Roles

| Role      | Permissions                                |
| --------- | ------------------------------------------ |
| `admin`   | Full access to all routes and records      |
| `analyst` | Read access to all records; can create own |
| `viewer`  | Read-only access                           |

---

## Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript         |
| `npm start`     | Start the compiled production server     |
