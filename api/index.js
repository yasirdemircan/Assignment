const express = require('express')
var cors = require('cors')
const { register } = require('./methods/register')
require('dotenv').config()
const { login } = require("./methods/login")
const jwt = require("jsonwebtoken")

const app = express()
//use express json parser
app.use(express.json())
//Use cors middleware to avoid cors errors
app.use(cors({
  origin: "*"
}))


//Mock orders
const orders = require("./items").orders

// GET /orders route
app.get('/orders', (req, res) => {
  // Send the orders array as JSON with status code 200 (OK)
  res.status(200).json(orders)
})

app.post("/login", async (req, res) => {
  let data = await req.body

  await login(data).then((user) => {

    const token = jwt.sign({
      email: user.email,

      role: "user"
    }, process.env.API_SECRET, { expiresIn: "1 hr" })

    const tokenObj = { error: false, value: token }
    res.write(JSON.stringify(tokenObj))
  }).catch((err) => {
    const error = { error: true, value: err.message }
    res.write(JSON.stringify(error))
  })

  res.end()
})

app.post("/register", async (req, res) => {


  let data = await req.body

  await register(data).then(() => {
    const success = {
      error: false,
      data: "User registered successfuly!"
    }
    res.write(JSON.stringify(success))
  }).catch((err) => {
    const error = {
      error: true,
      data: err.message
    }
    res.write(JSON.stringify(error))


  })


  res.end()

})

// Start the server
const port = 1337 // Listen port 1337
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})