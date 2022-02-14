const knex = require("../db/connection");

const searchItem = (searchTerm) => {
  console.log("searchTerm for knex", searchTerm);
  return knex("items")
    .select("*")
    .where(`name`, "like", `${searchTerm}%`)
    .orderBy("name", "desc");
};

module.exports = { searchItem };
