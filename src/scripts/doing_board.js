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
    
    if (doingCardInput === '') {
        alert("Can't be blank!")
    } else {
        saveDoings(doingCardInput);
    }
    let doingCompleteBtn = document.createElement('button');
    doingCompleteBtn.classList.add('doing-complete-btn');
    doingCompleteBtn.innerHTML = '<i class="fa">&#10003</i>'
    doingCompleteBtn.addEventListener('click', completeBtn)

    let doingDeleteBtn = document.createElement('button');
    doingDeleteBtn.classList.add('doing-delete-btn');
    doingDeleteBtn.innerHTML = '<i class="fa">&#xf014</i>'

    doingDeleteBtn.addEventListener('click', deleteBtn)

    doingCard.appendChild(doingCardDiv);
    doingCard.appendChild(doingCompleteBtn);
    doingCard.appendChild(doingDeleteBtn);

    let doingCards = document.getElementById('doing-card-list');
    doingCards.appendChild(doingCard);
}

const completeBtn = (event) => {
    // const doneCards = event.target.parentNode.parentNode.parentNode;
        const doneCards = event.target.parentNode.parentNode;


    doneCards.classList.toggle("completed");
}

const deleteBtn = (event) => {
    // const doCards = event.target.parentNode.parentNode;
    const doingCards = event.target.parentNode.parentNode;
    // const doneCards = event.target.parentNode.parentNode;

    // doCards.remove();
    doingCards.remove();
    // doneCards.remove();
    
    // removeDos(doCards);
    removeDoings(doingCards);
}

let card;

const dragStart = (e) => {
    console.log('START')
    e.target.className += ' hold';
    card = e.target;
    setTimeout(() => (e.target.className = "invisible"), 0);

}


const dragEndDoing = () => {
    console.log('END')
    event.target.className = 'doing-card-container'
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

const saveDoings = (doing) => {
  let doings;

  if (localStorage.getItem("doings") === null) {
    doings = [];
  } else {
    doings = JSON.parse(localStorage.getItem("doings"));
  }

  doings.push(doing);
  localStorage.setItem('doings', JSON.stringify(doings))
};

const getDoings = () => {
    let doings;

    if (localStorage.getItem("doings") === null) {
        doings = [];
    } else {
        doings = JSON.parse(localStorage.getItem("doings"));
    }

    doings.forEach(function(doing) {
    let doingCard = document.createElement('li');

    doingCard.classList.add('doing-card-container')
    doingCard.draggable = true;
    doingCard.addEventListener('dragstart', dragStart);
    doingCard.addEventListener('dragend', dragEndDoing);

    let doingCardDiv = document.createElement('div');
    doingCardDiv.classList.add("doing-card");
    doingCardDiv.innerText = doing;

    let doingCompleteBtn = document.createElement('button');
    doingCompleteBtn.classList.add('doing-complete-btn');
    doingCompleteBtn.innerHTML = '<i class="fa">&#10003</i>'
    doingCompleteBtn.addEventListener('click', completeBtn)

    let doingDeleteBtn = document.createElement('button');
    doingDeleteBtn.classList.add('doing-delete-btn');
    doingDeleteBtn.innerHTML = '<i class="fa">&#xf014</i>'

    doingDeleteBtn.addEventListener('click', deleteBtn)

    doingCard.appendChild(doingCardDiv);
    doingCard.appendChild(doingCompleteBtn);
    doingCard.appendChild(doingDeleteBtn);

    let doingCards = document.getElementById('doing-card-list');
    doingCards.appendChild(doingCard);
    })
}

document.addEventListener('DOMContentLoaded', getDoings)

const removeDoings = (doing) => {
    let doings;

    if (localStorage.getItem("doings") === null) {
        doings = [];
    } else {
        doings = JSON.parse(localStorage.getItem("doings"));
    }

    const word = doing.innerHTML;
    doings.splice(doings.indexOf(word), 1)
    localStorage.setItem('doings', JSON.stringify(doings))

}