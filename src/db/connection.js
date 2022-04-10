// Set configuration files

// Change this to "production" for deployment to heroku then use > git push heroku main
const environment = process.env.NODE_ENV || "production";
const config = require("../../knexfile")[environment];
const knex = require("knex").knex(config);

module.exports = knex;
