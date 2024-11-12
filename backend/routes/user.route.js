import express from "express"
import { Register } from "../controllers/user.controller.js"

const userRoute = express.Router()

userRoute.post("/register", Register)

export default userRoute