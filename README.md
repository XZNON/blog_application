🧩 Full Stack Application
A complete full-stack application with a Node.js + Express backend and a React + Vite frontend.

🚀 How to Run Locally
🛠 Prerequisites
Make sure you have installed:

Node.js (v18 or higher)

npm (comes with Node.js)

MongoDB (local or cloud like MongoDB Atlas)

📁 Project Structure

root/
│
├── backend/   # Node.js + Express API
└── frontend/  # React + Vite frontend
⚙️ Backend Setup (/backend)
Open your terminal and go to the backend/ directory:


cd backend
Install backend dependencies:


npm install
Create a .env file in the backend/ folder and add the following variables:


PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the backend server:

For development (with auto-reload):


npm run dev
For production:


npm start
By default, backend runs at:
👉 http://localhost:8000

🎨 Frontend Setup (/frontend)
Open another terminal, and go to the frontend/ directory:


cd frontend
Install frontend dependencies:


npm install
(Optional but recommended) Create a .env file inside frontend/ with:


VITE_API_URL=http://localhost:8000/api
Start the frontend development server:


npm run dev
By default, frontend runs at:
👉 http://localhost:5173

📦 Technologies Used
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT Authentication

Frontend: React, Vite, Redux Toolkit, React Router DOM, Bootstrap 5

📈 Deployment
Host frontend (Vercel, Netlify)

Host backend (Render, Railway, VPS, or server)

Connect frontend to the production API URL.

Install the requirements files in both backend and fronted.
Use your own MONGODB URI for connecting to the server.
