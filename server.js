const express = require("express");
require("dotenv").config()
require('./config/database')
const Routes = require('./routes/routes')

const app = express();

const PORT = process.env.PORT || 4001;

app.set("port", PORT);

app.use(express.json())
app.use('/api', Routes)

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT: " + app.get('port'))
})