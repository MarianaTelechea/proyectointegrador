window.onload = function() {
  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesFavoritas");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritas = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritas = JSON.parse(recuperoStorage);
  }

  for (var i = 0; i < seriesFavoritas.length; i++) {
    // BUSCAR ESE GIF Y MOSTRARLO
    fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritas[i] + "?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
      .then(function(response) {
        return response.json();
      })
      .then(function(serie) {
        console.log(serie);
        document.querySelector("ul").innerHTML += "<li><h3><a href=detallegif.html?idGif=" + serie.id + ">" + serie.name + "</a></h3><img src=" + serie.backdrop_path + "></li>";
      })
  }
}
