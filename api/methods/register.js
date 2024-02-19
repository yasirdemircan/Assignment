const uri = "mongodb://localhost:27017"
const { userModel } = require("../schemas/userSchema")
require('dotenv').config()
var mongoose = require('mongoose')
mongoose.connect(uri, { dbName: "Users" })

var bcrypt = require("bcrypt")

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function () {
    console.log("Db is open")
})

exports.register = async function (data) {

    try {
        await mongoose.connect(uri)

        const user = new userModel({
            email: data.email,
            password: bcrypt.hashSync(data.password, 8),
            createTime: new Date().getTime()
        })

        await user.save()


    } catch (e) {

        throw (new Error(e.message))

    }
}