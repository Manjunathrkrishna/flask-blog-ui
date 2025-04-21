# 🖥️ Flask Blog UI – React Frontend

A React-based frontend for a secure blog platform powered by a Flask + JWT backend. This interface supports user authentication, post creation, and dashboard-style blog management.

---

## 🔐 Key Features

- ✅ User Registration & Login
- 🔐 JWT-based authentication
- 📝 Create and View personal blog posts
- 🚫 Protected routes (My Posts, Create Post)
- 🚀 Responsive routing using React Router
- ⚙️ Axios-based API communication
- 🔄 Logout & session management

---

## ⚛️ Tech Stack

- **Frontend**: React, React Router DOM, Axios
- **Backend**: [Flask JWT Blog API](https://github.com/Manjunathrkrishna/flask-blog-api-jwt)
- **Auth**: JWT (stored in `localStorage`)
- **API**: RESTful (via Axios)
- **Dev Tools**: VS Code, Thunder Client, GitHub

---

## 📁 Folder Structure

```
flask-blog-ui/
│
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── MyPosts.js
│   │   ├── CreatePost.js
│   │   └── Navbar.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ How to Run the App Locally

### 🔹 1. Clone the repo

```bash
git clone https://github.com/Manjunathrkrishna/flask-blog-ui.git
cd flask-blog-ui
```

### 🔹 2. Install dependencies

```bash
npm install
```

### 🔹 3. Start the app

```bash
npm start
```

The app will open at `http://localhost:3000`

📝 Make sure your Flask backend is running at `http://127.0.0.1:5000`

---

## 🔗 API Endpoints Used

- `POST /register` – Create new user
- `POST /login` – Login and get JWT
- `GET /myposts` – Get user's blog posts
- `POST /posts` – Create a new post

---

## 🙌 Author

Developed with ❤️ by **Manjunath R**  
📧 [mrkrishna6325@gmail.com](mailto:mrkrishna6325@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/manjunath-ramakrishna-14266915a)

---

## 💡 Future Ideas

- ✏️ Edit / delete posts
- 🌐 Deploy on Render / Vercel
- 🔒 Auto token refresh & route guards
- 🖼️ Add page styling with Tailwind or Material UI

---

## 📦 Backend Repo

👉 [Flask JWT Blog API (Backend)](https://github.com/Manjunathrkrishna/flask-blog-api-jwt)
