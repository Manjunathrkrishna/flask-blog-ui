# ⚛️ React Frontend – Flask Blog Platform

This is the **React.js frontend** for a secure blog platform powered by a Flask backend. It includes user authentication, protected routes, blog post management, and a clean, functional UI.

---

## 🔐 Features

- ✅ User Registration
- ✅ Login with JWT
- ✅ Token-based protected routes
- ✅ Create blog posts
- ✅ View your own posts
- ✅ Logout functionality
- ✅ Simple navigation bar
- ✅ React Router DOM based routing

---

## ⚙️ Tech Stack

- React.js (v18+)
- Axios
- React Router DOM
- Bootstrap (optional styling)
- LocalStorage (for token handling)
- Flask (backend API)

---

## 🔗 Related Repositories

- **Backend (Flask API)**: [flask-blog-api-jwt](https://github.com/Manjunathrkrishna/flask-blog-api-jwt)

---

## 📁 Folder Structure

```
flask-blog-ui/
├── public/
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
```

---

## 🛠️ How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/Manjunathrkrishna/flask-blog-ui.git
cd flask-blog-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

> React will run on `http://localhost:3000`

---

## 🔌 API Reference

This app connects to the Flask backend running on:

```bash
http://127.0.0.1:5000
```

Ensure your Flask backend is running before testing login/register/post features.

---

## 🙌 Author

Made with 💙 by **Manjunath R**  
📧 [mrkrishna6325@gmail.com](mailto:mrkrishna6325@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/manjunath-ramakrishna-14266915a)

---

## ✅ Want to Add Next?

- 🔐 Route protection (redirect if not logged in)
- ✏️ Edit/Delete posts
- 🌐 Deployment (Vercel + Render)
