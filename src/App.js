import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register'; // 👈 import this
import MyPosts from './components/MyPosts';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';





function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* 👈 new route */}
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/create" element={<CreatePost />} /> {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
