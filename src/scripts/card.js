/////// TO-DO BOARD ///////
document.getElementById('do-add-card-btn').addEventListener("click", function() {
    let doCardInput = document.getElementById('todo-card-input').value 
    // console.log(doCardInput)
    addDoCard(doCardInput);
    document.getElementById('todo-card-input').value = '';

})

const addDoCard = doCardInput => {
    let doCard = document.createElement('li');

    doCard.classList.add('do-card-container')
    // card.classList.add('fill');
    doCard.draggable = true;
    // doCard.contentEditable = true;
    doCard.addEventListener('dragstart', dragStart);
    doCard.addEventListener('dragend', dragEndDo);

    let doCardDiv = document.createElement('div');
    doCardDiv.classList.add("do-card");
    doCardDiv.innerText = doCardInput;

    saveLocalDos(doCardInput)

    let doCompleteBtn = document.createElement('button');
    doCompleteBtn.classList.add('do-complete-btn');
    doCompleteBtn.innerHTML = '<i class="fa">&#10003</i>'
    doCompleteBtn.addEventListener('click', completeBtn)

    let doDeleteBtn = document.createElement('button');
    doDeleteBtn.classList.add('do-delete-btn');
    // doDeleteBtn.innerText = 'del';
    doDeleteBtn.innerHTML = '<i class="fa">&#xf014</i>'

    doDeleteBtn.addEventListener('click', deleteBtn)

    // let priorityBtn = document.createElement('div');
    // priorityBtn.classList.add('priorityBtn');
    // priorityBtn.innerText = 'Priority';
    // priorityBtn.addEventListener('click', choosePriority)

    // let lowPriority = document.createElement('div');
    // lowPriority.classList = 'low';
    // lowPriority.innerText = 'Low'

    // priorityBtn.appendChild(lowPriority);

    doCard.appendChild(doCardDiv);
    doCard.appendChild(doCompleteBtn);
    doCard.appendChild(doDeleteBtn);
    // doCard.appendChild(doEditBtn);
    // doCard.appendChild(priorityBtn);
    
    let doCards = document.getElementById('do-card-list');
    doCards.appendChild(doCard);
    // using doCards.appendChild(doCard) will place the new card on top of the old card


}

///// DOING BOARD ///////
document.getElementById('doing-add-card-btn').addEventListener("click", function () {
    let doingCardInput = document.getElementById('doing-card-input').value
    console.log(doingCardInput)
    addDoingCard(doingCardInput);
    document.getElementById('doing-card-input').value = '';
})

const addDoingCard = doingCardInput => {
    let doingCard = document.createElement('li');

    doingCard.classList.add('doing-card-container')
    // doingCard.classList.add('fill');
    doingCard.draggable = true;
    // doingCard.contentEditable = true;
    doingCard.addEventListener('dragstart', dragStart);
    doingCard.addEventListener('dragend', dragEndDoing);

    let doingCardDiv = document.createElement('div');
    doingCardDiv.classList.add("doing-card");
    doingCardDiv.innerText = doingCardInput;
    // console.log(doingCardDiv);

    let doingCompleteBtn = document.createElement('button');
    doingCompleteBtn.classList.add('doing-complete-btn');
    doingCompleteBtn.innerHTML = '<i class="fa">&#10003</i>'
    doingCompleteBtn.addEventListener('click', completeBtn)

    let doingDeleteBtn = document.createElement('button');
    doingDeleteBtn.classList.add('doing-delete-btn');
    // doingDeleteBtn.innerText = 'del';
    doingDeleteBtn.innerHTML = '<i class="fa">&#xf014</i>'

    doingDeleteBtn.addEventListener('click', deleteBtn)

    doingCard.appendChild(doingCardDiv);
    doingCard.appendChild(doingCompleteBtn);
    doingCard.appendChild(doingDeleteBtn);

    

    let doingCards = document.getElementById('doing-card-list');
    doingCards.appendChild(doingCard);
}


///// DONE BOARD ///////
document.getElementById('done-add-card-btn').addEventListener("click", function () {
    let doneCardInput = document.getElementById('done-card-input').value
    console.log(doneCardInput)
    addDoneCard(doneCardInput);
    document.getElementById('done-card-input').value = '';
})

const addDoneCard = doneCardInput => {
    let doneCard = document.createElement('li');

    doneCard.classList.add('done-card-container')
    // doneCard.classList.add('fill');
    doneCard.draggable = true;
    // doneCard.contentEditable = true;
    doneCard.addEventListener('dragstart', dragStart);
    doneCard.addEventListener('dragend', dragEndDone);

    let doneCardDiv = document.createElement('div');
    doneCardDiv.classList.add("done-card");
    doneCardDiv.innerText = doneCardInput;
    // console.log(doneCardDiv);

    let doneCompleteBtn = document.createElement('button');
    doneCompleteBtn.classList.add('done-complete-btn');
    doneCompleteBtn.innerHTML = '<i class="fa">&#10003</i>'
    doneCompleteBtn.addEventListener('click', completeBtn)

    let doneDeleteBtn = document.createElement('button');
    doneDeleteBtn.classList.add('done-delete-btn');
    doneDeleteBtn.innerHTML = '<i class="fa">&#xf014</i>'
    // doneDeleteBtn.innerText = 'del';
    doneDeleteBtn.addEventListener('click', deleteBtn)

    doneCard.appendChild(doneCardDiv);
    doneCard.appendChild(doneCompleteBtn);
    doneCard.appendChild(doneDeleteBtn);

    let doneCards = document.getElementById('done-card-list');
    doneCards.appendChild(doneCard);
}

const completeBtn = (event) => {
    // const doCards = event.target.parentNode.parentNode;
    // const doingCards = event.target.parentNode.parentNode;
    const doneCards = event.target.parentNode.parentNode.parentNode;

    doneCards.classList.toggle("completed");
}

const deleteBtn = (event) => {
    const doCards = event.target.parentNode.parentNode;
    const doingCards = event.target.parentNode.parentNode;
    const doneCards = event.target.parentNode.parentNode;

    doCards.remove();
    doingCards.remove();
    doneCards.remove();
}

// const choosePriority = (event) => {
//     const doCards = event.target.parentNode;
//     const doingCards = event.target.parentNode;
//     const doneCards = event.target.parentNode;

//     doCards.show();
//     doingCards.show();
//     doneCards.show();
// }

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

const saveLocalDos = (todo) => {
    let todos;

    if(localStorage.getItem('do-card-container') === null) {
        todos = [];
    } else {
        todos = localStorage.getItem("do-card-container");
    }

    todos.push(todo);
}

// const saveLocalDos = (todo) => {
//   let todos;

//   if (localStorage.getItem("do-card-container") === null) {
//     todos = [];
//   } else {
//     todos = localStorage.getItem("do-card-container");
//   }

//   todos.push(todo);
// };