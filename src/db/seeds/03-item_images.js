exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE item_images RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("item_images").insert([
        {
          url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443301_sd.jpg",
          item_id: 6,
        },
      ]);
    });
};
