let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operators = ["+","-","*","/","%"];


let filter = x => {
    let current = displayBox.innerText;
    let lastChr = current[current.length-1];
   

    //current in operators;

    if(current == "0" && x !="."){
        console.log("f "+x);
        clearLast();
    }

    if(operators.includes(x)){
        if(operators.includes(lastChr)){
            return false;
        }
    }

    return true;
}


function showInDisplay (x) {
    if(filter(x)){
        displayBox.innerText += x;
    }
}
 //နောက်ဆုံး char ဟာ operator ထဲက မဖြစ်မ တွက်မယ်လို့ စဥ်စားထားတာဖြစ်ပါတယ်
function calc () {
    if(!operators.includes(displayBox.innerText[displayBox.innerText.length-1])){
        displayBox.innerText = eval(displayBox.innerText);
    }
}

//ပထမဆုံး စနှိပ်တဲ့ key က operator ထဲက မဖြစ်ရဘူး


function clearAll () {
    displayBox.innerText = "";
    window.location.reload();

}

function clearLast () {
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