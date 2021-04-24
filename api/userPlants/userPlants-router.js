const router = require("express").Router();
const userPlants = require("./userPlants-model");

router.get("/", (req, res, next) => {
    userPlants.findById(id)
        .then(plants => res.status(200).json(plants))
        .catch(next);
});

module.exports = router;
