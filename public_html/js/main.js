/* MAIN js file for slider */

/* Variables with the element for the arrows */ 
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrow3');
let arrow4 = document.querySelector('.arrow4');
let arrow5 = document.querySelector('.arrow5');
let slide1 = document.querySelector('.slide-1');
let h3 = document.querySelector("h3");
let slide2H2 = document.querySelector(".slide2H2");
let IE = document.querySelector(".IE");
let h2 = document.querySelector(".h2");
let wat = document.querySelector(".wat");
let flexInfo = document.querySelector(".flexInfo");
let f1 = document.querySelector("#f1");
let f2 = document.querySelector("#f2");
let f3 = document.querySelector("#f3");
let f4 = document.querySelector("#f4");
let f5 = document.querySelector("#f5");
let f6 = document.querySelector("#f6");
let f7 = document.querySelector(".f7");
let f8 = document.querySelector(".f8");
let f9 = document.querySelector(".f9");
let f10 = document.querySelector(".f10");
let f11 = document.querySelector(".f11");
let f12 = document.querySelector(".f12");
let change = document.querySelector(".change");
let hideArrow = document.querySelector(".hideArrow");
let display = document.querySelector("#display");
let justify = document.querySelector("#justify");
let align = document.querySelector("#align");
let audio = document.querySelector("audio");
let slide22list = document.querySelector(".slide22list");

audio.classList.add('audioFade');


/* Functions for switching to the right with arrows */
function first_arrow() { 
    slide1.classList.add("none");
    arrow2.parentElement.classList.add("block"); 
    

    if (IE.classList = "blinking"){
        setInterval(function removeIE(){
            IE.classList.add("none");
            IE.classList.remove("blinking");
            }, 10000);
    return;
     } else {
        IE.classList.add("blinking");
     }

}

function second_arrow() {
    arrow2.parentElement.classList.remove("block");
    arrow3.parentElement.classList.add("block");
    
}

function third_arrow() {
    arrow4.parentElement.classList.add("block"); 
    arrow3.parentElement.classList.remove("block");
       
}

function fourth_arrow() {
    arrow5.parentElement.classList.add("block"); 
    arrow4.parentElement.classList.remove("block");
       
}


/* Functions for switching to the left with arrows */

function second_arrow_back() {
    arrow2.parentElement.classList.remove("block");
    slide1.classList.remove("none");
    h2.classList.remove("none");
    wat.classList.add("none");
    flexInfo.classList.add("none");
    hideArrow.classList.add("hideArrow");
}

function third_arrow_back() {
    arrow2.parentElement.classList.add("block");
    arrow3.parentElement.classList.remove("block");
}

function fourth_arrow_back() {
    arrow3.parentElement.classList.add("block");
    arrow4.parentElement.classList.remove("block");
}

function fifth_arrow_back() {
    arrow4.parentElement.classList.add("block");
    arrow5.parentElement.classList.remove("block");
}

function clickMe(){
    h2.classList.add("none");
    wat.classList.remove("none");
    /* Hide click here */
    let press = document.querySelector('.press');
    press.style.display = 'none';
 
}

function clickMe2(){
    wat.classList.add("none");
    flexInfo.classList.remove("none");
    hideArrow.classList.remove("hideArrow");
}


/* Eventlisternes */

slide2H2.addEventListener("click", function(){
    slide2H2.classList.add("colorChange");
});

document.addEventListener('keydown', function(event) {
    display.parentElement.className = "block";
    justify.parentElement.className = "block";
    align.parentElement.className = "block";
    slide22list.classList.add("audioFade");
});


f7.addEventListener("click", function(){
    f7.classList.add("active");
    f2.parentElement.className = "flexStart";
    f8.classList.remove("active");
    f9.classList.remove("active");
    f10.classList.remove("active");
    f11.classList.remove("active");
    f12.classList.remove("active");
    change.innerHTML = "flex-start";
});

f8.addEventListener("click", function(){
    f8.classList.add("active");
    f2.parentElement.className = "flexEnd";
    f7.classList.remove("active");
    f9.classList.remove("active");
    f10.classList.remove("active");
    f11.classList.remove("active");
    f12.classList.remove("active");
    change.innerHTML = "flex-end";
});

f9.addEventListener("click", function(){
    f9.classList.add("active");
    f2.parentElement.className = "center";
    f8.classList.remove("active");
    f7.classList.remove("active");
    f10.classList.remove("active");
    f11.classList.remove("active");
    f12.classList.remove("active");
    change.innerHTML = "center";
});

f10.addEventListener("click", function(){
    f10.classList.add("active");
    f2.parentElement.className = "spaceBetween";
    f7.classList.remove("active");
    f8.classList.remove("active");
    f9.classList.remove("active");
    f11.classList.remove("active");
    f12.classList.remove("active");
    change.innerHTML = "space-between";
});

f11.addEventListener("click", function(){
    f11.classList.add("active");
    f2.parentElement.className = "spaceAround";
    f7.classList.remove("active");
    f8.classList.remove("active");
    f9.classList.remove("active");
    f10.classList.remove("active");
    f12.classList.remove("active");
    change.innerHTML = "space-around";
});

f12.addEventListener("click", function(){
    f12.classList.add("active");
    f2.parentElement.className = "spaceEvenly";
    f7.classList.remove("active");
    f8.classList.remove("active");
    f9.classList.remove("active");
    f10.classList.remove("active");
    f11.classList.remove("active");
    change.innerHTML = "space-evenly";
});

// Another way to do it
// f12.addEventListener("click", function(){
//     f12.classList.add("active");
//     f2.parentElement.className = "spaceEvenly";
//     // f2.parentElement.classList.add("spaceEvenly");
//     // f2.parentElement.classList.remove("center");
//     // f2.parentElement.classList.remove("flexEnd");
//     // f2.parentElement.classList.remove("spaceBetween");
//     // f2.parentElement.classList.remove("spaceAround");
//     // f2.parentElement.classList.remove("flexStart");
//     f7.classList.remove("active");
//     f8.classList.remove("active");
//     f9.classList.remove("active");
//     f10.classList.remove("active");
//     f11.classList.remove("active");
//     change.innerHTML = "space-evenly";
// });


