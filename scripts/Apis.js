
// API PARA QUOTES

const getQuotes = () => {
    let randomQuotes = document.querySelector(".random-quote");
    fetch ('https://type.fit/api/quotes')  // obtengo la lista de las quotes
    .then((response) => response.json()) //parse JSON
    .then((texts) =>texts[Math.floor(Math.random()*texts.length)]) // obtener un texto aleatorio
    .then((texto) => {let finalQuote = document.createElement("p")
    finalQuote.innerHTML = `${texto.text.toUpperCase()}`
    randomQuotes.appendChild(finalQuote)
})
return texto
    };
    getQuotes()


// API PARA GIFS
let radioButtons = document.getElementsByTagName("input");

function getData(arr) {

    let score = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            score += parseInt(arr[i].value);
        }
    }
    return score
}

function resultMood(score) {
    let numMood = ""
    if (score >= 4 && score <= 7) {
        numMood = 'dead';
    }
    else if (score >= 8 && score <= 15) {
        numMood = 'normal';
    }
    else {
        numMood = 'happy';
    }
    return numMood
}

let getGifs = document.querySelector(".random-gif");
function randomGifs(mood) {
    console.log(mood);
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=xA4rwVqIitvGbb1MJdR551Al4vFYrf8m&tag=${mood}&rating=g`)
        .then((response) => {
            return response.json()
        })
        .then((gift) => {
            console.log(gift.data.embed_url,"gift")
            return gift.data.embed_url
        })
}

async function finalGif() {
    const number = await getData(radioButtons);
    console.log(number, "number")
    const resultm = await resultMood(number);
    console.log(resultm, "resultm")
    const finalGif = await randomGifs(resultm);
    console.log(finalGif, "finalGif")
    return finalGif
}

