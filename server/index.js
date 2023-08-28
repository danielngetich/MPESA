const express=require("express");

const app=express();

app.listen(5000,()=>{
    console.log("server running nicesly");
});

app.get("/",(req,res)=>{
    res.send("Its time to get paid mpesa running");
});