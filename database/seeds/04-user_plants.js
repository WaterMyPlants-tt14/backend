exports.seed = function (knex) {
    return knex('user_plants')
      .del()
      .then(function () {
        return knex('user_plants').insert([
          {
              plant_nickname: "My Favorite",
              water_day: 1,
              plant_location: "Entryway",
              notes: "My favorite plant. Grows best when listening to Nickelback",
              species_id: 8,
              user_id: 1,
          },
          {
              plant_nickname: "Love Fern",
              water_day: 3,
              plant_location: "Bedroom",
              notes: "We'll have kids when we can prove that we can keep this fern alive",
              species_id: 4,
              user_id: 1,
          },
          {
              plant_nickname: "Doesn't make rubber :(",
              water_day: 7,
              plant_location: "Garage",
              notes: "It's called a rubber tree, but it doesn't seem to grow any rubber. I was going to take it back, but then I felt bad. It's not broken, it's just special",
              species_id: 11,
              user_id: 1,
          },
        ]);
      });
  };
  