const User = require('../models/userModel');

const RegistrationUser = async (req, res) => {
    // const { login, password } = req.body;
        // if (!data) {
        //     const user = new User({ login, password });
        //     user
        //         .save()
        //         .then((result) => res.send(user))
        //         .catch((error) => console.log(error));
        // }

    try {
        const { login, password } = req.body;
        const findResults = await User.findOne({login});
        if (findResults) {
            res.status(400).json({message: 'User alredy exist'});
        } else {
            const user = new User({ login, password });
            user
                .save()
                .then((result) => res.redirect('/profile'))
                .catch((error) => console.log(error));
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(400).json({message: 'Registration error'});
    }
};

module.exports = {
    RegistrationUser,
}