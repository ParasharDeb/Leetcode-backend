import express from "express"
import cors from "cors"
import {prisma} from "@repo/database"
const app=express();
app.use(cors())
app.get("/get-questions",async(req,res)=>{
    const userID=req.body.userId
    const data =  await prisma.user.findFirst({
        where:{
            id:userID
        }
    })
})
app.get("/:userId/questions",(req,res)=>{
    // all solved questions of the user
})

app.listen(8080);