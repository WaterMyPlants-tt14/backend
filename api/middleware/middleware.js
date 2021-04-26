

const checkUsernameExists = async (req, res, next) => {
    const {username} = req.body;
    const [user] = await findBy({username});
    if (!user) {
      next({message: "Invalid credentials", status: 401});
    } else {
      req.body.user = user;
      next();
    }
};

const checkNewUserPayload = (req, res, next) => {
    const { email, password, phone, name } = req.body;
    switch(true) {
        case(!email || !email.match(/^\S+@\S+\.\S+$/)):
        next({message: "Please provide a valid email.", status: 400});
        break;
        case(!password || password.length < 8):
        next({message: "Please provide a valid password.", status: 400});
        break;
        case(!phone || !phone.match(/\d/g).length===10):
        next({message: "Please provide a valid phone number.", status: 400});
        break;
        case(!name || name === ''):
        next({message: "Please provide a name.", status: 400});
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
    
function formatPhoneNumber (phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

module.exports = {
    checkUsernameExists,
    checkNewUserPayload,
    formatNewUserPayload,
};
