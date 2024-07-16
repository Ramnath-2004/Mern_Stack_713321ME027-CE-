var display=document.getElementById("screen");
       function appendtoScreen(value) {
        display.value += value;
       }
function clearScreen(){
    display.value ="";
}
function calculate(){
    var equation =display.value;
    try{
        display.value=eval(equation);
    }
catch(r){
    display.value=r;
}
}
function clr(){
    display.value=display.value.slice(0,-1);
}
