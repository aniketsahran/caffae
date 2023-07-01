//Import depedencies and create app
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const express = require('express');

const connectToDb = require('./config/db');
const formController = require('./controllers/contactFormController');

connectToDb();

//Create and configure express app
const app = express();
app.use(express.json());

//Routing
app.post("/contactCreate", formController.createContactFormEntry);

//Start the server on port 3000
app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000");
});