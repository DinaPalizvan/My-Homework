//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////
const div=document.querySelector("#destination")
const planetName=document.createElement("p")
const distance=document.createElement("p")

const getData=async ()=>{
    const res= await fetch("https://handlers.education.launchcode.org/static/planets.json")
    const data=await res.json()
    return data
}

getData().then(data=>{
    planetName.textContent=`Planet 1 Name= ${data[0].name}`
    distance.textContent=`Planet 1 Distance= ${data[0].distance}`
    let counter=0
    div.addEventListener("click", ()=>{
        counter++
        const func=(num)=>{
            if(num>=6){
                planetName.textContent="Opps! We are out of planets. 😁"
                distance.style.visibility="hidden"
            }
            planetName.textContent=`Planet ${num+1} Name= ${data[num].name}`
            distance.textContent=`Planet ${num+1} Distance= ${data[num].distance}`
            console.log(num);
        };
        func(counter)
    })
}).catch(e=>{
    throw new Error
})

document.body.append(planetName)
document.body.append(distance)





