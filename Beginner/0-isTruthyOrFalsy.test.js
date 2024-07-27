const isTruthyOrFalsy= require("./0-isTruthyOrFalsy")

describe("isTruthyOrFalsy function tests:", () => { 
    it("should return false for falsy values", ()=>{
        expect(isTruthyOrFalsy(false)).toBeFalsy()
        expect(isTruthyOrFalsy(0)).toBeFalsy()
        expect(isTruthyOrFalsy("")).toBeFalsy()
        expect(isTruthyOrFalsy(null)).toBeFalsy()
        expect(isTruthyOrFalsy(undefined)).toBeFalsy()
        expect(isTruthyOrFalsy(NaN)).toBeFalsy()
        expect(isTruthyOrFalsy()).toBeFalsy()
    })
    it("should return true for truthy values", ()=>{
        expect(isTruthyOrFalsy("hello")).toBeTruthy()
        expect(isTruthyOrFalsy(10)).toBeTruthy()
        expect(isTruthyOrFalsy(true)).toBeTruthy()
    })
 })