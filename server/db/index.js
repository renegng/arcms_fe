'use strict'

const db = require('./database')
const Organizations = require('./models/organizations')

// The purpose of this module is to bring my Sequelize instance (`db`) together
// with my model(s)




module.exports = {
  db, Organizations
}
