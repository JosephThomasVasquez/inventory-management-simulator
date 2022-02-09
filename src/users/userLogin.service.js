const knex = require("../db/connection");

const list = () => {
  return knex("users").select("*");
};

const searchByUsername = (user_name) => {
  const ret = knex("users").select("*").where({ user_name: user_name }).first();
  console.log("user_name", ret);
  return ret;
};

const read = (user_name, email) => {
  return knex("users")
    .select("*")
    .where("user_name", user_name)
    .orWhere("email", email);
};

const create = (user) => {
  console.log("userData:", user);
  return knex("items")
    .insert(user)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
};

const destroy = (id) => {
  return knex("users").select("*").where({ id }).del();
};

module.exports = { list, searchByUsername, read, create, destroy };
