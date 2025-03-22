import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


import userRoutes from "./routes/users.js";

const app=express();
const port=8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/",(req,res)=> res.send("hello from express"));
app.all("*", (req,res)=>res.send("that route doesn't exist"))

app.listen(port,()=>{
    console.log(`server is working on port: http://localhost:${port}`)
})