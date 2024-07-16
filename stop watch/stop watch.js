let seconds=0;
let minutes=0;
let hours=0;
function incrementSeconds(){
    seconds++;
    minutes+=Math.floor(seconds/60);
    seconds=Math.floor(seconds%60);
    hours+=Math.floor(minutes/60);
    minutes=Math.floor(minutes%60);
    document.getElementById('display').innerHTML=`${hours}:${minutes}:${seconds}`;
}
function start(){
    interval=setInterval(incrementSeconds,1000);
}

function pause(){
    clearInterval(interval);
    interval=null;
    
}
function stop(){
    clearInterval(interval);
    seconds = 0;
    document.getElementById("display").textContent = "00:00:00";
}





































