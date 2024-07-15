import express from "express"
import colors from "colors"
import router from "./router"
import db from './config/db'

const server = express()

// Read dato from forms
server.use(express.json())

// Connect DB
async function connectDB() {
    try {
        await db.authenticate()
        db.sync({
            // alter: true
        }) // It will add automatticly new models or fields our DB
        console.log(colors.green.bold("Connection db was successfull!"));
    } catch (err) {
        console.log(err);
        console.log(colors.red.bold("There´s error to connect DB"));
    }
}

connectDB()

server.use('/api/products', router) // use es bueno porque puedes ir versionando los endpoints de tu API

export default server