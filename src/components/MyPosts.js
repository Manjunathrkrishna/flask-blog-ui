import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchMyPosts = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setMsg('You are not logged in.');
        return;
      }

      try {
        const res = await axios.get('https://flask-blog-api-jmhz.onrender.com/myposts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPosts(res.data);
      } catch (err) {
        setMsg(err.response?.data?.error || 'Failed to fetch posts');
      }
    };

    fetchMyPosts();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>My Posts</h2>
      {msg && <p style={{ color: 'red' }}>{msg}</p>}
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default MyPosts;
