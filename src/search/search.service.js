const knex = require("../db/connection");

const searchItem = (searchTerm) => {
  console.log("searchTerm for knex", searchTerm);

  const splitTerms = searchTerm.split(" ");

  console.log("splitTerms", splitTerms);

  return knex("items")
    .select("*")
    .whereRaw(`name ILIKE ?`, [`%${splitTerms[0]}%`])
    .orderBy("name", "desc");
};

module.exports = { searchItem };
