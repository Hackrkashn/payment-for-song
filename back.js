
const express=require("express");
const app=express();

const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res)     //path for the directory
{
    req.sendFile(__dirname+"/front.html");

})

app.post("/",function(req,res)    //post when you submitted
{
    var a=Number(req.body.num1);
    res.send("<h1>Congratulation! You have paid</h1>"+ a+"$");
})


app.listen(3000,function()      //hosting site locally at 3000
{
    console.log("<h1>Website hosting......</h1>");
})




