const db = require('../../database/dbConfig');

function all() {
    return db("species as s")
        .join("water_schedule as ws", "s.water_id", "ws.water_id")
        .select("s.species_id", "s.plant_name", "s.plant_scientific_name", "s.plant_image", "ws.water_schedule")
        .orderBy("s.species_id");
}

module.exports = {
    all,
};
