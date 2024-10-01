// User.js
const db = require('./db'); // You will create a db.js file for database connection

const User = {
  getAll: () => {
    return db.query('SELECT * FROM users');
  },
  // Add other user-related methods as needed
};

module.exports = User;
