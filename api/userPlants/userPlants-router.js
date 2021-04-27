const router = require("express").Router();
const UserPlants = require("./userPlants-model");
const { checkNewUserPlantPayload } = require('../middleware/middleware');
const restricted = require('../middleware/restricted');

// [GET] - /api/userplants
router.get("/", restricted, (req, res, next) => {
    const { user_id } = req.decodedToken;
    UserPlants.findById(user_id)
        .then(plants => res.status(200).json(plants))
        .catch(next);
});


// [POST] - /api/userplants
router.post('/', checkNewUserPlantPayload, restricted, async (req,res,next) => {
    const newPlant = {...req.body, user_id: req.decodedToken.user_id};
    try {
        const plant = await UserPlants.addPlant(newPlant);
        res.status(200).json(plant);
    } catch (err) {
        next(err);
    }
});

// [PUT] - /api/userplants
router.put('/:user_plant_id', async (req,res,next) => {
    
    const {user_plant_id} = req.params;

    if(!user_plant_id){
        res.status(404).json({message: 'plant doesnt exists or invalid'});
    }

    // middleware to check if body is good? geto i know 😅
    !req.body ? res.json(401).json({message: 'sorry no data found'}) : req.body; 

    try {
        const updatedPlant = await UserPlants.updatePlant(user_plant_id,req.body);
        res.status(200).json(updatedPlant);

    } catch (err) {
        next(err);
    }


});

// [DELETE] - /api/userplants
router.delete('/:user_plant_id', async (req,res,next) => {
    try {
        await UserPlants.del(req.params.user_plant_id);
        res.status(200).json({message: 'plant deleted'});
    } catch (err) {
        next(err);
    }
});


module.exports = router;
