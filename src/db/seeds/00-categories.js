exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          name: "Electronics",
          description:
            "All electronics, computers, devices, gadgets, lighting, and equipment.",
        },
        {
          name: "Furniture",
          description: "Tables, chairs, beds, and dressers.",
        },
        {
          name: "Tools",
          description:
            "Drills, saws, cutters, gauges, rulers, and measurement.",
        },
      ]);
    });
};
