import server from "src/server.js"

describe('ping test', () => {
    test('get /ping', async () => {
        const res = await server.inject({url: "/ping", method: "GET"})
        expect(res.statusCode).toBe(200)
    })
})