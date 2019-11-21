window.addEventListener("load", function() {

  // guardo el objeto search
  var objeto_search = new URLSearchParams(window.location.search)

  var idSerie = objeto_search.get("id")
  var nombreDeGenero = objeto_search.get("nombreDeGenero")

  console.log(idSerie);
document.querySelector('.titulo').innerText = nombreDeGenero;




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

        for (var i = 0; i < informacion.results.length; i++) {

          var id = arrayDeSeries[i].id
          var imagenSerie= arrayDeSeries[i].poster_path
          var li = ''

          li += '<li class="uk-animation-toggle" tabindex="0" >'
          li += '<a href="../PAGINA 5/descripcion.html?id=' + id +'">'
          li += '<img class="uk-card uk-card-default uk-card-body uk-animation-fade" src=' + imgPath + imagenSerie + '>'
          li += '</a>'
          li += '</li>'

          var ul = document.querySelector("#series-genero").innerHTML += li


        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })




})
