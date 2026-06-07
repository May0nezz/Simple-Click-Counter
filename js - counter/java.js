const counterElement = document.getElementById('counter');
const buttonElement = document.getElementById('main-btn');

let count = 0;

buttonElement.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
})
