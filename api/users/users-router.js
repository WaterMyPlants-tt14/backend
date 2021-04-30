const router = require('express').Router();
const restricted = require('../middleware/restricted.js');
const Users = require('./users-model');

// [GET] - /api/users
router.get('/',restricted, (req, res, next) => {

    
    const {user_id, name} = req.decodedToken;
    console.log(req.decodedToken); 
    // password needs to be dectypted 
    Users.findByFilter({user_id: user_id})
        .then(filteredUser => {
            res.status(200).json(filteredUser);
        })
        .catch(next);
});

// PUT - /api/users
router.put('/',restricted, (req, res, next) => {
    Users.update(req.params.id, req.body)
        .then(updatedUser => {
            res.status(201).json(updatedUser);
        })
        .catch(next);
});

module.exports = router;
