import React, { useState, useEffect } from 'react';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos from backend (API)
    fetch('https://your-backend-url/api/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  return (
    <div>
      <h2>Photo Gallery</h2>
      <div>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.imageUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
