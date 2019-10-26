const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const par = document.createElement("p");
par.textContent = "Hey I'm red!"
par.style.color = 'red';
container.appendChild (par);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";
container.insertBefore(h3 , content);

const div1 = document.createElement("div");
div1.style.border = "solid";
div1.style.borderColor = "black";
div1.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div1.appendChild(h1);

const par2 = document.createElement("p");
par2.textContent = "ME TOO!";
div1.appendChild(par2);

container.appendChild (div1);

var btn = document.querySelector('#btn');
btn.addEventListener("click", myFunction);
function myFunction() {
    alert ("Hello World!");
  };

