const db = require('../../database/dbConfig');

function findById(id) {
    return db("user_plants as up")
        .join("species as sp", "up.species_id", "sp.species_id")
        .join("water_schedule as ws", "sp.water_id", "ws.water_id")
        .where("up.user_id", id)
        .select("up.user_plant_id", "up.plant_nickname", "up.plant_location", "up.notes", "up.water_day", "sp.species_id", "sp.plant_name", "sp.plant_scientific_name", "sp.plant_image", "ws.water_schedule");
}

function findUserPlantsByPlantsID(user_plant_id){
    return db('user_plants')
        .where({user_plant_id})
        .first();
}

async function addPlant(newPlant){
    const [user_plant_id] = await db('user_plants')
        .returning('user_plant_id')
        .insert(newPlant);
    // finds plant by plant id
    return findUserPlantsByPlantsID(user_plant_id);
}


async function updatePlant(user_plant_id,updatedPlant){
    const [id] = await db('user_plants')
        .where({user_plant_id})
        .returning('user_plant_id')
        .update(updatedPlant);

    return findUserPlantsByPlantsID(id);
}

module.exports = {
    findById,
    addPlant,
    updatePlant
};
