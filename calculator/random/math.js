// console.log(Math.PI);
// console.log(Math.E);

// random number generator
// -----------------------
// console.log('hi');
const myButton = document.getElementById("mybutton");
const myLabel = document.getElementById("mylabel");
const myButton1 = document.getElementById("mybutton1");

const max = 100;
const min = 50;

myButton.onclick = function(){
    let randomnum = Math.floor(Math.random()*(max-min))+min;
    myLabel.textContent = randomnum;
}

myButton1.onclick = function(){
    
    myLabel.textContent = " ";
}
