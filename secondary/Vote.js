// Vote.js
const db = require('./db');

const Vote = {
  addVote: (photoId) => {
    return db.query('UPDATE photos SET votes = votes + 1 WHERE id = ?', [photoId]);
  },
  // Other methods as needed
};

module.exports = Vote;
