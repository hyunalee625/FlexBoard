// function allowDrop(e) {
//     e.preventDefault();
// }

// function dragStart(e) {
//     e.dataTransfer.setData("text", e.target.id)
// }

// function dropHere(e) {
//     e.preventDefault();

//     let data = e.dataTransfer.getData("text") // "data" type of "text"
//     e.target.appendChild(document.getElementById(data));
// }

const cards = document.querySelectorAll('.card');
const boards = document.querySelectorAll('.boards');

let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    card.addEventListener('dragstart', function(e) {
        draggedCard = card;
        // setTimeout(function() {
        //     card.style.display = 'none';
        // }, 0)
    }, 0)

    card.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedCard.style.display = 'block';
            draggedCard = null;
        }, 0)
    })

    for (let j = 0; j < boards.length; j++) {
        const board = boards[j];

        board.addEventListener('dragover', function(e) {
            e.preventDefault();

        }, 0)

        board.addEventListener('dragenter', function(e) {
            e.preventDefault();
        }, 0)

        board.addEventListener('drop', function(e) {
            e.preventDefault();
            this.append(draggedCard);

        }, 0)
    }
}