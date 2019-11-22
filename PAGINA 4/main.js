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
        <img src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}' onError="this.src='Error404.png'">
        </a>
        </li>
        `
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


  })
  .catch(function(error) {
        console.log("Error: " + error);

  })


  // BOTON DE BÚSQUEDA //


  var recuperoStorage = localStorage.getItem(".resultado-series li");


  if (recuperoStorage == "") {

    document.querySelector(".error").innerHTML = "<img src='erorbusc.png'>"
    document.querySelector(".error").style.backgroundColor = "rgb(160, 152, 133)"
  }







}
