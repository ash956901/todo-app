# Todo-app

## Project Overview
This is a full-stack to-do application that allows users to add and view tasks in real time. It features a backend API built with Node.js and Express.js, and a frontend interface created using React.js.

---

## Directory Structure
```
todo-app/
|-- backend/
|   |-- node_modules/
|   |-- server.js
|   |-- package.json
|   |-- controllers/
|   |   |-- taskController.js
|   |-- routes/
|       |-- taskRoutes.js
|-- frontend/
    |-- public/
    |-- src/
        |-- components/
        |   |-- TaskForm.js
        |   |-- TaskList.js
        |-- App.js
        |-- index.js
    |-- node_modules/
    |-- package.json
```

---

## Backend Setup

The backend is a simple Node.js server that provides a REST API to handle tasks. It features two endpoints:
- **GET /api/tasks** - Retrieves all tasks
- **POST /api/tasks** - Adds a new task

### Installation & Usage
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The server will be running on `http://localhost:5002`

---

## Frontend Setup

The frontend is built using React and provides an interface for users to add and view tasks.

### Components
- **TaskForm.js** - Form to add a new task
- **TaskList.js** - Displays the list of tasks

### Installation & Usage
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The React app will be running on `http://localhost:3000`

---

## API Endpoints

### **GET /api/tasks**
**Description**: Retrieves all the tasks stored in the application.
**Response**:
```json
[
  { "id": 167231234, "title": "Sample Task" }
]
```

### **POST /api/tasks**
**Description**: Adds a new task to the list.
**Request Body**:
```json
{
  "title": "New Task Title"
}
```
**Response**:
```json
{
  "id": 167231234, 
  "title": "New Task Title"
}
```

---

## File Descriptions

### **Backend Files**
- **server.js** - Entry point for the backend server
- **taskController.js** - Handles logic for task retrieval and creation
- **taskRoutes.js** - Defines routes for the task API

### **Frontend Files**
- **App.js** - Main application component
- **TaskForm.js** - Form component to add new tasks
- **TaskList.js** - Component to display the list of tasks

---

## Technology Stack
- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js, Body-Parser, CORS

---

## How to Run the Project

### 1. Backend
- Navigate to the `backend` folder
- Run the following commands:
  ```bash
  npm install
  npm start
  ```
- The backend server will be running on `http://localhost:5002`

### 2. Frontend
- Navigate to the `frontend` folder
- Run the following commands:
  ```bash
  npm install
  npm start
  ```
- The frontend React app will be running on `http://localhost:3000`

---
