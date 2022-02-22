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

const searchById = (id) => {
  const ret = knex("users").select("*").where({ id }).first();
  console.log("id:", ret);
  return ret;
};

const read = (email) => {
  return knex("users").select("*").where({ email: email });
};

const create = (user) => {
  console.log("userData:", user);
  return knex("users")
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
  searchById,
  read,
  create,
  destroy,
};
