const express=require("express");

const app=express();

const TokenRoute=require("./routes/token");

app.listen(5000,()=>{
    console.log("server running nicesly");
});

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Its time to get paid mpesa running");
});

app.use("/token",TokenRoute);