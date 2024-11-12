import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import DataBase from "./db/db.js"

const app = express()
app.use(cors())


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