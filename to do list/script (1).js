function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(element => {
    const liEl=document.createElement("li")
    liEl.textContent=element.task
    liEl.classList.add("list-group-item", "d-flex","justify-content-between", "align-items-center")
    const span=document.createElement("span")
    span.classList.add("badge", "bg-primary", "rounded-pill")
    liEl.append(span)
    const check=document.createElement("i")
    check.classList.add("fa-check", "fa")
    check.setAttribute("aria-hidden", "true")
    check.addEventListener("click", ()=>{
      liEl.classList.toggle("line-through")
    })
    const trash=document.createElement("i")
    trash.classList.add("fa-trash", "fa")
    trash.setAttribute("aria-hidden", "true")
    trash.addEventListener("click",()=>{
      liEl.remove()
    })
    span.append(check)
    span.append(trash)
    list.append(liEl)
});
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];
populateTodoList(todos);
const items=document.querySelectorAll("#d")
items.forEach(e=>e.remove())

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo() {
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const form=document.querySelector("form")
  let list = document.getElementById('todo-list');
  form.addEventListener("submit", (e)=>{
    // The code below prevents the page from refreshing when we click the 'Add Todo' button.
    e.preventDefault();
    const text= e.target.todoInput
    const liEl=document.createElement("li")
    liEl.textContent=text.value
    liEl.classList.add("list-group-item", "d-flex","justify-content-between", "align-items-center")
    const span=document.createElement("span")
    span.classList.add("badge", "bg-primary", "rounded-pill")
    liEl.append(span)
    const check=document.createElement("i")
    check.classList.add("fa-check", "fa")
    check.setAttribute("aria-hidden", "true")
    const trash=document.createElement("i")
    trash.classList.add("fa-trash", "fa")
    trash.setAttribute("aria-hidden", "true")
    span.append(check)
    span.append(trash)
    check.addEventListener("click", ()=>{
      liEl.classList.toggle("line-through")
    })
    trash.addEventListener("click",()=>{
      liEl.remove()
    })
    if(text.value!==""){
      list.append(liEl)
    }
    text.value=""
  })
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
