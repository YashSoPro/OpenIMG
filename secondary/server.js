// server.js
const express = require('express');
const cors = require('cors');
const photoRoutes = require('./photoController'); // Adjust according to your file structure

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/photos', photoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
