# 🚀 Drive Clone – Full Stack Cloud Storage Application

A full-stack **Google Drive–style cloud storage application** built with **Node.js, Express, MongoDB, EJS, and Filebase (S3-compatible object storage)**.  
This project allows users to **register, log in, upload, view, and delete files**, with each user having their own private storage space.

---

## 📌 Features

- 🔐 **User Authentication**
  - Secure registration and login using JWT and encrypted passwords (bcrypt)
  - Session handling with HTTP-only cookies

- ☁️ **Cloud File Storage**
  - File uploads handled by Multer
  - Files stored on **Filebase (S3-compatible + IPFS-backed storage)**
  - File URLs saved in MongoDB

- 👤 **User-Specific Files**
  - Each user sees only their own uploaded files
  - Protected routes prevent unauthorized access

- 🗑️ **File Management**
  - Upload files
  - View files in browser
  - Delete files from Filebase and database

- 🎨 **Frontend with EJS**
  - Interactive UI with TailwindCSS
  - Upload popup modal
  - File listing dashboard

---

## 🛠️ Tech Stack

**Frontend:**
- EJS
- HTML, CSS, TailwindCSS

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (file handling)

**Cloud Storage:**
- Filebase (AWS S3-compatible API)
- AWS SDK v3

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/drive-clone.git
cd drive-clone
3️⃣ Create .env file

Create a .env file in the root folder:

MONGO_URI=mongodb://127.0.0.1:27017/drive_clone
JWT_SECRET=your_jwt_secret

FILEBASE_KEY=your_filebase_key
FILEBASE_SECRET=your_filebase_secret
FILEBASE_BUCKET=your_bucket_name


⚠️ Never upload .env to GitHub.

4️⃣ Start MongoDB

Make sure MongoDB is running locally:

mongod

5️⃣ Run the application
npm start

6️⃣ Open in Browser
http://localhost:3000/user/login

📂 Project Structure
drive-clone/
│
├── config/
│   ├── db.js
│   └── filebase.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── user.model.js
│   └── file.model.js
│
├── routes/
│   ├── index.routes.js
│   ├── user.routes.js
│   └── upload.routes.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── register.ejs
│
├── app.js
├── package.json
└── README.md

🔄 Application Flow
User Login/Register
        ↓
JWT Token Stored in Cookie
        ↓
Access /home (Protected Route)
        ↓
Upload File → Multer → Filebase
        ↓
File URL saved in MongoDB
        ↓
User can View / Delete Files

🔐 Security Features

Passwords hashed using bcrypt

JWT-based authentication

Protected routes

Environment variables for secrets

Secure cloud storage integration

👨‍💻 Author

Dhairya Jindal
📧 dhairyajindal4@gmail.com

🔗 GitHub: https://github.com/dhairya-jindal

🔗 LinkedIn: https://linkedin.com/in/dhairya-jindal
