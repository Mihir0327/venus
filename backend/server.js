import express from "express"
import color from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import cors from 'cors'

dotenv.config()

connectDB();

const port = process.env.PORT || 8080

const app = express()

app.use(cors())

app.use(morgan('dev'))
app.use(express.json())


//routes
app.use('/api/v1/auth',authRoute)


app.get('/',(req,res) => {
    res.send("Hello World")
})


app.listen(port,() => {
    console.log("server running" .bgCyan.white)
})