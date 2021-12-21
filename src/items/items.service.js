const knex = require("../db/connection");

const list = () => {
  return knex("items").select("*");
};

module.exports = { list };
