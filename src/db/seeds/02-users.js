exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          first_name: "Joe",
          last_name: "Tech",
          user_name: "jtv",
          email: "joetv.tech@gmail.com",
          password: "123123123",
          is_admin: true,
        },
        {
          id: 2,
          first_name: "Ervin",
          last_name: "Howell",
          user_name: "Antonette",
          email: "Shanna@melissa.tv",
          password: "123123123",
          is_admin: false,
        },
        {
          id: 3,
          first_name: "Clementine",
          last_name: "Bauch",
          user_name: "Samantha",
          email: "Nathan@yesenia.net",
          password: "123123123",
          is_admin: false,
        },
        {
          id: 4,
          first_name: "Leanne",
          last_name: "Graham",
          user_name: "Bret",
          email: "Sincere@april.biz",
          password: "123123123",
          is_admin: false,
        },
      ]);
    });
};
