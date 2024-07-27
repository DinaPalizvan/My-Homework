const getAverage= require("./1-getAverage")

describe("getAverage function tests:", ()=>{
    it("should be greater than 5", ()=>{
        expect(getAverage(6,6,7)).toBeGreaterThan(5)
    })
    it("should be less than 5", ()=>{
        expect(getAverage(2,3,4)).toBeLessThan(5)
    })
    it("should be equal to 5", ()=>{
        expect(getAverage(4,5,6)).toBe(5)
    })
})