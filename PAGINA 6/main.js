window.onload = function() {
  console.log("works");


  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=65eadee9d6749b2ab92f01099d10deeb")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.genres)
    for (var i = 0; i < data.genres.length; i++) {
       document.querySelector("#selectGenre").innerHTML += "<option id='"+data.genres[i].id+"'>" + data.genres[i].name + "</option>";

       document.querySelector("#excludeGenre").innerHTML += "<option id='"+data.genres[i].id+"'>" + data.genres[i].name + "</option>";
       console.log(data.genres[i].name);
    }
  })


}



// var titulo = document.querySelector(".titulo-busqueda");
// titulo.innerText += resultado;
 // var contenedorSeries = document.querySelector(".resultado-series");
 // for(var i = 0; i < data.results.length; i++) {
//  contenedorSeries.innerHTML += "<li><a href='../PAGINA 5/descripcion.html?id=" + data.results[i].id+ "'>" + data.results[i].name + "</a></li>"