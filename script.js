let el = document.querySelector('.displayCal');
 
let temp ='';

let sum=0;
let rev=0;
function press1(){   
    temp= temp+'1';                 
    el.innerHTML =  temp;
    sum = sum + Number.parseInt(temp);
}

function press2(){
    temp = temp+'2';
    el.innerHTML = temp; 
    sum = sum + Number.parseInt(temp);
}

function plus(){
    temp = temp+' + ';
    el.innerHTML = temp;  
}

function equal(){   
    el.innerHTML = sum;
}

function reset(){
    sum=0;
    rev=0;
    el.innerHTML=' ';
    temp = '';
}