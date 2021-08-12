# arcms_fe

Asistencia Remota CMS - Front End

## Getting started

1. If running locally Fork and clone this repo then execute `npm install`
2. can run using `npm start` or follow the next step
3. Start the build process and your application with: `npm run start:dev`. If you're using Windows, you may need to execute `npm run start-server` and `npm run build-watch` separately (in their own terminal tabs).
4. After starting the app it should be available at localhost:3000
5. Check out the starting seed file in `seed.js` - you can run it by executing `npm run seed`
6. Checkout the unit tests by executing `npm test`

### The tools

This project was made using a very light react/redux front-end with material ui components for the inputs/buttons. The back-end is in node, SQLite3 with Sequelize ORM was used for the dB, and express for api routing. Mocha/Chai was used for the testing suite.
