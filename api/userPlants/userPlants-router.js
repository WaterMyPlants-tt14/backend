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

    if(!req.body){
        // middleware to check if body is good?
        res.json(401).json({message: 'sorry couldnt post plant'});
    }
    

    try {
        const newPlant = await UserPlants.addPlant(req.body);
        res.json(newPlant);
    } catch (err) {
        next(err);
    }
});

// [PUT] - /api/userplants
router.put('/', (req,res,next) => {
    res.json('plant update');
});

// [DELETE] - /api/userplants
router.put('/', (req,res,next) => {
    res.json('deleted plant');
});


module.exports = router;
