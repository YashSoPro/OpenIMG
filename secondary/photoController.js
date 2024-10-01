// photoController.js
const express = require('express');
const Photo = require('./Photo'); // Adjust according to your file structure
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const photos = await Photo.getAll();
    res.json(photos);
  } catch (error) {
    res.status(500).send('Error fetching photos');
  }
});

router.post('/', async (req, res) => {
  try {
    const newPhoto = req.body;
    await Photo.add(newPhoto);
    res.status(201).send('Photo added');
  } catch (error) {
    res.status(500).send('Error adding photo');
  }
});

module.exports = router;
