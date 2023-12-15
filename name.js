//? We would like to show the following names by gender in a different color.
// todo-1: select div with the id "namesContainer".
// todo-2: iterate on the names array and create element for each person.
// todo-3: append the created element in the selected element.
// Note: to set the color for each person based on their gender, you can use the "girl" or "boy" class.(you can check name.html)
 
const names = [
  {
    id: 0,
    name: "Aria",
    gender: "girl",
  },
  {
    id: 1,
    name: "Logan",
    gender: "boy",
  },
  {
    id: 2,
    name: "Quinn",
    gender: "girl",
  },
  {
    id: 3,
    name: "Kai",
    gender: "boy",
  },
  {
    id: 4,
    name: "Dashiell",
    gender: "boy",
  },
  {
    id: 5,
    name: "John",
    gender: "boy",
  },
  {
    id: 6,
    name: "Seraphina",
    gender: "girl",
  },
  {
    id: 7,
    name: "Caroline",
    gender: "girl",
  },
  {
    id: 8,
    name: "Tobias",
    gender: "boy",
  },
  {
    id: 9,
    name: "Harper",
    gender: "girl",
  },
  {
    id: 10,
    name: "Mabe",
    gender: "girl",
  },
  {
    id: 11,
    name: "Iris",
    gender: "girl",
  },
  {
    id: 12,
    name: "Beatrice",
    gender: "girl",
  },
  {
    id: 13,
    name: "Knox",
    gender: "boy",
  },
  {
    id: 14,
    name: "August",
    gender: "boy",
  },
  {
    id: 15,
    name: "Poppy",
    gender: "girl",
  },
  {
    id: 16,
    name: "Aurora",
    gender: "girl",
  },
  {
    id: 17,
    name: "Wyatt",
    gender: "boy",
  },
  {
    id: 18,
    name: "Ezra",
    gender: "boy",
  },
  {
    id: 19,
    name: "Emily",
    gender: "girl",
  },
  {
    id: 20,
    name: "Sebastian",
    gender: "boy",
  },
  {
    id: 21,
    name: "Gabriel",
    gender: "boy",
  },
  {
    id: 22,
    name: "Charlie",
    gender: "boy",
  },
  {
    id: 23,
    name: "Isabella",
    gender: "girl",
  },
  {
    id: 24,
    name: "Elliot",
    gender: "boy",
  },
  {
    id: 25,
    name: "Declan",
    gender: "boy",
  },
  {
    id: 26,
    name: "Benjamin",
    gender: "boy",
  },
  {
    id: 27,
    name: "Gemma",
    gender: "girl",
  },
  {
    id: 28,
    name: "Lucas",
    gender: "boy",
  },
  {
    id: 29,
    name: "Chloe",
    gender: "girl",
  },
  {
    id: 30,
    name: "Khaleesi",
    gender: "girl",
  },
  {
    id: 31,
    name: "Austin",
    gender: "boy",
  },
  {
    id: 32,
    name: "Matilda",
    gender: "girl",
  },
  {
    id: 33,
    name: "Grayson",
    gender: "boy",
  },
  {
    id: 34,
    name: "Beckett",
    gender: "boy",
  },
  {
    id: 35,
    name: "Nicholas",
    gender: "boy",
  },
  {
    id: 36,
    name: "Ronan",
    gender: "boy",
  },
  {
    id: 37,
    name: "Eliza",
    gender: "girl",
  },
  {
    id: 38,
    name: "Imogen",
    gender: "girl",
  },
  {
    id: 39,
    name: "Amelia",
    gender: "girl",
  },
  {
    id: 40,
    name: "Nathaniel",
    gender: "boy",
  },
  {
    id: 41,
    name: "Ryker",
    gender: "boy",
  },
  {
    id: 42,
    name: "Olivia",
    gender: "girl",
  },
  {
    id: 43,
    name: "Leo",
    gender: "boy",
  },
  {
    id: 44,
    name: "Zane",
    gender: "boy",
  },
  {
    id: 45,
    name: "Grace",
    gender: "girl",
  },
  {
    id: 46,
    name: "Owen",
    gender: "boy",
  },
  {
    id: 47,
    name: "Clara",
    gender: "girl",
  },
  {
    id: 48,
    name: "Julian",
    gender: "boy",
  },
  {
    id: 49,
    name: "Caleb",
    gender: "boy",
  },
  {
    id: 50,
    name: "Nolan",
    gender: "boy",
  },
];



const divEl=document.querySelector("#namesContainer")

names.forEach((element)=>{
  let span=document.createElement("span")
  span.textContent= element.name
  span.classList.add("person")
  if(element.gender==="boy"){
    span.classList.add("boy")
  }else{
    span.classList.add("girl")
  }
  divEl.append(span)
})