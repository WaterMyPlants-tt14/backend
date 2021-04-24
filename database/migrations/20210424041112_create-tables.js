
exports.up = function(knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments("user_id");
            tbl.string("name",80).notNullable();
            tbl.string("email", 80).notNullable().unique();
            tbl.string("password").notNullable();
            tbl.integer("phone").notNullable().unique();
        })
        .createTable("water_schedule", tbl => {
            tbl.increments("water_id");
            tbl.string("water_schedule",40);
        })
        .createTable("species", tbl => {
            tbl.increments("species_id");
            tbl.string("plant_name", 80).notNullable();
            tbl.string("plant_scientific_name", 80).notNullable().unique();
            tbl.string("plant_image");
            tbl.integer("water_id")
                .notNullable()
                .unsigned()
                .references("water_id")
                .inTable("water_schedule")
                .onUpdate("RESTRICT")
                .onDelete("RESTRICT");
        })
        .createTable("user_plants", tbl => {
            tbl.increments("user_plant_id");
            tbl.string("plant_nickname").notNullable();
            tbl.integer("water_day").notNullable();
            tbl.string("plant_location", 80);
            tbl.varchar("notes");
            tbl.integer("species_id")
                .notNullable()
                .unsigned()
                .references("species_id")
                .inTable("species")
                .onUpdate("RESTRICT")
                .onDelete("RESTRICT");
            tbl.integer("user_id")
                .notNullable()
                .unsigned()
                .references("user_id")
                .inTable("users")
                .onUpdate("RESTRICT")
                .onDelete("RESTRICT");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("user_plants")
        .dropTableIfExists("species")
        .dropTableIfExists("water_schedule")
        .dropTableIfExists("users");
};
