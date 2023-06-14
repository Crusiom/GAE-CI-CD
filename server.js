require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()
app.use(cors());

app.get('/profile', async (req, res) => {
    res.json("Test Successfully!")
})

const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}!`))