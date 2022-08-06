const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv").config()
const {expressjwt: expressJwt} = require("express-jwt")
uri = process.env.MONGODB_URI
const PORT = process.env.PORT || 9000


//middleware

app.use(express.json())
app.use(morgan("dev"))


// connect to

mongoose.connect(
    uri,
    (err) => {
        if (err) throw err
        console.log("Connected to the DataBase")
    }
)
    




//routes

// NOTE: changed tasks to projects on the front end
app.use("/tasks", require("./routes/taskRouter.js"))
app.use("/supplies", require("./routes/suppliesRouter.js"))
app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms:['HS256']}))




// error handling
// app.use((err, req, res, next) => {
//     console.log(err)
//     return res.send({errMsg: err.message})
// })

// app.use((err, req, res, nexdt) => {
//     console.log(err)
//     if(err.name === "UnauthorizedError") {
//         res.status(err.status)
//     }
//     return res.send({message: err.message})
// })




app.listen(PORT, () => {
    console.log(`The Server is running on Port ${PORT}`)
})
