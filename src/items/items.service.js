const knex = require("../db/connection");

const list = () => {
  return knex("items").select("*").orderBy("quantity_in_stock", "desc");
};

const searchItem = (searchTerm) => {
  console.log("searchTerm for knex", searchTerm);
  return knex("items")
    .select("*")
    .whereRaw(
      `name`,
      "like",
      `%${searchTerm}%`,
      "or",
      "name",
      "like",
      `"%${searchTerm}%"`
    )
    .orderBy("name", "desc");
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
  console.log("updatedItem:", updatedItem);
  return knex("items")
    .select("*")
    .where({ id: updatedItem.id })
    .update(updatedItem, "*")
    .then((updatedRecords) => updatedRecords[0]);
};

const destroy = (id) => {
  return knex("items").select("*").where({ id }).del();
};

module.exports = {
  list,
  read,
  create,
  update,
  searchItem,
  destroy,
};
