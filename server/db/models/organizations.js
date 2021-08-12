const DataTypes = require('sequelize');
const db = require('../database');

const Organizations = db.define('organizations', {
  orgName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  employeeCount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orgType: {
    type: DataTypes.STRING,
    allowNull: false
  }
})


module.exports = Organizations
