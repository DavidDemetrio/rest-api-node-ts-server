import { Router } from "express"
import { body, param } from "express-validator"
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateAvailability,
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

router.put('/:id',
    param('id').isInt().withMessage('ID no válido'),
    hanldeInputErrors,
    updateProduct
)

router.patch('/:id',
    param('id').isInt().withMessage('ID no válido'),
    hanldeInputErrors,
    updateAvailability)

router.delete('/:id', deleteProduct)

export default router