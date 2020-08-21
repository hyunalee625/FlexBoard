const taskInput = document.querySelector('.task-input')
const taskBtn = document.querySelector('.task-btn');
const taskList = document.querySelector('.task-list')

taskBtn.addEventListener("click", addTask);

function addTask(e) {
    e.preventDefault();
    console.log("hello")

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const newTask = document.createElement("li");
    newTask.innerText = 'newnewnew';
    newTask.classList.add('card');
    taskDiv.appendChild(newTask);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'x';
    deleteBtn.classList.add("delete-btn");
    taskDiv.appendChild(deleteBtn); 

    taskList.appendChild(taskDiv);
}

// const taskForm = document.querySelector(".task-form");
// const taskInput = document.querySelector(".task-input");
// const taskButton = document.querySelector(".task-btn");
// const taskList = document.querySelector(".task-list");

// const TASKS_LS = "tasks"

// function paintToDo(text) {
//     // debugger
//     const li = document.createElement("li");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.value = "X"
//     const div = document.createElement("div")
//     div.innerText = text
//     li.appendChild(div);
//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     const currentInput = taskInput.value;
//     paintToDo(currentInput);
//     taskInput.value = ""
// }

// function loadTasks() {
//     const tasks = localStorage.getItem(TASKS_LS);
//     if (tasks !== null) {
//         const parsedTasks = JSON.parse(tasks);
//         parsedTasks.forEach(function(task) {
//             paintToDo(task.text)
//         })
//     }
// }

// function init() {
//     // loadTasks();
//     // taskForm.addEventListener("submit", () => {handleSubmit})
//     taskButton.addEventListener("click", () => {handleSubmit});
// }

// init();



