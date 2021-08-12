'use strict'

const router = require('express').Router()
const OrgsRouter = require('./routes/organizations')

router.use('/organizations', OrgsRouter)


router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
