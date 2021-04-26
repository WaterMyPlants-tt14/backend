const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('../users/users-model.js');
const mw = require('../middleware/middleware.js');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js');

router.post('/register', mw.checkNewUserPayload, mw.formatNewUserPayload, mw.checkEmailUnique, async (req, res, next) => {
    let user = req.body;

    //const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = await bcrypt.hashSync(user.password, 8);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(next);
});

router.post('/login', mw.checkLoginCredentials, mw.checkEmailExists, (req, res, next) => {
    let { name, email, phone, password, } = req.body;
    if (req.body.user && bcrypt.compareSync(password, req.body.user.password)) {
        const token = makeToken(req.body.user);

        res.status(200).json({
            message: `Welcome, ${req.body.user.name}!`,
            token
        });
    } else {
        next({ message: "Invalid Credentials", status: 401 });
    }

});

function makeToken(user) {
    const payload = {
        subject: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
    };
    const options = {
        expiresIn: "500s"
    };
    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
