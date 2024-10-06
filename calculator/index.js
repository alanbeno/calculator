

let username;
document.getElementById('mybutton').onclick = function(){
    username = document.getElementById('myinput').value;
    document.getElementById("myid").textContent = `Hello ${username}`;

}