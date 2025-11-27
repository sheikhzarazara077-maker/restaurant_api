# Restaurant Ordering API

A RESTful API for managing a restaurant's **menu**, **customers**, and **orders**. Built with **Node.js** and **Express.js**, using an **in-memory database**. JWT-based authentication is implemented for secure access to protected routes.

---

## Table of Contents

- [Project Structure](#project-structure)  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [Routes](#routes)  
  - [Menu Routes](#menu-routes)  
  - [Customer Routes](#customer-routes)  
  - [Order Routes](#order-routes)  
  - [Auth Routes](#auth-routes)  
- [Authentication](#authentication)  
- [Middleware](#middleware)  
- [Running the Project](#running-the-project)  
- [Testing with Postman](#testing-with-postman)

---

## Project Structure

```
restaurant-api/
│
├── node_modules/
├── .env
├── package.json
├── .gitignore
├── README.md
│
├── config/
│   ├── appConfig.js
│   └── dbConfig.js
│
└── src/
    ├── server.js
    ├── app.js
    ├── models/
    ├── middleware/
    │   ├── logger.js
    │   ├── 404handler.js
    │   ├── errorHandler.js
    │   └── auth.js
    ├── database/
    │   └── memory.js
    ├── routes/
    │   ├── menuRoutes.js
    │   ├── customerRoutes.js
    │   ├── orderRoutes.js
    │   └── authRoutes.js
    └── controllers/
        ├── menuController.js
        ├── customerController.js
        ├── orderController.js
        └── authController.js
```

---

## Features

- Manage **Menu Items**: Add, update, delete, and view items.
- Manage **Customers**: Add and view customer details.
- Manage **Orders**: Create orders, add items, update status, view orders.
- JWT-based authentication for protected routes.
- Input validation using **express-validator**.
- Centralized error handling and logging.

---

## Getting Started

1. Clone the repository
```bash
git clone <repository_url>
cd restaurant-api
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root:
```
PORT=5000
JWT_SECRET=your_super_secret_here
JWT_EXPIRES_IN=1h
```

4. Run the server in development mode
```bash
npm run dev
```

---

## Routes

### Menu Routes
- `POST /menu/add` – Add menu item
- `GET /menu` – View all menu items
- `PUT /menu/:id` – Update menu item
- `DELETE /menu/:id` – Delete menu item

### Customer Routes
- `POST /customers/add` – Add customer
- `GET /customers` – View customers

### Order Routes (Protected)
- `POST /orders/add` – Create order
- `GET /orders` – View all orders
- `GET /orders/:id` – View specific order
- `PUT /orders/update-status/:id` – Update order status
- `PUT /orders/update-order/:id` – Add items to order

### Auth Routes
- `POST /auth/signup` – Register new customer
- `POST /auth/login` – Login and receive JWT token

---

## Authentication

- Protected routes require **JWT token** in the header.
- Header format: `Authorization: Bearer <token>`
- JWT is signed with `JWT_SECRET` from `.env` and expires in 1 hour.

---

## Middleware

- `logger.js` – Logs HTTP method and URL for each request.
- `404handler.js` – Handles unmatched routes.
- `errorHandler.js` – Centralized error handling.
- `auth.js` – Protects routes using JWT authentication.

---

## Running the Project

```bash
npm run dev  # Development mode with nodemon
npm start    # Production mode
```

Server runs on `http://localhost:<PORT>`

---

## Testing with Postman

1. Test `/auth/signup` and `/auth/login` to obtain JWT token.
2. Include token in **Authorization** header as `Bearer <token>` for protected `/orders` routes.
3. Test all routes using appropriate HTTP methods and JSON payloads.

---

**Note:** This project uses in-memory arrays (`menu`, `customers`, `orders`) as temporary storage. All data will reset when the server restarts.