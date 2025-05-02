<body>
  <h1>🧩 Full Stack Application</h1>
  <p>A complete full-stack application with a <strong>Node.js + Express</strong> backend and a <strong>React + Vite</strong> frontend.</p>

  <h2>🚀 How to Run Locally</h2>

  <h3>🛠 Prerequisites</h3>
  <p>Make sure you have installed:</p>
  <ul>
    <li><strong>Node.js</strong> (v18 or higher)</li>
    <li><strong>npm</strong> (comes with Node.js)</li>
    <li><strong>MongoDB</strong> (local or cloud like MongoDB Atlas)</li>
  </ul>

  <h3>📁 Project Structure</h3>
  <pre><code>
root/
│
├── backend/   # Node.js + Express API
└── frontend/  # React + Vite frontend
  </code></pre>

  <h3>⚙️ Backend Setup (<code>/backend</code>)</h3>
  <p>Open your terminal and go to the <code>backend/</code> directory:</p>
  <pre><code>cd backend</code></pre>

  <p>Install backend dependencies:</p>
  <pre><code>npm install</code></pre>

  <p>Create a <code>.env</code> file in the <code>backend/</code> folder and add:</p>
  <pre><code>
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
  </code></pre>

  <p>Start the backend server:</p>
  <p><strong>For development (with auto-reload):</strong></p>
  <pre><code>npm run dev</code></pre>

  <p><strong>For production:</strong></p>
  <pre><code>npm start</code></pre>

  <p><strong>Backend runs at:</strong> 👉 <code>http://localhost:8000</code></p>

  <h3>🎨 Frontend Setup (<code>/frontend</code>)</h3>
  <p>Open another terminal, and go to the <code>frontend/</code> directory:</p>
  <pre><code>cd frontend</code></pre>

  <p>Install frontend dependencies:</p>
  <pre><code>npm install</code></pre>

  <p>(Optional) Create a <code>.env</code> file inside frontend/ with:</p>
  <pre><code>VITE_API_URL=http://localhost:8000/api</code></pre>

  <p>Start the frontend development server:</p>
  <pre><code>npm run dev</code></pre>

  <p><strong>Frontend runs at:</strong> 👉 <code>http://localhost:5173</code></p>

  <h3>📦 Technologies Used</h3>
  <ul>
    <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose, JWT Authentication</li>
    <li><strong>Frontend:</strong> React, Vite, Redux Toolkit, React Router DOM, Bootstrap 5</li>
  </ul>

  <h3>📈 Deployment</h3>
  <ul>
    <li>Host frontend (Vercel, Netlify)</li>
    <li>Host backend (Render, Railway, VPS, or custom server)</li>
    <li>Connect frontend to the production API URL</li>
  </ul>

  <h3>📥 Requirements Installation</h3>
  <p>Use the provided <code>requirements.txt</code> (for backend if using Python) or <code>package.json</code> to install dependencies:</p>
  <ul>
    <li><code>cd backend</code> → <code>npm install</code></li>
    <li><code>cd frontend</code> → <code>npm install</code></li>
  </ul>

  <p><strong>💡 Note:</strong> Always replace <code>MONGODB_URI</code> with your personal connection string for local or cloud MongoDB.</p>
</body>
</html>
