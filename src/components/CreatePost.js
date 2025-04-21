import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setMsg('You must be logged in to create a post.');
      return;
    }

    try {
      const res = await axios.post('http://127.0.0.1:5000/posts', {
        title,
        content
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setMsg(res.data.message);
      setTimeout(() => {
        navigate('/myposts');
      }, 1000);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Failed to create post');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Content"
          rows={6}
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        /><br /><br />
        <button type="submit">Submit</button>
        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
}

export default CreatePost;
