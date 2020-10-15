
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
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=xA4rwVqIitvGbb1MJdR551Al4vFYrf8m&tag=${mood}&rating=g`)
        .then((response) => {
            return response.json()
        })
        .then((gift) => {
            return gift.data.images.downsized_large.url
        })
}

async function finalGif() {
    const number = await getData(radioButtons);
    const resultm = await resultMood(number);
    const finalGif = await randomGifs(resultm);
    await localStorage.setItem('gifUrl', JSON.stringify(finalGif))
    console.log(finalGif, "finalGif")
    return finalGif
}

