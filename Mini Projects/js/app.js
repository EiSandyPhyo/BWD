let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");

let showInDisplay = function (x) {
    displayBox.innerText += x;
} 

function calc(){
    let result = eval(displayBox.innerText);
    displayBox.innerText = result;
}

let clearAll = function () {
    displayBox.innerText = "";
}

let clearLast = function(){
    displayBox.innerText = displayBox.innerText.substr(0,displayBox.innerText.length-1)
}