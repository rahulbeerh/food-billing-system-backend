// const sampleFoodData=require("../sampleFoodData.js");
const Food=require("../models/food.js");

exports.getFood=async(req,res)=>{
    const food=await Food.find({});
    res.status(200).json(food);    
}