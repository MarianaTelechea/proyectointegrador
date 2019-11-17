window.onload = function() {
  console.log("works");
  var resultado = new URLSearchParams(location.search).get("buscador");

  fetch("https://api.themoviedb.org/3/search/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&query=" + resultado + "&page=1")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.results)
    var titulo = document.querySelector(".titulo-busqueda");
    titulo.innerText += resultado;
    var contenedorSeries = document.querySelector(".resultado-series");
    for(var i = 0; i < data.results.length; i++) {
      contenedorSeries.innerHTML +=`
      <li>
        <a href='../PAGINA 5/descripcion.html?id= ${data.results[i].id}' >
          <img src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
        </a>
      </li>
      `

    }

  })
  .catch(function(error) {
        console.log("Error: " + error);

      })
}
