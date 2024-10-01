// Leaderboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/photos'); // Adjust the API endpoint as needed
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.title} width="100" />
            <h2>{image.title}</h2>
            <p>Votes: {image.votes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
