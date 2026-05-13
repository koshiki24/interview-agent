import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
dotenv.config()



const app = express();


app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://interview-agent-client-73vf.onrender.com"
        ]
    credentials:true
    //methods: ["GET", "POST", "PUT", "DELETE"]
}));



app.use("/api/auth" ,authRouter );

app.use("/api/user", userRouter);

app.use("/api/interview" , interviewRouter)

app.get("/" , (req,res)=>{
    return res.json({message:"Server Started"});
});

const PORT = process.env.PORT || 8000;


app.listen(PORT ,"0.0.0.0" , () => {
    console.log(`Server is running on port ${PORT}`);
    connectDb();

});
