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
          <a href="../PAGINA 3/lista-generos.html?id=${popu.genres[i].id}">
            ${popu.genres[i].name}
          </a>
        </li>

       `

              console.log(popu.genres[i].name);
   }
})

}


// "<li><a href='../PAGINA 3/lista-generos.html" + popu.genres[i].name' "</a></li>" ;


// "<a href='../PAGINA 5/descripcion.html?id=" + popu.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + popu.results[i].backdrop_path + "'></a>";
