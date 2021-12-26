const router = require('express').Router();
const {
    RegistrationUser
} = require('../controllers/regController');

router.post('/registration', RegistrationUser);

module.exports = router;