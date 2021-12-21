const knex = require("../db/connection");

const list = () => {
  return knex("categories").select("*");
};

const read = (id) => {
  return knex("categories").select("*").where({ id });
};

module.exports = { list, read };
