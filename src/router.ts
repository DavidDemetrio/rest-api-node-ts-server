import { Router } from "express"
import { body } from "express-validator"
import { createProduct, getProducts } from "./handlers/product"
import { hanldeInputErrors } from "./middleware"

const router = Router()

// Routing
router.get('/', getProducts)

router.post('/',
    // Validations
    body('name').notEmpty().withMessage('The product name is not empty!'),
    body('price')
        .isNumeric().withMessage('Value don´t validate!')
        .notEmpty().withMessage('The product name is not empty!')
        .custom(value => value > 0).withMessage('The price must be positive value!'),
    hanldeInputErrors,
    createProduct
)

router.put('/', (req, res) => {
    res.json('Desde PUT')
})

router.patch('/', (req, res) => {
    res.json('Desde PATCH')
})

router.delete('/', (req, res) => {
    res.json('Desde DELETE')
})

export default router