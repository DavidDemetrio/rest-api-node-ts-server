import { Table, Column, Model, DataType, Default, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

// Decorador que define el nombre de la tabla dentro de la base de datos
@Table({
    tableName: 'products'
})

// Product hereda todas las clases del modelo
class Product extends Model {
    @Column({
        type: DataType.STRING // equal varchar en una DB, esto es sequelize
    })
    declare name: string

    @Column({
        // type: DataType.FLOAT(6, 2)
        type: DataType.STRING
    })
    declare price: number

    @Default(true)
    // @PrimaryKey()
    @Column({
        type: DataType.BOOLEAN
    })
    declare availability: boolean
}

export default Product