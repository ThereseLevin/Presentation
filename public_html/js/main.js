/*
 * MAIN js file for slider
 */

/* Variables with the element for the arrows */ 
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrowBack3');

/* Functions for switching to the right with arrows */
function first_arrow() { 
    arrow1.parentElement.classList.add("none");
    arrow2.parentElement.classList.add("block");
}

function second_arrow() {
    arrow2.parentElement.classList.remove("block");
    arrow3.parentElement.classList.add("block");
}

/* Functions for switching to the left with arrows */

function second_arrow_back() {
    arrow2.parentElement.classList.remove("block");
    arrow1.parentElement.classList.remove("none");
}

function third_arrow_back() {
    arrow2.parentElement.classList.add("block");
    arrow3.parentElement.classList.remove("block");
}

