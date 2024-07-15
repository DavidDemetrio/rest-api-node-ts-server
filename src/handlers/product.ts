import { Request, Response } from 'express'
import Product from '../models/Product.model';

export const createProduct = async (req : Request, res : Response) => {
    console.log("FROM BODY >>>>>>>>>>>>>>>>>>", req.body);
    
    // First methos: Instance object, then get the value saved in database
    // const product = new Product(req.body)
    // const savedProduct = await product.save()
    
    // Second method: Use methos create from sequelize
    const savedProduct = await Product.create(req.body)

    res.json({ data: savedProduct })
}