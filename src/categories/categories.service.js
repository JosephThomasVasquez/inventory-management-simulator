const knex = require("../db/connection");

const list = () => {
  return knex("categories").select("*").orderBy("name", "asc");
};

const listCategoryItems = (id) => {
  return knex("categories as c")
    .join("items as i", "c.id", "i.category_id")
    .select("i.*")
    .where({ category_id: id });
};

const read = (id) => {
  return knex("categories").select("*").where({ id });
};

const create = (category) => {
  console.log("categoryData:", category);
  return knex("categories")
    .insert(category)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
};

const update = (updatedCategory) => {
  console.log("updated:", updatedCategory);
  return knex("categories")
    .select("*")
    .where({ id: updatedCategory.id })
    .update(updatedCategory, "*")
    .then((updatedRecords) => updatedRecords[0]);
};

module.exports = { list, listCategoryItems, read, create, update };
