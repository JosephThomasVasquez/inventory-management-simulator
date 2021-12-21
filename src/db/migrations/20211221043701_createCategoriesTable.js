exports.up = function (knex) {
  return knex.schema.createTable("categories", (table) => {
    table.increments("id").primary().unique();
    table.string("name");
    table.string("description");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
