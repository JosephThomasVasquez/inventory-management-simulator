exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE items RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          sku: "XLH4P7t3er",
          name: "Vanilla Scented Candle",
          model: "v1",
          description: "Vanilla-scented candle, perfect for your living room.",
          release_date: "2020-11-30",
          price: 48.25,
          quantity_in_stock: 80,
          weight_in_lbs: 2.3,
          category_id: 2,
        },
        {
          sku: "qomgqdXlNa",
          name: "Rabbit String Lights",
          model: "v1",
          description: "Super cute Rabbit lights!",
          release_date: "2020-11-30",
          price: 19.5,
          quantity_in_stock: 65,
          weight_in_lbs: 2,
          category_id: 1,
        },
        {
          sku: "qKqFPSlSas",
          name: "Rose Wine Decanter",
          model: "v1",
          description:
            "Maintains the taste and smell of the wine. Comes with an elegant rose-shaped brushed steel base.",
          release_date: "2020-11-30",
          price: 199.99,
          quantity_in_stock: 100,
          weight_in_lbs: 8.5,
          category_id: 2,
        },
        {
          sku: "Zr8zQ8SQmp",
          name: "Shake You Wake You Alarm Clock",
          model: "v1",
          description:
            "Alexa-controlled notes and reminders. Choose from 40 different alarm sounds.",
          release_date: "2020-11-30",
          price: 40.0,
          quantity_in_stock: 289,
          weight_in_lbs: 1,
          category_id: 1,
        },
        {
          sku: "giUGNvnn8Q",
          name: "Reserved for the Dog Cushion",
          model: "v1",
          description:
            "Mark your dog's favorite seating area. Removable cover for an easy wash!",
          release_date: "2020-11-30",
          price: 19.99,
          quantity_in_stock: 1100,
          weight_in_lbs: 1,
          category_id: 3,
        },
      ]);
    });
};
