# Node.js REST API Deployment on AWS EC2 with GitHub Actions

Node.js REST API built with Express and MongoDB, automatically deployed to an AWS EC2 instance via GitHub Actions, with Nginx as a reverse proxy and PM2 for process management.

---

## Project Structure

```
nodejs-ec2/
├── .github/
│   └── workflows/
│       └── node.js.yml     # CI/CD pipeline
├── configs/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── userController.js   # Request handlers
├── models/                 # Mongoose schemas
├── routes/
│   └── userRoutes.js       # API route definitions
├── server.js               # Entry point
└── package.json
```

---

## API Endpoints

| Method | Endpoint      | Description       |
|--------|---------------|-------------------|
| GET    | `/`           | Health check      |
| GET    | `/api/users`  | Get all users     |
| POST   | `/api/users`  | Create a new user |

---

## Access

The API will be available at `http://localhost:8000`.







