import { Router } from "express"
import { createProduct } from "./handlers/product"

const router = Router()

// Routing
router.get('/', (req, res) => {
    res.json('Desde GET')
})

router.post('/', createProduct)

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