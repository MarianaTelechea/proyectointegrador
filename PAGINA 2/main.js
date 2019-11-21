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

}
