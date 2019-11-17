window.onload = function() {


//EL PRINCIPAL//


  var api_key = "65eadee9d6749b2ab92f01099d10deeb"
  var urlPopulares = "https://api.themoviedb.org/3/tv/airing_today?api_key=" + api_key + "&language=en-US&page=1"

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
    .then(function(response) {
      return response.json();
    })
    .then(function(popu) {
      console.log(popu.results);
      var contenedorCarousel = document.querySelector("#contenedor-carousel");
      for(var i = 0; i < popu.results.length; i++) {
       contenedorCarousel.innerHTML += "<a href='../PAGINA 5/descripcion.html?id=" + popu.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + popu.results[i].backdrop_path + "'></a>";

        //contenedorCarousel.innerHTML += `
        //   <li class="uk-width-3-4">
        //     <div class="uk-cover-container">
        //       <a href="../PAGINA 5/descripcion.html?id=${popu.results[i].id}">
        //       <img src="https://image.tmdb.org/t/p/original/${popu.results[i].poster_path}" uk-cover >
        //       </a>
        //     </div>
        //   </li>
        // `;


      }
    })


    // TOP 5 //

    var api_key = "65eadee9d6749b2ab92f01099d10deeb"
    var urlPopulares = "https://api.themoviedb.org/3/tv/popular?api_key="+api_key+"&language=en-US&page=1"

    fetch("https://api.themoviedb.org/3/tv/popular?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
      .then(function(response) {
        return response.json();
      })
      .then(function(popu) {
        console.log(popu.results);
        var losMejoresCinco = document.querySelector("#lostop5");

        for(var i = 0; i < 5; i++) {
          losMejoresCinco.innerHTML += "<a href='../PAGINA 5/descripcion.html?id=" + popu.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + popu.results[i].poster_path + "'></a>";

        /*  losMejoresCinco.innerHTML += "<h2>" + popu.results[i].name + "</h2>"; */
        }

      })

      // TOP RATED //

      var api_key = "65eadee9d6749b2ab92f01099d10deeb"
      var urlPopulares = "https://api.themoviedb.org/3/tv/top_rated?api_key="+api_key+"&language=en-US&page=1"

      fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
        .then(function(response) {
          return response.json();
        })
        .then(function(rated) {
        console.log(rated.results);
        var mejorRated = document.querySelector("#rated");
        for(var i = 0; i < 6; i++) {
          mejorRated.innerHTML += "<a href='../PAGINA 5/descripcion.html?id=" + rated.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + rated.results[i].poster_path + "'></a>";
        }

        })





  // SECCION: WATCH NOW //

  var api_key = "65eadee9d6749b2ab92f01099d10deeb"
  var urlPopulares = "https://api.themoviedb.org/3/tv/airing_today?api_key=" + api_key + "&language=en-US&page=1"

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
    .then(function(response) {
      return response.json();
    })
    .then(function(now) {
      console.log(now.results);
    var contenedorCarousel = document.querySelector("#slideToday");

    for(var i = 0; i < now.results.length; i++) {
      var laImagen = now.results[i].poster_path;
      console.log(laImagen)
      contenedorCarousel.innerHTML += "<a href='../PAGINA 5/descripcion.html?id=" + now.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + laImagen + "'></a>";
      }
    })
}
