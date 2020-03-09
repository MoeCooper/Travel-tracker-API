const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// create express app
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//where database is stored
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
    { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected");
})

//we require the files and assign them to variables
const countryRouter = require('./routes/countries');
const userRouter = require('./routes/users');

app.use('/countries', countryRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`web server is listening on port: ${port}`);
});