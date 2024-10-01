// voteController.js
const express = require('express');
const Vote = require('./Vote'); // Adjust according to your file structure
const router = express.Router();

router.post('/:id/vote', async (req, res) => {
  const photoId = req.params.id;
  try {
    await Vote.addVote(photoId);
    res.send('Vote added');
  } catch (error) {
    res.status(500).send('Error adding vote');
  }
});

module.exports = router;
