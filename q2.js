// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/

const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
};

//1:
const arr1=Object.values(object1)
console.log(arr1);
//2:
const arr2=[object1.ali, object1.writes, object1.novels]
console.log(arr2);
//3:
const objValues=obj=>{
    let arr3=[]
    for(let key in obj){
        arr3.push(obj[key])
    }
    return arr3
}
console.log(objValues(object1));
