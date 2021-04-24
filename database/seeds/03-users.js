exports.seed = function (knex) {
    return knex('users')
      .del()
      .then(function () {
        return knex('users').insert([
          {
              email: "test@test.com",
              password: "password1",
              phone: 5555555555,
              name: "TT-14"
          },
        ]);
      });
  };
  