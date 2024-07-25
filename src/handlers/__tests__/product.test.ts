import request from "supertest"
import server from "../../server"

describe("POST /api/products", () => {
    it("Should create a new product", async () => {
        const res = await request(server).post("/api/products").send({
            name: 'Producto testing',
            price: 400
        })

        expect(res.status).toEqual(201)
        expect(res.body).toHaveProperty('data')
    })
})