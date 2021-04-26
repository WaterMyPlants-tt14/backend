const router = require('express').Router();
const Users = require('./users-model');

router.get('/', (req, res, next) => {
    Users.findByFilter(req.body)
    .then(filteredUser => {
        res.status(200).json(filteredUser);
    })
    .catch(next);
});

router.put('/', (req, res, next) => {
    Users.update(req.params.id, req.body)
    .then(updatedUser => {
        res.status(201).json(updatedUser);
    })
    .catch(next);
});

module.exports = router;
