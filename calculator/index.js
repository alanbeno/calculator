

// let username;
// // 1).window.prompt
// let age = window.prompt("enter your age");

// //for alert box 
// window.alert(`your age is ${age}`);


// 2).using input
// document.getElementById('mybutton').onclick = function(){
//     username = document.getElementById('myinput').value;
//     document.getElementById("myid").textContent = `Hello ${username}`;
// }

// 3).type conversion
// let num = window.prompt("what is your age");
// num = Number(num);
// // while type conversion same goes for Boolean, String
// num += 1;
// console.log(num);
// // output will be 251 since it will be accepting strings

// COUNTER - simple counting using buttons

const increase = document.getElementById("incbtn");
const decrease = document.getElementById("decbtn");
const reset = document.getElementById("rebtn");
const display = document.getElementById("myid");

let counter = 0;

increase.onclick = function(){
    counter++;
    display.textContent = counter;
}

decrease.onclick = function(){
    counter--;
    display.textContent = counter;
}

reset.onclick = function(){
    counter = 0;
    display.textContent = counter;
}









