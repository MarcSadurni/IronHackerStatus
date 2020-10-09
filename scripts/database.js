
// API PARA QUOTES

// const getQuotes = () => {
//     return fetch ('https://type.fit/api/quotes')  // obtengo la lista de las quotes
//     .then((response) => response.json()) //parse JSON
//     .then((texts) =>texts.[0])  // obtener el primer texto
//     .then((texto) =>console.log(texto.text))
//     };
//     getQuotes();
    
    
// API PARA GIFS

//     function getGifs(mood) {
//         fetch(`https://api.giphy.com/v1/gifs/random?api_key=xA4rwVqIitvGbb1MJdR551Al4vFYrf8m&tag=${mood}&rating=g`)
//             .then((response) => {
//                 return response.json()
//             })
//             .then((gift) => {
//      console.log(gift.data.embed_url)
//             })
//       .catch((err)=>{
//           console.log(err)
//         })
//         }
//         getGifs('happy')