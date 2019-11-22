window.onload = function() {


  document.querySelector(".busc").onsubmit = function(e) {



    var campoBuscar = document.querySelector(".buscarCampo");
    console.log(campoBuscar);
    var generoBuscado = campoBuscar.options[campoBuscar.selectedIndex].value;

    var campoExcluir = document.querySelector(".excluir");
    console.log(generoExcluido);
    var generoExcluido = campoExcluir.options[campoExcluir.selectedIndex].value;

    var campoOrden = document.querySelector(".orden");
    console.log(campoOrden);
    var generoOrden = campoOrden.options[campoOrden.selectedIndex].value;

    var campoAño = document.querySelector(".year");
    console.log(campoAño);
    var generoAño = campoAño.options[campoAño.selectedIndex].value;


    document.querySelector("input").value

    if (generoBuscado.length == 0 & generoExcluido.length == 0 & generoOrden.length == 0 & generoAño.length == 0 ) {
      e.preventDefault();
      UIkit.notification({
          message: 'my-message!',
          status: 'primary',
          pos: 'top-right',
          timeout: 5000
      });

}






    }


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


// API PARA TODO //

var withGenres = new URLSearchParams(location.search).get("buscados");
var notGenres = new URLSearchParams(location.search).get("excluidos");
var orden = new URLSearchParams(location.search).get("orden") ;
var year = new URLSearchParams(location.search).get("year");



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
      <a href='../PAGINA 5/descripcion.html?id= ${data.results[i].id}' >
        <img src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}' onError="this.src='Error404.png'">
        </a>
        </li>
        `

    }
  })



  // BOTON DE BÚSQUEDA //

      document.querySelector(".buscador").onsubmit = function(e) {
       var buscadorInput = document.querySelector(".buscador-simple")
       if (buscadorInput.value.length < 3) {
         e.preventDefault()
         document.querySelector(".alert-light").style.display = "block"
         setTimeout(function() {
           document.querySelector(".alert-light").style.display = "none"
         },3000)


       }}

       // API DE OS FAVORITOS //

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

     var datos = new URLSearchParams(location.search);
     var idSerie = datos.get("id");

     if (seriesFavoritas.includes(idSerie)) {
       document.querySelector("#favoritos").innerHTML = "Quitar de favoritos";
     }


       document.querySelector("#favoritos").onclick = function() {


         //Paso 2: Modificar la informacion
         // Si el gif ya era favorito
         if (seriesFavoritas.includes(idSerie)) {
           // Lo quito
           var index = seriesFavoritas.indexOf(idSerie);
           seriesFavoritas.splice(index, 1);
           document.querySelector("#favoritos").innerHTML = "Agregar a favorito ♡";
         } else {
           //Lo agrego
           seriesFavoritas.push(idSerie);
           document.querySelector("#favoritos").innerHTML = "Quitar de favoritos";
         }


         //Paso 3: Escribir en storage
         var infoParaStorage = JSON.stringify(seriesFavoritas);
         localStorage.setItem("seriesFavoritas", infoParaStorage);
         console.log(localStorage);
       }





     }
