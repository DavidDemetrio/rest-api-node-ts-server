import request from "supertest"
import server from "../server"

describe("GET /api", () => {
    it('backend should send a json response', async () => {
        const rest = await request(server).get("/api")
        expect(rest.status).toBe(200)
        expect(rest.headers['content-type']).toMatch(/json/);
        expect(rest.body.msg).toBe('Desde API')
    })
})