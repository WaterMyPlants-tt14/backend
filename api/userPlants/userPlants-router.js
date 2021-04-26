const router = require("express").Router();
const UserPlants = require("./userPlants-model");

// [GET] - /api/userplants
router.get("/", (req, res, next) => {
    UserPlants.findById(id)
        .then(plants => res.status(200).json(plants))
        .catch(next);
});


// [POST] - /api/userplants
router.post('/', (req,res,next) => {
    res.json('added new plant');
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
