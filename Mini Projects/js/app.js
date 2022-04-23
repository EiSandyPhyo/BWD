let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operators = ["+","-","*","/","%"];


let filter = x => {
    let current = displayBox.innerText;
    let lastChr = current[current.length-1];

    if(current == "0" && x !="."){
        clearLast();
    }

    if(operators.includes(x) && operators.includes(lastChr)){
        //console.log(lastChr);
        return false;
    }

    return true;
}



let showInDisplay = function (x) {
    if(filter(x)){
        displayBox.innerText += x;
    }
}
 //နောက်ဆုံး char ဟာ operator ထည်းမက မဖြစ်မ တွက်မယ်လို့ စဥ်စားထားတာဖြစ်ပါတယ်
let calc = function () {
    if(!operators.includes(displayBox.innerText[displayBox.innerText.length-1])){
        displayBox.innerText = eval(displayBox.innerText);
    }
}

let clearAll = function () {
    displayBox.innerText = "";
    window.location.reload();

}

let clearLast = function () {
    displayBox.innerText = displayBox.innerText.substr(0, 
        displayBox.innerText.length - 1)
}



// keypad သည် key များအားလုံးရဲ့ parent element ဖြစ်တဲ့အတွက် key တွေကိုနှိပ်တာဟာ keypad ကိုနှိပ်တာနဲ့ တူညီပါတယ်

keyPad.addEventListener("click", ()=>{
    if(displayBox.innerText.length == 20){
        //displayBox.innerText += "1";
    }else if(displayBox.innerText.length>10){
        displayBox.style.fontSize = "30px";
    }else if(displayBox.innerText.length>5){
        displayBox.style.fontSize = "60px";
    }
})