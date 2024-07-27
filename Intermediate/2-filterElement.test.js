const filterElement= require("./2-filterElement")

describe("filterElement function tests:", ()=>{
    it("should return an empty array", ()=>{
        expect(filterElement([], "grape")).toEqual([])
    })
    it("should return 'apple' ", ()=>{
        expect(filterElement(["apple", "banana", "orange"], "apple"))
    })
})