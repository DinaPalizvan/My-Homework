const checkAge= require("./0-checkAge")

describe("checkAge function tests:", ()=>{
    it("should return undefined if the age is less than 18", ()=>{
        expect(checkAge(16)).toBeUndefined()
        expect(checkAge(20)).not.toBeUndefined()
    })
})