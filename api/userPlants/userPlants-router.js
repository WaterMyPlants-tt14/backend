const router = require("express").Router();
const UserPlants = require("./userPlants-model");
const { checkNewUserPlantPayload } = require('../middleware/middleware');

// [GET] - /api/userplants
router.get("/", (req, res, next) => {
    UserPlants.findById(id)
        .then(plants => res.status(200).json(plants))
        .catch(next);
});


// [POST] - /api/userplants
router.post('/', checkNewUserPlantPayload, async (req,res,next) => {

    // middleware to check if body is good? geto i know 😅
    !req.body ? res.json(401).json({message: 'sorry no data found'}) : req.body; 
    
    try {
        const newPlant = await UserPlants.addPlant(req.body);
        res.status(200).json(newPlant);
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
router.put('/', (req,res,next) => {
    res.json('deleted plant');
});


module.exports = router;
