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
