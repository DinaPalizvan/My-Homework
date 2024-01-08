//selecting
const content=document.querySelector("#content")
//creating ul
const ul=document.createElement("ul")
content.append(ul)
//main function
function todoList(todos) {
  todos.forEach((todo)=>{
    const li=document.createElement("li")
    li.textContent= todo.todo
    ul.append(li)
    li.addEventListener("click", ()=>{
      li.classList.toggle("line-through")
    })
  })
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];
todoList(todos); 






