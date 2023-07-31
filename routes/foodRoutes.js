const express=require("express");
const router=express.Router();
const {getFood}=require("../controllers/foodController.js");

router.route("/api/food").get(getFood);
module.exports=router;