import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
console.log("dirname >>>>>>>>>>>>", __dirname);

const db = new Sequelize(process.env.DB_URL!, {
    // models: [__dirname + '../models/**/*.ts']
    models: [path.join(__dirname, '../models/**/*.ts')] // si necesitas sincronizar tu DB, usa path.join, el cual sincroniza
                                                        // tus modelos con la base de datos, path.join lo hace de manera más segura que al usar el código comentado de arriba
})

export default db