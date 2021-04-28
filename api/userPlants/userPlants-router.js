const router = require("express").Router();
const UserPlants = require("./userPlants-model");
const { checkNewUserPlantPayload, checkUserPlantExists } = require('../middleware/middleware');


// [GET] - /api/userplants
router.get("/", (req, res, next) => {
    const { user_id } = req.decodedToken;
    UserPlants.findById(user_id)
        .then(plants => res.status(200).json(plants))
        .catch(next);
});


// [POST] - /api/userplants
router.post('/', checkNewUserPlantPayload, async (req,res,next) => {
    const newPlant = {...req.body, user_id: req.decodedToken.user_id};
    try {
        const plant = await UserPlants.addPlant(newPlant);
        res.status(200).json(plant);
    } catch (err) {
        next(err);
    }
});

// [PUT] - /api/userplants
router.put('/', checkNewUserPlantPayload, restricted, checkUserPlantExists, async (req,res,next) => {
    const user_plant_id = req.body.user_plant_id;
    const plantInfo = {
        user_id: req.decodedToken.user_id,
        plant_nickname: req.body.plant_nickname,
        water_day: req.body.water_day,
        notes: req.body.notes,
        plant_location: req.body.plant_location,
        species_id: req.body.species_id
    };

    
    try {
        const updatedPlant = await UserPlants.updatePlant(user_plant_id, plantInfo);
        res.status(200).json(updatedPlant);

    } catch (err) {
        next(err);
    }
});

// [DELETE] - /api/userplants

router.delete('/', async (req,res,next) => {
    const {user_plant_id} = req.body;
    try {
        await UserPlants.del(user_plant_id);
        res.status(200).json({message: 'plant deleted'});
    } catch (err) {
        next(err);
    }
});


module.exports = router;
