const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db/database')
const app = require('../../index')
const Organizations = db.model('organizations')
const { describe, beforeEach, it } = require('mocha')

//this spec is meant to test the available api routes (get and post)


describe('Organizations routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/organizations/', () => {
    const newOrg = {
      orgName: 'testName1',
      orgType: 'public',
      employeeCount: 10,
      startDate: '2021-06-20'
    }

    beforeEach(() => {
      return Organizations.create({
        orgName: "testName2",
        orgType: "private",
        employeeCount: 20,
        startDate: "2020-06-20"
      })
    })

    it('POST /api/organizations', async () => {
      const res = await request(app)
        .post('/api/organizations')
        .send(newOrg)
        .expect(200)

      expect(res.body.orgName).to.be.equal(newOrg.orgName)
      expect(res.body.orgType).to.be.equal(newOrg.orgType)
      expect(res.body.employeeCount).to.be.equal(newOrg.employeeCount)
      expect(res.body.startDate).to.be.equal(newOrg.startDate)
    })


    it('GET /api/organizations', async () => {
      const res = await request(app)
        .get('/api/organizations?orgParam=testName2')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].orgName).to.be.equal('testName2')
      expect(res.body[0].orgType).to.be.equal('private')
      expect(res.body[0].employeeCount).to.be.equal(20)
      expect(res.body[0].startDate).to.be.equal('2020-06-20')
    })
  })
})
