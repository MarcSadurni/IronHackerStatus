
// API PARA QUOTES

// const getQuotes = () => {
//     let randomQuotes = document.querySelector(".random-quote");
//     fetch ('https://type.fit/api/quotes')  // obtengo la lista de las quotes
//     .then((response) => response.json()) //parse JSON
//     .then((texts) =>texts[Math.floor(Math.random()*texts.length)]) // obtener un texto aleatorio
//     .then((texto) => {let finalQuote = document.createElement("p")
//     finalQuote.innerHTML = `${texto.text.toUpperCase()}`
//     randomQuotes.appendChild(finalQuote)
// })
// return texto
//     };
//     getQuotes()

    
// API PARA GIFS

function getData(){
    let radioButtons = document.getElementsByTagName("input");
    let score = 0;
    for ( var i=0; i< radioButtons.length; i++){
    if(radioButtons[i].checked){
    score += parseInt(radioButtons[i].value);
    }
}
console.log(score);
}

    let getGifs = document.querySelector(".random-gif")
    function randomGifs(mood) {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=xA4rwVqIitvGbb1MJdR551Al4vFYrf8m&tag=${mood}&rating=g`)
            .then((response) => {
                return response.json()
            })
            .then((gift) => {
     console.log(gift.data.embed_url)
            })
      .catch((err)=>{
          console.log(err)
        })
        }
        randomGifs('happy')

