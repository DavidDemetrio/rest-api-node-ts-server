import { Router } from "express"
import { body, param } from "express-validator"
import {
    createProduct,
    getProductById,
    getProducts,
    updateProduct
} from "./handlers/product"
import { hanldeInputErrors } from "./middleware"

const router = Router()

// Routing
router.get('/', getProducts)
router.get('/:id',
    param('id').isInt().withMessage('ID no válido.'),
    hanldeInputErrors,
    getProductById
)

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

router.put('/:id', updateProduct)

router.patch('/', (req, res) => {
    res.json('Desde PATCH')
})

router.delete('/', (req, res) => {
    res.json('Desde DELETE')
})

export default router