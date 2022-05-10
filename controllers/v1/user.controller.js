const userRepo = require("../../repositories/user.repository");
const userService = require("../../services/user.service");

const getUser = async (req, res) => {
    try {
        const user = await userRepo.findUserById(req.user.id);
        const flr = await userRepo.findAllFollowers(user.followers);
        const flg = await userRepo.findAllFollowing(user.following);
        const finalUser = {
            ...user._doc,
            followers: flr,
            following: flg,
        };
        return res.json({
            status: true,
            message: "User found successfully",
            data: finalUser,
            errors: {},
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            data: {},
            error: err.message,
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const userprofileid = await userRepo.findUserById(req.params.user_id);
        if (!userprofileid) {
            return res.status(400).json({
                status: false,
                message: "There is no profile related to this user",
                data: {},
                errors: userprofileid,
            });
        }
        return res.status(200).json({
            status: true,
            message: "User found successfully",
            data: userprofileid ,
            errors: {},
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: {},
            errors: err,
        });
    }
};



module.exports = {
    getUser,
    getUserById,
};
