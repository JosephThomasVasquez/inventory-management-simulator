exports.up = function (knex) {
  return knex.schema.createTable("item_images", (table) => {
    table.increments("id").primary();
    table.string("url", 2000);
    table.jsonb("images");
    table.text("image_urls");
    table.specificType("images_array", "text ARRAY");
    // link to Item ID as item_id from items table
    table.integer("item_id").unsigned().notNullable();
    table
      .foreign("item_id")
      .references("id")
      .inTable("items")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("item_images");
};
