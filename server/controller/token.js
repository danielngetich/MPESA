const axios =require("axios");

const createToken=async(req,res,next)=>{
const secret="WgvqFC7q6HLmnm7l";
const consumer ="6YAlJdx1dNNddtyTSCEdkJG4xJF7BP95";
const auth=new Buffer.from(`${consumer}:${secret}`).toString("base4");
await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
        headers:{
            authorization:`Basic ${auth}`,
        },
    }
).then((data)=>{
    console.log(data.data)
    next();

}).catch((err)=>{
    console.log(err);
    res.status(400).json(err.message);
})
}
module.exports=(createToken)