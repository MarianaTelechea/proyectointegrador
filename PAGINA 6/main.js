window.onload = function() {
  console.log("works");

// API PARA LOS GENEROS //

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=65eadee9d6749b2ab92f01099d10deeb")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {

    for (var i = 0; i < data.genres.length; i++) {
       document.querySelector("#selectGenre").innerHTML += "<option value='"+data.genres[i].id+"'>" + data.genres[i].name + "</option>";

       document.querySelector("#excludeGenre").innerHTML += "<option value='"+data.genres[i].id+"'>" + data.genres[i].name + "</option>";
    }
  })

// API PARA LOS AÑOS //








// API PARA TODO //

var withGenres = new URLSearchParams(location.search).get("buscados");
var notGenres = new URLSearchParams(location.search).get("excluidos");
var orden = new URLSearchParams(location.search).get("orden") ;
var year = new URLSearchParams(location.search).get("year");

console.log("https://api.themoviedb.org/3/discover/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&sort_by=" + orden + "&first_air_date_year=" + year + "&page=1&timezone=America%2FNew_York&with_genres=" + withGenres + "&without_genres=" + notGenres + "&include_null_first_air_dates=false");

  fetch("https://api.themoviedb.org/3/discover/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&sort_by=" + orden + "&first_air_date_year=" + year + "&page=1&timezone=America%2FNew_York&with_genres=" + withGenres + "&without_genres=" + notGenres + "&include_null_first_air_dates=false")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.results)
    var contenedorSeries = document.querySelector(".resultado");
    for (var i = 0; i < 10; i++) {
      contenedorSeries.innerHTML +=`
      <li>
      <a href='../PAGINA 5/descripcion.html?id= ${data.results[i].name}' >
        <img src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}' onError="this.src='Error404.png'">
        </a>
        </li>
        `

    }
  })

}


// var url = "https://api.themoviedb.org/3/discover/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US"
//   if (orden != "" || excluidos != "")
//
//     url+= "&orden = " + orden
//
// }



// var titulo = document.querySelector(".titulo-busqueda");
// titulo.innerText += resultado;
 // var contenedorSeries = document.querySelector(".resultado-series");
 // for(var i = 0; i < data.results.length; i++) {
//  contenedorSeries.innerHTML += "<li><a href='../PAGINA 5/descripcion.html?id=" + data.results[i].id+ "'>" + data.results[i].name + "</a></li>"
