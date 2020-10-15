const urlStr = JSON.parse(localStorage.getItem("gifUrl"));
console.log(urlStr)
let gifStored = document.querySelector('.gifUrl')

function recuperarValores(gifUrl){
let urlGif = document.createElement('p');
console.log(gifUrl)
urlGif.innerHTML = `<img src="${gifUrl}">`
return gifStored.appendChild(urlGif);
}

recuperarValores(urlStr);

