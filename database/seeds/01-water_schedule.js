exports.seed = function (knex) {
    return knex('water_schedule')
      .del()
      .then(function () {
        return knex('water_schedule').insert([
          {
           water_schedule: "Once Per Week"
          },
          {
           water_schedule: "Twice Per Week"
          },
          {
           water_schedule: "Every 14 Days"
          },
        ]);
      });
  };
  