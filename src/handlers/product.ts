import { Request, Response } from 'express'
import Product from '../models/Product.model'

export const getProducts = async(req:Request, res:Response) => {
    try {
        const products = await Product.findAll()

        // SE APLICA ASÍ CON DATA, PORQUE AXIOS OCUPA UNA VARIABLE LLAMADA data
        res.status(200).json({ data: products })
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        // First methos: Instance object, then get the value saved in database
        // const product = new Product(req.body)
        // const savedProduct = await product.save()

        // Second method: Use methos create from sequelize
        const savedProduct = await Product.create(req.body)

        res.status(200).json({ data: savedProduct })
    } catch (error) {
        console.log(error);
    }
}