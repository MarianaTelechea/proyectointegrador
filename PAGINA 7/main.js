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
        document.querySelector(".listado-favoritas").innerHTML += `
            <li>
              <h3>
                <a href='../PAGINA 5/descripcion.html?id= ${serie.id}' > ${serie.name}</a>
              </h3>
                <a href='../PAGINA 5/descripcion.html?id= ${serie.id}' class="uk-animation-toggle" tabindex="0">
                  <img class="uk-card uk-card-default uk-card-body uk-animation-fade" src='https://image.tmdb.org/t/p/original/${serie.poster_path}' onError="this.src='Error404.png'">
                </a>
            </a>
            </li>
            `
      })
  }

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

     // Si todavía no tenía series favoritos
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
         // Si la serie ya era favorito
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
