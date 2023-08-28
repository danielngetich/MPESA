const express=require("express");

const router=express.Router();

const {createToken}=require("../controller/token");

router.get("/",createToken);

module.exports=router
