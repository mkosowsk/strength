var Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/strength', {
  logging: false
});

const User = db.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = {
  db,
  User
};