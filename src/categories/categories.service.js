const knex = require("../db/connection");

const list = () => {
  return knex("categories").select("*");
};

const listCategoryItems = (id) => {
  console.log("id:", id);
  return knex("categories as c")
    .join("items as i", "c.id", "i.category_id")
    .select("i.*")
    .where({ category_id: id });
};

const read = (id) => {
  return knex("categories").select("*").where({ id });
};

module.exports = { list, read, listCategoryItems };
