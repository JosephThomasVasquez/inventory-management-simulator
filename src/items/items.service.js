const knex = require("../db/connection");

const list = () => {
  return knex("items").select("*");
};

const read = (id) => {
  return knex("items").select("*").where({ id });
};

module.exports = { list, read };
