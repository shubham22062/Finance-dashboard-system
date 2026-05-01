# Finance System

A full-stack finance management application with user authentication, role-based access control, transaction tracking, and analytics dashboard.

## 🚀 Tech Stack

### Backend

- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Zod
- **API Documentation:** Swagger/OpenAPI

### Frontend

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS

---

## 📁 Project Structure

### Backend Structure

```
backend/
├── src/
│   ├── server.ts                 # Application entry point
│   ├── config/
│   │   ├── db.config.ts         # MongoDB connection configuration
│   │   └── swagger.ts           # Swagger API documentation setup
│   ├── controllers/
│   │   ├── auth.controllers.ts  # Authentication logic (login, register)
│   │   ├── dashboard.controllers.ts  # Dashboard data controllers
│   │   └── record.controllers.ts     # Transaction/record controllers
│   ├── middleware/
│   │   ├── auth.middleware.ts   # JWT authentication middleware
│   │   ├── role.middleware.ts   # Role-based access control middleware
│   │   └── validate.middleware.ts  # Request validation middleware
│   ├── models/
│   │   ├── record.models.ts      # Transaction/Record Mongoose models
│   │   └── user.models.ts        # User Mongoose models
│   ├── routes/
│   │   ├── auth.routes.ts        # Authentication API routes
│   │   ├── dashboard.routes.ts   # Dashboard API routes
│   │   └── record.routes.ts      # Records API routes
│   ├── utlis/
│   │   └── jwt.ts               # JWT token utilities
│   └── validators/
│       └── auth.validators.ts   # Input validation schemas
├── package.json
├── tsconfig.json
└── README.md
```

### Frontend Structure

```
frontend/
├── src/
│   ├── main.tsx                 # React application entry point
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # Global application styles
│   ├── index.css                # Tailwind CSS imports
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── navbar.tsx           # Navigation bar component
│   │   ├── sidebar.tsx          # Sidebar navigation component
│   │   ├── ProtectedRoutes.tsx # Protected route wrapper
│   │   └── RoleProtectedRoute.tsx  # Role-based route protection
│   ├── context/
│   │   ├── AuthContext.tsx      # Authentication context provider
│   │   └── ThemeContext.tsx     # Theme (light/dark) context
│   └── pages/
│       ├── Analytics.tsx        # Analytics/dashboard page
│       ├── Dashboard.tsx        # Main dashboard page
│       ├── landing.tsx          # Landing page
│       ├── SignIn.tsx           # Login page
│       ├── SignUp.tsx           # Registration page
│       ├── Transactions.tsx     # Transactions list page
│       └── User.tsx             # User management page
├── public/                      # Public static files
├── index.html                   # HTML entry point
├── package.json
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── README.md
```

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18+)
- MongoDB (local or cloud instance)

### Backend Setup

```bash
cd backend
npm install
# Create .env file with required environment variables
npm run dev
```

The backend server will start on `http://localhost:3000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend application will start on `http://localhost:5173`

---

## 📝 API Endpoints

### Authentication

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | User login        |
| GET    | `/api/auth/me`       | Get current user  |

### Records/Transactions

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/api/records`     | Get all records   |
| POST   | `/api/records`     | Create new record |
| PUT    | `/api/records/:id` | Update record     |
| DELETE | `/api/records/:id` | Delete record     |

### Dashboard

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| GET    | `/api/dashboard/stats`     | Get dashboard statistics |
| GET    | `/api/dashboard/analytics` | Get analytics data       |

---

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (Admin, User)
- Password hashing with bcrypt
- Protected routes with middleware
- Input validation with Zod

---

## 📄 License

ISC License

---

Built with ❤️ using modern web technologies.
