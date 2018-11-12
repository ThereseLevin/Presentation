let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrow3');

function first_arrow() { 
    arrow1.parentElement.className = 'none';
    arrow2.parentElement.className = 'block';
}

function second_arrow() {
    arrow2.parentElement.className = 'none';
    arrow3.parentElement.className = 'block';
}

function second_arrow_back() {
    arrow2.parentElement.className = 'none';
    arrow1.parentElement.className = 'block';
}

function third_arrow_back() {
    arrow2.parentElement.className = 'block';
    arrow3.parentElement.className = 'none';
}

