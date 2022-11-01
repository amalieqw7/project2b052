const express = require('express');
const cors = require('cors');

const connection = require('./db');

//link models
//const dbTableModel = require('../model/DB_table');
//const userModel = require('../model/user');

const app = express();
const PORT = process.env.PORT || 3000;

//set up app
app.use(cors());
app.use(express.json());

//runs display server
app.get('/', (req,res) => {
    //displays message on website
    res.send(`Server running on port ${PORT}`)
});


app.listen(PORT, (err) => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`App listening at http://localhost:${PORT}`)
})


//setting main routes
const mainRoutes = require('./routes/mainRoutes')
app.use('/', mainRoutes);


