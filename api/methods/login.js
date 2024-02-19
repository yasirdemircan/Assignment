const uri = "mongodb://localhost:27017"
const { userModel } = require("../schemas/userSchema")

var mongoose = require('mongoose')
mongoose.connect(uri, { dbName: "Users" })

var bcrypt = require("bcrypt")

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function () {
    console.log("Db is open")
})

exports.login = async function (user) {



    try {
        //Catch this if user doesnt exist
        const data = await userModel.findOne({ email: user.email })
        let passwordVerify

        if (data) {
            passwordVerify = bcrypt.compareSync(user.password, data.password)
        } else {
            throw new Error("The user does not exist")
        }


        //Verify if password true
        if (passwordVerify) {

            console.log("Success")
            return user
        } else {

            throw new Error("Could not verify the user")
        }


    } catch (e) {

        throw (new Error(e.message))

    }
}