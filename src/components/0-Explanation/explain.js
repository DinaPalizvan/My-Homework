// explain the difference between getBy, findBy, queryBy:

/*
findBy:
findBy queries return a promise which resolves when a matching element is found. The promise is rejected if no elements match or if more than one match is found after a default timeout of 1000 ms. If you need to find more than one element, then use findAllBy.

getBy:
getBy queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found. If you need to find more than one element, then use getAllBy.

queryBy:
queryBy queries return the first matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found (you should use queryAllBy instead).
 */