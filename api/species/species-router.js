const router = require("express").Router();
const Species = require("./species-model");

router.get("/", (req, res, next) => {
    Species.all()
        .then(species => res.status(200).json(species))
        .catch(next);
});

module.exports = router;
