const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, index: true },
    password: String,
    publicKey: String,
    privateKey: String,
    createTime: Number

}, {

})

exports.userModel = mongoose.model("User", userSchema)