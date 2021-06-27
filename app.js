//------------------------ [ modules ] ---------------------------
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors')



//---------------------[ Init express app ] ----------------
const app = express();



// ----------------  [ Database connection ] -------------------
mongoose.connect(process.env.db_connection, { useNewUrlParser: true, useUnifiedTopology: true }, err => (err ? console.log("Database connection error ") : console.log("Database connected")))



// ----------------  [ Built in  middleware ] -------------------

app.use(express.static('public'))
app.use(express.json())




//------------------------ [ Imports Routes ] ---------------------------------
const postsRoute = require('./routes/posts')



// ------------------------ [ Custom middleware ] ---------------------------------
app.use('/posts', postsRoute)
app.use(cors())



// ------------------------  [  Routers   ] -----------------------
app.get("/", (req, res) => {
          res.send("This is Root Path")
})



// --------------------  [ Port Section ] ------------------------
const port = process.env.PORT || 3000
app.listen(port, function () {
          console.log(`
---------------------------
- Server started at  ${port} -
---------------------------
`);
});