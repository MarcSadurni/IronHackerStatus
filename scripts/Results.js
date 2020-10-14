const gifUrl = localStorage.getItem("finalGif");
let img = document.createElement('img');
img.src=gifUrl;
let div=document.querySelector(".random-gif");
div.appendChild(img);



