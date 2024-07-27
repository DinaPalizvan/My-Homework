const getUserWithDelay= require("./0-delayPromise")

describe("delayPromise function test", ()=>{
    it("should return { id: 1, name: 'User 1' } for user 1",async ()=>{
        const result= await getUserWithDelay(1)
        expect(result).toEqual( { id: 1, name: 'User 1' })
    })
    it("should return { id: 1, name: 'User 1' } for user 1",async ()=>{
        return expect(getUserWithDelay(1)).resolves.toEqual( { id: 1, name: 'User 1' })
    })
})