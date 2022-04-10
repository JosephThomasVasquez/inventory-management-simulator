exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("user_name").notNullable();
    table.string("password").notNullable();
    table.string("email").notNullable().unique();
    table.string("token");
    table.string("role").defaultTo("user");
    table.boolean("is_admin").defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
