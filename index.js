function Increment(){
    var number = Number(document.getElementById('counter').innerHTML);
    document.getElementById('counter').innerHTML = number + 1;

}

function Decrement(){
    var number = Number(document.getElementById('counter').innerHTML);
    document.getElementById('counter').innerHTML = number - 1;
}

function Neutral(){
    document.getElementById('counter').innerHTML = 0;
}