import mongoose from "mongoose";

const DataBase = async() => {
    try {
    await mongoose.connect("mongodb://localhost/27017/toyyer-store")
    console.log("DB Conected Successfully")
    } catch (error) {
        console.log(error)
        console.log("DataBase Issue")
    }
}

export default DataBase