import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

// Decorador que define el nombre de la tabla dentro de la base de datos
@Table({
    tableName: 'products'
})

// Product hereda todas las clases del modelo
class Product extends Model {
    @Column({
        type: DataType.STRING // equal varchar en una DB, esto es sequelize
    })
    name: string

    @Column({
        type: DataType.FLOAT(6, 2)
    })
    price: number

    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean
}

export default Product