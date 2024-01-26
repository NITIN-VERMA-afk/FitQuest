import express,{Express,Request,Response} from "express";
const port =8000;

const app:Express=express();

app.get("/",(req:Request,res:Response)=>{
    res.send("hello nitin+1")
});
app.get("/hi",(req:Request,res:Response)=>{
    res.send("hiiiiiiiii+nitin+hlo")
});




app.listen(port,()=>{
    console.log(`now listing on port ${port}`)
})