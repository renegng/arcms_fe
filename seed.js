const {db} = require('./server/db')
const {green, red} = require('chalk')

const Organizations = require('./server/db/models/organizations')


const organizations = [{

  orgName: "The Watchtower",
  startDate: "1997-04-04",
  employeeCount: 200,
  orgType: "public"

}, {
  orgName: "The Fortress of Solitude",
  startDate: "1942-08-17",
  employeeCount: 1,
  orgType: "private"
}, {
  orgName: "Titans Tower",
  startDate: "1980-10-26",
  employeeCount: 50,
  orgType: "public"
}, {
  orgName: "The Batcave",
  startDate: "1942-09-12",
  employeeCount: 3,
  orgType: "private"
}]



const seed = async () => {
  await db.sync({force: true})
  await Promise.all(organizations.map(org => {
    return Organizations.create(org);
  }))

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
