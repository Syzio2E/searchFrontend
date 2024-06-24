import React, { useState } from 'react';
import axios from 'axios';
import './form.css';


const Form = ({setPosts}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [city, setCity] = useState('');
//   const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, content, city };

    try {
      const response = await axios.post('http://localhost:8000/addpost', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Post created:', response.data);
      if (response.status === 201) {
        // Clear the form
        setTitle('');
        setContent('');
        setCity('');
        // Update the posts state
        setPosts((prevPosts) => [...prevPosts, response.data]);
        setShowForm(false)
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    showForm && (
      <div className="add-post-form">
        <div className="form-header">
          <h1>Add:</h1>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>City:</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Select a city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Phoenix">Phoenix</option>
            </select>
          </div>
          <button type="submit">Add Hotel</button>
        </form>
      </div>
    )
  );
};

export default Form;
