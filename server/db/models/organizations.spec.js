const {expect} = require('chai')
const { describe, it, beforeEach } = require('mocha')
const db = require('../database')
const Organizations = db.model('organizations')

//this spec is meant to test db model creation


describe('Organizations model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('column definitions and validations', () => {
    it('has a `orgName`, `orgType`, `employeeCount`, and `startDate`', async () => {
      const testOrg = await Organizations.create({
        orgName: "testName3",
        orgType: "public",
        employeeCount: 50,
        startDate: "2020-06-18"
      })

      expect(testOrg.orgName).to.equal('testName3')
      expect(testOrg.orgType).to.equal('public')
      expect(testOrg.employeeCount).to.equal(50)
      expect(testOrg.startDate).to.equal('2020-06-18')
    })

    it('`orgName` is required', async () => {
      const testOrg2 = await Organizations.build()
      return testOrg2.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })

    it('`startDate` is required', async () => {
      const testOrg2 = await Organizations.build()
      return testOrg2.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })

    it('`orgType` is required', async () => {
      const testOrg2 = await Organizations.build()
      return testOrg2.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })


    it('`employeeCount` is required', async () => {
      const testOrg2 = await Organizations.build()
      return testOrg2.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })
  })
})
