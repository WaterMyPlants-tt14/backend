const router = require('express').Router();
const restricted = require('../middleware/restricted');
const Users = require('./users-model');

router.get('/', (req, res, next) => {
    Users.findByFilter(req.body)
    .then(filteredUser => {
        res.status(200).json(filteredUser);
    })
    .catch(next);
});

router.put('/', restricted, (req, res, next) => {
    Users.update(req.decodedToken.user_id, req.body)
    .then(() => {
        res.status(201).json({message: `Success`});
    })
    .catch(next);
});

module.exports = router;
