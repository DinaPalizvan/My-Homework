
/**
 * 
 * 1) make an array as MockTask and put some tasks inside it
 * 
 * 2) create a function named fetchTasks(), which returns tasks as a promise with 1 second delay.
 * 2-1) once you start your program the tasks inside the MockTask should display with 1 sec delay
 * 
 * 3) you need to create a function named renderTasks(tasks), to show the taken tasks as list's items on screen
 * 
 * 4) you should have an input for the clients to write their tasks inside, and add them to the list with addTask button next to input.
 * 
 * 5)Implement the addTask(task) function to simulate adding a task to the MockTasks. Use a Promise to represent the asynchronous operation of adding a task.
 *5-1) your data should add to the list with 0.5 second delay

 * notice:
 * Ensure that when the "Add Task" button is clicked, the new task is added to the list of tasks and rendered on the webpage.
 * Ensure the initial list of tasks is fetched and rendered when the page loads.
 */

 const btn=document.querySelector("#addTaskBtn")
 const input=document.querySelector("#taskInput")

//1
const mockTask=["task one", "task two", "task three", "task four"]

//2
const fetchTasks=(arr)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(arr)
        }, 1000);
    })
}

//3
const renderTasks=(tasks)=>{
    const list=document.querySelector("#taskList")
    tasks.forEach(task=>{
        const item=document.createElement("li")
        item.textContent=task
        list.append(item)
    })
}

fetchTasks(mockTask)
.then((data)=>{
    renderTasks(data)
})

//5
const addTask=()=>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(input.value)
        }, 500);
    })
}

btn.addEventListener("click", ()=>{
    addTask().then(data=>{
        mockTask.push(data)
        const list=document.querySelector("#taskList")
        const newItem=document.createElement("li")
        newItem.textContent=data
        list.append(newItem)
        input.value=""
        console.log(mockTask);
    })
})
