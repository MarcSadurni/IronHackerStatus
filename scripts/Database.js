'use strict'

class Database {
  // recuperar los usuarios - el array
  getAllUsers = () => {
    // recuperar el string
    const usersStr = localStorage.getItem("users");
    // convertir el string a un array
    const usersArr = JSON.parse( usersStr );

    // si todavia no hay usuarios, devuelve un array vacio
    if (usersArr === null) {
      return [];
    } else {
      return usersArr;
    }

  }

  saveNewUser = (newUser) => {

    // recuperar el array de los usuarios del localStorage
    const usersArr = this.getAllUsers();

    // actualizar el array de usuarios
    usersArr.push(newUser);

    // convertir el array a un string
    const usersStr = JSON.stringify(usersArr);

    // almacenar lo de nuevo
    localStorage.setItem("users", usersStr);
  }
}

const db = new Database();

console.log('db', db)

// Botón Start


// API PARA QUOTES

// const getQuotes = () => {
//     return fetch ('https://type.fit/api/quotes')  // obtengo la lista de las quotes
//     .then((response) => response.json()) //parse JSON
//     .then((texts) =>texts.[Math.floor(Math.random()*texts.length)]) // obtener un texto aleatorio
//     .then((texto) =>console.log(texto.text))
//     };
//     getQuotes()
    
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