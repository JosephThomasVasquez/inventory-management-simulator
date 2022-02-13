const knex = require("../db/connection");

const list = () => {
  return knex("items").select("*");
};

const read = (id) => {
  return knex("items").select("*").where({ id }).first();
};

const create = (item) => {
  console.log("itemData:", item);
  return knex("items")
    .insert(item)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
};

const update = (updatedItem) => {
  return knex("items")
    .select("*")
    .where({ id: updatedItem.id })
    .update(updatedItem, "*")
    .then((updatedRecords) => updatedRecords[0]);
};

const destroy = (id) => {
  return knex("items").select("*").where({ id }).del();
};

module.exports = { list, read, create, update, destroy };
