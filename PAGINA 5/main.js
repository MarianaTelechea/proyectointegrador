window.onload = function() {

  var imgPath = "https://image.tmdb.org/t/p/original"

  // guardo el objeto search
  var objeto_search = new URLSearchParams(window.location.search)
  // del objeto search guardo el dato que viene en el campo "id"
  var idSerie = objeto_search.get("id")
  // verificao que tiene el campo.
  console.log(idSerie);


// API DE LOS POSTERS DE LAS SERIES //

    fetch("https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=65eadee9d6749b2ab92f01099d10deeb&language=es-ARG")
    .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(info) {
        console.log(info);
       var serie = info

          var id = serie.id
          var title = serie.name
          var imagenSerie = serie.poster_path
          var arrayDeGeneros = serie.genres
          var sinopsis = serie.overview
          var lenguajeSerie = serie.original_language
          var fechaEstreno = serie.first_air_date

       var li = ''

        li += '<li>'
        li += '<h2>' + title + '</h2>'
        li += '<img src="' + imgPath + imagenSerie + '">'

        li += '<h4>' + sinopsis + '</h4>'
        li += '<h4>' + "Fecha de estreno: " + fechaEstreno + '</h4>'
        li += '<h4>' + "Lenguaje: " + lenguajeSerie + '</h4>'
        li += '<h3>'


        for (var i=0; i < arrayDeGeneros.length; i++){
              li += '<a href="../PAGINA 3/lista-generos.html?id=' + arrayDeGeneros[i].id + '">'
              li += arrayDeGeneros[i].name

              if (i < arrayDeGeneros) {
                li += ' - '
              }
              li += '</a>'
        }
        li += '</h3>'
        li += '</li>'

        console.log(li);
        document.querySelector('.detalle-serie').innerHTML = li

        var imagen = info.backdrop_path
        var some_fancy_gradient = 'linear-gradient(grey, black)';
        document.querySelector("#detalle-serie").style.backgroundImage='url(' + imgPath + imagen + '),'+some_fancy_gradient+'';
        document.querySelector("#detalle-serie").style.backgroundRepeat = "no-repeat";
        document.querySelector("#detalle-serie").style.backgroundSize = "cover";
        document.querySelector("#detalle-serie").style.maxHeight = "174vh";
        document.querySelector("#detalle-serie").style.minHeight = "174vh";




})

// API DE LOS TRAILERS DE LAS SERIES //

var objeto_search = new URLSearchParams(window.location.search)
// del objeto search guardo el dato que viene en el campo "id"
var idTrailer = objeto_search.get("id")
// verificao que tiene el campo.
console.log(idTrailer);

// https://api.themoviedb.org/3/tv/1622/videos?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US
fetch("https://api.themoviedb.org/3/tv/" + idTrailer + "/videos?api_key=65eadee9d6749b2ab92f01099d10deeb")
.then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(video) {
    console.log(video.results[0].key);
    var KEY = video.results[0].key;
    document.querySelector("#video").src += KEY;
  })

}


// API DE LAS recomendaciones

var objeto_search = new URLSearchParams(window.location.search)
// del objeto search guardo el dato que viene en el campo "id"
var idRecom = objeto_search.get("id")
// verificao que tiene el campo.
console.log(idRecom);

fetch("https://api.themoviedb.org/3/tv/" + idRecom +"/similar?api_key=65eadee9d6749b2ab92f01099d10deeb&page=1")
        .then(function(respuesta){
          return respuesta.json()
        })
        .then(function(series){
          console.log(series);
          var arrayDeSeries = series.results
            for (var i=0; i < arrayDeSeries.length; i++){
              document.querySelector('#recomendaciones').innerHTML += "<li><a href='../PAGINA 5/descripcion.html?id=" + series.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + series.results[i].backdrop_path + "'></a></li>"
             }
        })