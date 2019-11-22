window.onload = function() {
  var api_key = "65eadee9d6749b2ab92f01099d10deeb"
  var urlLista = "https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key+"&language=en-US&page=1"



  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=65eadee9d6749b2ab92f01099d10deeb")
    .then(function(response) {
      return response.json();
    })
    .then(function(popu) {
    console.log(popu);
    for (var i = 0; i < popu.genres.length; i++) {
       document.querySelector(".lista").innerHTML += `
        <li>
          <a href="../PAGINA 3/lista-generos.html?id=${popu.genres[i].id}&nombreDeGenero=${popu.genres[i].name}">
            ${popu.genres[i].name}
          </a>
        </li>

       `

    console.log(popu.genres[i].name);
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
       // Si la series ya era favorito
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
