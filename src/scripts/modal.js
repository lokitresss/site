const modalElement = document.querySelector('[data-js-modal]')
const modalWindowElement = document.querySelector('[data-js-modal="window"]')

function modalOpen() {
    modalElement.style.display = 'flex'
}

function modalClose() {
    modalElement.style.display = 'none'
}