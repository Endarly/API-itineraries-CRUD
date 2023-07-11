const express = require("express");
const cors = require("cors")
require("dotenv").config()
require('./config/database')
const Routes = require('./routes/routes')

const app = express();

const PORT = process.env.PORT || 4001;

app.set("port", PORT);

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Routes)

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT: " + app.get('port'))
})