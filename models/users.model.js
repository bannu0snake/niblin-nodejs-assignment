const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
            default: "",
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
       
    }
);

module.exports = mongoose.model("user", userSchema);
