let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');

function first_arrow() { /* Lägger till class slide-1-2 (displat: none) på slide-1 */
    arrow1.parentElement.className = 'slide-1-2';
}

function second_arrow() {
    arrow2.parentElement.className = 'slide-3-2';
}


