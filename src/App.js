import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';



function App() {
  const [posts, setPosts] = useState([]);
  const [city,setCity] = useState('')
  const [keyword,setKeyword] = useState('')

  const handleSearch = async () => {
    let url = 'http://localhost:8000/getpost';
    if (city || keyword) {
      const queryParams = new URLSearchParams();
      if (city) queryParams.append('city', String(city)); // Ensure city is a string
      if (keyword) queryParams.append('keyword', String(keyword)); // Ensure keyword is a string
      url = `${url}?${queryParams.toString()}`;
    }
    try {
      const response = await axios.get(url);
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  
  

  useEffect(() => {
    fetchHotels();
  }, []);

 const fetchHotels = async () => {
  if(!city || !keyword){
    try {
      const response = await axios.get('http://localhost:8000/getallposts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  };

  return (
    <>
      <Navbar setPosts={setPosts} setCity={setCity} setKeyword={setKeyword} handleSearch={handleSearch}/>
      <div className="cards-container">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} city={post.city} />
        ))}
      </div>
    </>
  );
}

export default App;
