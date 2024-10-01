import React from 'react';
import Navbar from './Navbar';
import PhotoGallery from './PhotoGallery';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Weclome to OpenIMG</h1>
      <PhotoGallery />
      <Leaderboard />
    </div>
  );
}

export default App;
