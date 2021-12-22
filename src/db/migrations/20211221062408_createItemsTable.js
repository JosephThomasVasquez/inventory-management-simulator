exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary().unique();
    table.string("sku");
    table.string("name");
    table.string("model");
    table.text("description");
    table.date("release_date");
    table.decimal("price");
    table.integer("quantity_in_stock");
    table.decimal("weight_in_lbs");
    // link to category id as category_id from categories table
    table.integer("category_id").unsigned().notNullable();
    table
      .foreign("category_id")
      .references("id")
      .inTable("categories")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("items");
};