// const taskInput = document.querySelector('.task-input')
// const taskBtn = document.querySelector('.task-btn');
// const taskList = document.querySelector('.task-list')

// // document.addEventListener('DOMContentLoaded', displaydoingTasks)
// taskBtn.addEventListener("click", addTask);
// taskList.addEventListener('click', deleteTask);


// function addTask(e) {
//     e.preventDefault();

//     const taskDiv = document.createElement("div");
//     taskDiv.classList.add("task");

//     const newTask = document.createElement("li");
//     newTask.innerText = taskInput.value;
//     newTask.classList.add('card');
//     taskDiv.appendChild(newTask);
//     // card.draggable = true;

//     // saveTasks(taskInput.value);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = '&#128465';
//     deleteBtn.classList.add("delete-btn");
//     taskDiv.appendChild(deleteBtn); 

//     taskList.appendChild(taskDiv);
//     // after appending, remove the value from the input box
//     taskInput.value = "";
// }

// function deleteTask(e) {
//     const itemToDelete = e.target;

//     if (itemToDelete.classList[0] === "delete-btn") {
//         itemToDelete.parentElement.remove();
//         removeLocalStorage(task);
//     }
// }

// function saveTasks(task) {
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function displayTasks() {
//     let tasks;

//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.forEach(function(task) {
//         const taskDiv = document.createElement("div");
//         taskDiv.classList.add("task");

//         const newTask = document.createElement("li");
//         newTask.innerText = task;
//         newTask.classList.add('card');
//         taskDiv.appendChild(newTask);

//         const deleteBtn = document.createElement('button');
//         deleteBtn.innerHTML = '&#128465';
//         deleteBtn.classList.add("delete-btn");
//         taskDiv.appendChild(deleteBtn);

//         taskList.appendChild(taskDiv);
//     })
// }

// function removeLocalStorage(task) {
//     let tasks;
    
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     const taskIndex = task.children[0].innerText;
//     tasks.splice(tasks.indexOf(taskIndex), 1);
//     localStorage.setItem("tasks", JSON.stringify(tasks))
// }

/////// TO-DO BOARD ///////
document.getElementById('do-add-card-btn').addEventListener("click", function() {
    let doCardInput = document.getElementById('todo-card-input').value 
    // console.log(doCardInput)
    addDoCard(doCardInput);

})

const addDoCard = doCardInput => {
    let doCard = document.createElement('li');

    doCard.classList.add('do-card-container')
    // card.classList.add('fill');
    doCard.draggable = true;
    doCard.addEventListener('dragstart', dragStart);
    doCard.addEventListener('dragend', dragEndDo);

    let doCardDiv = document.createElement('div');
    doCardDiv.classList.add("do-card");
    doCardDiv.innerText = doCardInput;
    // console.log(doCardDiv);

    let doDeleteCard = document.createElement('div');
    doDeleteCard.classList.add('do-delete-btn');
    doDeleteCard.innerHTML = '&#128465';
    doDeleteCard.addEventListener('click', deleteCard)

    doCard.appendChild(doCardDiv);
    doCard.appendChild(doDeleteCard);
    
    let doCards = document.getElementById('do-card-list');
    doCards.appendChild(doCard);
}

///// DOING BOARD ///////
document.getElementById('doing-add-card-btn').addEventListener("click", function () {
    let doingCardInput = document.getElementById('doing-card-input').value
    console.log(doingCardInput)
    addDoingCard(doingCardInput);

})

const addDoingCard = doingCardInput => {
    let doingCard = document.createElement('li');

    doingCard.classList.add('doing-card-container')
    // doingCard.classList.add('fill');
    doingCard.draggable = true;
    doingCard.addEventListener('dragstart', dragStart);
    doingCard.addEventListener('dragend', dragEndDoing);

    let doingCardDiv = document.createElement('div');
    doingCardDiv.classList.add("doing-card");
    doingCardDiv.innerText = doingCardInput;
    console.log(doingCardDiv);

    let doingDeleteCard = document.createElement('div');
    doingDeleteCard.classList.add('doing-delete-btn');
    doingDeleteCard.innerHTML = '&#128465';
    doingDeleteCard.addEventListener('click', deleteCard)

    doingCard.appendChild(doingCardDiv);
    doingCard.appendChild(doingDeleteCard);
    

    let doingCards = document.getElementById('doing-card-list');
    doingCards.appendChild(doingCard);
}


///// DONE BOARD ///////
document.getElementById('done-add-card-btn').addEventListener("click", function () {
    let doneCardInput = document.getElementById('done-card-input').value
    console.log(doneCardInput)
    addDoneCard(doneCardInput);

})

const addDoneCard = doneCardInput => {
    let doneCard = document.createElement('li');

    doneCard.classList.add('done-card-container')
    // doneCard.classList.add('fill');
    doneCard.draggable = true;
    doneCard.addEventListener('dragstart', dragStart);
    doneCard.addEventListener('dragend', dragEndDone);

    let doneCardDiv = document.createElement('div');
    doneCardDiv.classList.add("done-card");
    doneCardDiv.innerText = doneCardInput;
    console.log(doneCardDiv);

    let doneDeleteCard = document.createElement('div');
    doneDeleteCard.classList.add('done-delete-btn');
    doneDeleteCard.innerHTML = '&#128465';
    doneDeleteCard.addEventListener('click', deleteCard)

    doneCard.appendChild(doneCardDiv);
    doneCard.appendChild(doneDeleteCard);

    let doneCards = document.getElementById('done-card-list');
    doneCards.appendChild(doneCard);
}

const deleteCard = (e) => {
    const doCards = e.target.parentNode;
    const doingCards = e.target.parentNode;
    const doneCards = e.target.parentNode;

    doCards.remove();
    doingCards.remove();
    doneCards.remove();
}


let card;

const dragStart = (e) => {
    console.log('START')
    e.target.className += ' hold';
    card = e.target;
    setTimeout(() => (e.target.className = "invisible"), 0);

}

const dragEndDone = () => {
    console.log('END')
    event.target.className = 'done-card-container'
}

const dragEndDoing = () => {
    console.log('END')
    event.target.className = 'doing-card-container'
}

const dragEndDo = () => {
    console.log('END')
    event.target.className = 'do-card-container'
}

const drops = document.querySelectorAll('.drop-board');
console.log(drops);

const dragEnter = (e) => {
    e.preventDefault();
    console.log('ENTER')
}

const dragOver = (e) => {
    e.preventDefault();
    console.log('OVER')
} 

const dragLeave = () => {
    console.log('LEFT')
}

const dragDrop = (e) => {
    console.log(e.target);
    e.target.append(card)
}

for (const dropboard of drops) {
    dropboard.addEventListener('dragenter', dragEnter);
    dropboard.addEventListener('dragover', dragOver);
    dropboard.addEventListener('dragleave', dragLeave);
    dropboard.addEventListener('drop', dragDrop);
}