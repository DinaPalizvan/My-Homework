const sum= require("./2-sum2")

describe("sum function tests:", ()=>{
    it("should throw an error if any argument is not a number", ()=>{
        expect(()=>sum("", 52)).toThrow("Input must be numbers");
        expect(()=>sum(null, 50)).toThrow("Input must be numbers");
        expect(()=>sum(undefined, 52)).toThrow("Input must be numbers");
        expect(()=>sum([], 52)).toThrow("Input must be numbers");
        expect(()=>sum({}, 52)).toThrow("Input must be numbers");
        expect(()=>sum(52, "")).toThrow("Input must be numbers");
        expect(()=>sum(52 )).toThrow("Input must be numbers");
        expect(()=>sum(52, null)).toThrow("Input must be numbers");
        expect(()=>sum(52, undefined)).toThrow("Input must be numbers");
        expect(()=>sum(52, [])).toThrow("Input must be numbers");
        expect(()=>sum(52, {})).toThrow("Input must be numbers");
        expect(()=>sum()).toThrow("Input must be numbers");
        expect(()=>sum("", "")).toThrow("Input must be numbers");
    })
    // انگار کدوارزه
    it("should return the sum of two arguments", ()=>{
        expect(sum(2, 1)).toBe(3);
        expect(sum(3, -1)).toBe(2);
        expect(sum(150, 912)).toBe(1062);
        expect(sum(-50, -50)).toBe(-100);
    })
})