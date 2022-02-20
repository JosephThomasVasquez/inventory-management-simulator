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
    table
      .string("main_imageUrl")
      .defaultTo(
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443301_sd.jpg"
      );
    table.specificType("images_array", "text ARRAY");
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
