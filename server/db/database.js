'use strict'

// The sole purpose of this module is to establish a connection to my
// sqlite database by creating a Sequelize instance (called `db`).

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')
const { after } = require('mocha')

console.log(chalk.yellow('Opening database connection'))

// create the database instance that can be used in other database files
const db = new Sequelize(`sqlite::memory`, {
  logging: false // so we don't see all the SQL queries getting made
})

module.exports = db

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}

