const knex = require("../db/connection");

const list = () => {
  return knex("items").select("*");
};

const read = (id) => {
  return knex("items").select("*").where({ id });
};

const create = (item) => {
  console.log("itemData:", item);
  return knex("items")
    .insert(item)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
};

module.exports = { list, read, create };
