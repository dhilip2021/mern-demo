const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 128

    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 128

    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true

    }
})

module.exports = mongoose.model("UserModels")