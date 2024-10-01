// db.js
const mysql = require('mysql');
const config = require('./config');

const pool = mysql.createPool(config);

module.exports = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  },
};
