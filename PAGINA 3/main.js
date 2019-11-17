window.addEventListener("load", function() {

  // var queryString = window.location.search
  // // Lo transformo en objeto
  // console.log(queryString);
  //
  // var namegenres = new URLSearchParams(queryString);
  //
  // var name = namegenres.get("arrayDeGeneros")
  //
  //  document.querySelector(".titulo").innerHTML += namegenres;


  // guardo el objeto search
  var objeto_search = new URLSearchParams(window.location.search)

  var idSerie = objeto_search.get("id")

  console.log(idSerie);

fetch("https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=65eadee9d6749b2ab92f01099d10deeb&language=es-ARG")
    .then(function(respuesta) {
      return respuesta.json()
})
    .then(function(generos) {
console.log(generos)

var serie = generos

   var id = serie.id
   var arrayDeGeneros = serie.genres

var h1 = ''

 h1 += '<h1>'


 for (var i=0; i < arrayDeGeneros.length; i++){

       h1 += arrayDeGeneros[i].name

       if (i < arrayDeGeneros) {
         h1 += ' - '
       }
 }
 h1 += '</h1>'


 console.log(h1);
 document.querySelector('.titulo').innerText = h1


})

    .catch(function(error) {
console.log("Error: " + error);
})






// POSTERS
  var imgPath = "https://image.tmdb.org/t/p/original"
  var idGenero = new URLSearchParams(location.search).get("id")


    fetch("https://api.themoviedb.org/3/discover/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + idGenero ) //
      .then(function(respuesta) {
        return respuesta.json()
          })
      .then(function(informacion) {
        console.log(informacion.results);
        var arrayDeSeries = informacion.results
        console.log(arrayDeSeries);

        for (var i = 0; i < 10; i++) {

          var id = arrayDeSeries[i].id
          var imagenSerie= arrayDeSeries[i].poster_path
          var li = ''

          li += '<li>'
          li += '<a href="../PAGINA 5/descripcion.html?id=' + id +'">'
          li += '<img src=' + imgPath + imagenSerie + '>'
          li += '</a>'
          li += '</li>'

          var ul = document.querySelector("#series-genero").innerHTML += li


        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })


})
