import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import userRoute from "./routes/user.route.js"

import DataBase from "./db/db.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/user", userRoute)


const Port = 5012;

async function start(){
    try {
        app.listen(Port, () => {
        console.log(`Server Running In ${Port}`)
    })
    } catch (error) {
        console.log(error)
    }
    try {
        await DataBase()
    } catch (error) {
        console.log(error)
    }
}


start()