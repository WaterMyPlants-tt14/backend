const { findByFilter } = require("../users/users-model");

const checkLoginCredentials = (req, res, next) => {
    const { email, password } = req.body;
    if (
        !email ||
        !password ||
        email === '' ||
        password === '') {
        next({ message: "Please provide a username and password", status: 400 });
    }
    else {
        next();
    }
};

const checkEmailUnique = async (req, res, next) => {
    const { email } = req.body;
    const existingEmail = await findByFilter({ email });
    if (existingEmail) {
        next({ message: `${email} already exists.`, status: 400 });
    } else {
        next();
    }
};

const checkEmailExists = async (req, res, next) => {
    const { email } = req.body;
    const user = await findByFilter({ email });
    if (!user) {
        next({ message: "Invalid credentials", status: 401 });
    } else {
        req.body.user = user;
        next();
    }
};

const checkNewUserPayload = (req, res, next) => {
    const { email, password, phone, name } = req.body;
    switch (true) {
        case (!email || !email.match(/^\S+@\S+\.\S+$/)):
            next({ message: "Please provide a valid email.", status: 400 });
            break;
        case (!password || password.length < 8):
            next({ message: "Please provide a valid password.", status: 400 });
            break;
        case (!phone || phone.match(/\d/g).length !== 10):
            next({ message: "Please provide a valid phone number.", status: 400 });
            break;
        case (!name || name === ''):
            next({ message: "Please provide a name.", status: 400 });
            break;
        default:
            next();
    }
};

const formatNewUserPayload = (req, res, next) => {
    const { email, password, phone, name } = req.body;
    req.body.email = email.trim();
    req.body.password = password.trim();
    req.body.phone = formatPhoneNumber(phone);
    req.body.name = name.trim();
    next();
};

const checkNewUserPlantPayload = (req, res, next) => {
    const { plant_nickname, water_day } = req.body;
    if (!plant_nickname) {
        next({ status: 400, message: 'Please provide a nickname for you lil green friend' });
    } else if (plant_nickname.length > 255) {
        next({ status: 400, message: 'Sorry the International Plant Union has restricted plant names to 255 characters or less' });
    } else if (!water_day) {
        next({ status: 400, message: 'Please provide a day to begin watering your plant' });
    } else if (typeof water_day !== 'number') {
        next({ status: 400, message: 'Sorry water days only identify as numbers' });
    } else {
        req.body.plant_nickname = plant_nickname.trim();
        req.body.water_day = water_day;
        next();
    }
};

//Helper functions
function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

module.exports = {
    checkLoginCredentials,
    checkEmailUnique,
    checkEmailExists,
    checkNewUserPayload,
    formatNewUserPayload,
    checkNewUserPlantPayload
};
