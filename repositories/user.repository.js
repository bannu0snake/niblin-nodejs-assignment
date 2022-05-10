const User = require("../models/users.model");

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const findUserById = async (id) => {
    return await User.findOne({ _id: id });
};

const addUser = async (name, email, password) => {
    try {
        const user = new User({
            name,
            email,
            password,
        });
        return user.save();
    } catch (error) {
        return error.message;
    }
};






module.exports = {
    findUserByEmail,
    findUserById,
    addUser,
};
