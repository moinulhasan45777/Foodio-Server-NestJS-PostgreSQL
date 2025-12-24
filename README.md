# Foodio Sever

Backend server for **Foodio**, built with **Nest.js**, and **PostgreSQL**.  
Handles authentication, user orders, and menu management.

---

## Features

- CRUD operations for food menu items
- CRUD operations for user orders
- RESTful API endpoints
- CORS enabled for frontend integration
- Input validation and error handling

---

## Setup & Run Instructions

### 1. Clone the Repository

```bash
git clone <repo-url>
cd <repo-folder>
```

### 2. Install Dependencies

npm install

### 3. Create a .env file in the root folder with the following variables:

DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=Levidog<3@
DB_NAME=foodiedb2
JWT_SECRET=supersecretkey123
JWT_EXPIRES_IN=1d

### 4. Run the Server

npm run dev
