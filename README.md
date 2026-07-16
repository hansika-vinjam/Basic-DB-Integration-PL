# Simple MERN Student Attendance Demo

This is a beginner-friendly MERN stack project designed for classroom demonstration. It demonstrates how a React frontend communicates with an Express backend, how Express connects to a local MongoDB database using Mongoose, and how to import external CSV data into MongoDB using MongoDB Compass.

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB Community Server** (running locally on port `27017`)
- **MongoDB Compass** (GUI for MongoDB)

---

## Step 1: Database Setup and CSV Import

1. **Install MongoDB Community Server**: Download and install it from the official website. Ensure the service is running.
2. **Install MongoDB Compass**: This usually comes with the community server. Open it.
3. **Connect to Localhost**: Click "Connect" with the default URI (`mongodb://localhost:27017`).
4. **Create Database & Collection**:
   - Click the **+** (Create database) button.
   - **Database Name**: `student_attendance`
   - **Collection Name**: `students`
   - Click **Create Database**.
5. **Import CSV**:
   - Open the newly created `students` collection.
   - Click **Add Data** -> **Import File**.
   - Select the `students.csv` file located in the root of this repository.
   - Keep the file type as `CSV`.
   - **Important**: Ensure the fields match the schema (`name`, `rollNumber`, `department`, `semester`, `section`).
   - Click **Import**.

---

## Step 2: Backend (Express) Setup

1. Open your terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
   *You should see two messages in the terminal: "Server running on port 5000" and "MongoDB connection SUCCESS".*

---

## Step 3: Frontend (React) Setup

1. Open a **new** terminal window and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to the local URL provided by Vite (usually `http://localhost:5173`).

---

## Step 4: Verification

1. You should see the **Student Attendance** table populated with the data you imported from the CSV via Compass.
2. Click the toggle switch under the **Attendance** column to mark a student as present or absent.
3. Open **MongoDB Compass**, click **Refresh** on the `students` collection, and verify that the `attendance` field has changed from `false` to `true` (or vice versa).

---

## Technical Architecture

- **Database**: MongoDB Community Server (`mongodb://127.0.0.1:27017/student_attendance`)
- **Backend**: Node.js, Express, Mongoose
  - `GET /students` - Fetches all students.
  - `PUT /students/:id/attendance` - Toggles the attendance Boolean.
- **Frontend**: React (Vite), Axios
  - Simple single-page UI fetching and updating data without complex state management libraries or UI frameworks.
