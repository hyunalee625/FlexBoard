const modal = document.getElementById('modal')
const mainPage = document.querySelector('.main-page')
const button = document.getElementById("instructions")

const backgroundClose = mainPage.addEventListener("click", function() {
    const modal = document.getElementById('modal')
    // debugger
    modal.style.display = 'none';
    mainPage.style.display = 'none';
})

const openModal = button.addEventListener("click", function() {
    modal.style.display = "block";
    mainPage.style.display = "block"
})
