// let moveDoCard = document.getElementById('todo-board')  
// moveDoCard.addEventListener('dragstart', dragStart);
// moveDoCard.addEventListener('dragend', dragEnd);


// let board;

// const dragStart = (e) => {
//     console.log('START')
//     e.target.className += ' hold';
//     board = e.target;
//     setTimeout(() => (e.target.className = "invisible"), 0);

// }

// const dragEnd = () => {
//     console.log('END')
//     event.target.className = 'sub-board-container'
// }

// const drops = document.querySelectorAll('.drop-boards');
// console.log(drops);

// const dragEnter = (e) => {
//     e.preventDefault();
//     console.log('ENTER')
// }

// const dragOver = (e) => {
//     e.preventDefault();
//     console.log('OVER')
// }

// const dragLeave = () => {
//     console.log('LEFT')
// }

// const dragDrop = (e) => {
//     console.log(e.target);
//     e.target.append(board)
// }

// for (const dropboards of drops) {
//     dropboards.addEventListener('dragenter', dragEnter);
//     dropboards.addEventListener('dragover', dragOver);
//     dropboards.addEventListener('dragleave', dragLeave);
//     dropboards.addEventListener('drop', dragDrop);
// }