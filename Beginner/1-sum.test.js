const simpleSum = require("./1-sum")

describe("simpleSum function tests:", ()=>{
    it("should return the sum of arguments", ()=>{
        expect(simpleSum(2, 1)).toBe(3);
    })
})