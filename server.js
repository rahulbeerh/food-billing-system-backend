const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDb = require("./config/db.js");
const foodRoutes=require("./routes/foodRoutes.js");

const port=process.env.PORT || 5000;
dotenv.config();
connectDb();

const app=express();
app.use("*",cors({
    origin:true,
    credentials:true
}))
app.use(foodRoutes);

app.listen(port,()=>console.log(`Server running at ${port}`));