/* MAIN js file for slider */

/* Variables with the element for the arrows */ 
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrow3');
let arrow4 = document.querySelector('.arrow4');
let h3 = document.querySelector("h3");
let slide2H2 = document.querySelector(".slide2H2");
let IE = document.querySelector(".IE");
let h2 = document.querySelector(".h2");
let wat = document.querySelector(".wat");


/* Functions for switching to the right with arrows */
function first_arrow() { 
    arrow1.parentElement.classList.add("none");
    arrow2.parentElement.classList.add("block"); 
}

function second_arrow() {
    arrow2.parentElement.classList.remove("block");
    arrow3.parentElement.classList.add("block");
}

function third_arrow() {
    arrow4.parentElement.classList.add("block"); 
    arrow3.parentElement.classList.remove("block");
       
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

function fourth_arrow_back() {
    arrow3.parentElement.classList.add("block");
    arrow4.parentElement.classList.remove("block");
}

function clickMe(){
    h2.classList.add("none");
    wat.classList.remove("none");
}


/* Eventlisternes */

h3.addEventListener("click", function(){
    h3.classList.add("colorChange");
});

slide2H2.addEventListener("click", function(){
    slide2H2.classList.add("colorChange");
});


/* Set Intervals */

setInterval(function addIE(){
    IE.classList.add("block");
    IE.classList.remove("none");
    IE.classList.add("blinking");
    }, 8000);
