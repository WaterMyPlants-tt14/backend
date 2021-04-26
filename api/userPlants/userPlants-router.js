const router = require("express").Router();
const UserPlants = require("./userPlants-model");

// [GET] - /api/userplants
router.get("/", (req, res, next) => {
    UserPlants.findById(id)
        .then(plants => res.status(200).json(plants))
        .catch(next);
});


// [POST] - /api/userplants
router.post('/', async (req,res,next) => {
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
