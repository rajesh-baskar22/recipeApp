const express =require("express");
const bodyParser =require("body-parser");
const connectDB = require("./config/db");
const recipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config();

const app =express();

app.use(bodyParser.json());
connectDB();

app.use('/api/recipes', recipeRoutes);


  

const PORT =3003;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

