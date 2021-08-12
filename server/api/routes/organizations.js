const router = require('express').Router()
const Organizations = require('../../db/models/organizations')
const Sequelize = require('sequelize');
const Op = Sequelize.Op


router.get('/', async (req, res, next) => {
  try {
    const searchParam = req.query.orgParam
    let employeeSearchInt = Number(searchParam)

    if (Number.isInteger(employeeSearchInt)) {
      const foundOrgs = await Organizations.findAll({
        where: {
          employeeCount: `${searchParam}`
        }
      })

      if (!foundOrgs.length) {
        res.send([{ orgName: 'no results found :(' }])
      } else {
        res.send(foundOrgs)
      }

    } else if (!Date.parse(searchParam) === false) {
      const foundOrgs = await Organizations.findAll({
        where: {
          startDate: `${searchParam}`
        }
      })
      if (!foundOrgs.length) {
        res.send([{ orgName: 'no results found :(' }])
      } else {
        res.send(foundOrgs)
      }
    } else {
      const foundOrgs = await Organizations.findAll({
        where: {
          [Op.or]: [
            { orgName: { [Op.like]: `%${searchParam}%` } }, { orgType: { [Op.like]: `%${searchParam}%` } }]
        }
      })
      if (!foundOrgs.length) {
        res.send([{ orgName: 'no results found :(' }])
      } else {
        res.send(foundOrgs)
      }
    }

  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const formBody = req.body
    const createdOrg = await Organizations.create(formBody)

    if (createdOrg) {
      res.status(200).send(createdOrg)
    } else {
      res.sendStatus(500)
    }

  } catch (error) {
    next(error)
  }
})



module.exports = router
