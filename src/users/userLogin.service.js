const knex = require("../db/connection");

const list = () => {
  return knex("users").select("*");
};

const searchByUsername = (user_name) => {
  return knex("users").select("*").where({ user_name: user_name }).first();
};

const searchByEmail = (email) => {
  const ret = knex("users").select("*").where({ email: email }).first();
  console.log("email:", ret);
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

module.exports = {
  list,
  searchByUsername,
  searchByEmail,
  read,
  create,
  destroy,
};
