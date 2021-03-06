exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("sku");
    table.string("name");
    table.string("model");
    table.text("description");
    table.date("release_date");
    table.decimal("price");
    table.integer("quantity_in_stock");
    table.decimal("weight_in_lbs");
    table.string("main_imageUrl", 2000).defaultTo("/icons8-camera-100.png");
    table.string("image_1", 2000).defaultTo("");
    table.string("image_2", 2000).defaultTo("");
    table.string("image_3", 2000).defaultTo("");
    table.string("image_4", 2000).defaultTo("");
    table.string("image_5", 2000).defaultTo("");
    // link to category id as category_id from categories table
    table.integer("category_id").unsigned().notNullable();
    table.string("status").defaultTo("Available");
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
