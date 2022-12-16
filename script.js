// //write your code here
// //fetch single film
// function fetchSingleFilm(id){
//     let url = 'https://yuongren.github.io/WK3-Code-Challenge/db.json'+id;
//     fetch(url).then((response) => response.json()).then((film)=> console.log(film.films.forEach));
// }
// //display single film details
// function renderSingleFilm(films){
//     const divFilmContents = document.getElementById('film-content');
//     divFilmContents.innerHTML = "";
//     //title
//     const h2 = document.createElement('h2')
//     h2.innerHTML = films.title;
//     divFilmContents.appendChild(h2);
//     //Description
//     const ParagraphForDescription = document.createElement('P');
//     ParagraphForDescription.innerHTML = "<b>Description: </b>"+films.description;
//     divFilmContents.appendChild(ParagraphForDescription);
//     //runtime
//     const h3 =document.createElement('h3')
//     h3.innerHTML ="<b>Runtime: </b>" + films.runtime
//     divFilmContents.appendChild(h3)
//     //Showtime
//     const p =document.createElement('p')
//     p.innerHTML ="<b>Showtime: </b>" + films.showtime
//     divFilmContents.appendChild(p)
//     //available tickets
//     const paragraphAvailableTickets = document.createElement('p');
//     paragraphAvailableTickets.setAttribute('id','tickets');
//     const availableTickets = films.capacity - films.tickets_sold;
//     paragraphAvailableTickets.innerHTML = "<b>Available tickets: </b>"+availableTickets;
//     divFilmContents.appendChild(paragraphAvailableTickets)
//     //poster
//     const img = document.createElement('img');
//     //img.innerHTML = "<b>Description: </b>"+film.description;
//     img.setAttribute("src",films.poster);
//     img.setAttribute("height", "300");
//     img.setAttribute("width", "300");
//     divFilmContents.appendChild(img)
//     //button
//     const button = document.createElement('button');
//    button.textContent = "Buy Ticket";
//     divFilmContents.appendChild(button);
//    button.addEventListener('click', function() {
//         const ticketText = document.getElementById('tickets').innerHTML;
//         //get tickets as a substring of ticketText
//         const availableTickets = ticketText.substring(26);
//         if(availableTickets <= 0) {
//             alert("sold out");
//         }
//         else{
//             const remainingTickets =availableTickets - 1;
//         //alert(availableTickets);
//         document.getElementById('tickets').innerHTML = "<b>Available tickets: </b>" + remainingTickets;
//         alert("You successfully bought a ticket")
//         }
//     })
// }
//      //fetching the  film list
// function fetchFilmsList() {
//     fetch('https://yuongren.github.io/WK3-Code-Challenge/db.json').then((response) => response.json()).then((films)=> console.log(films.films.forEach));
// }
//     //display of the film details
//     function renderFilmsList(films) {
//         films.forEach(films => {
//             const filmsList =document.getElementById('sidebar')
//             const a = document.createElement('a');
//             a.innerHTML=films.title;
//             if(films.id == 1){
//                 a.className = "active";
//             }
//             a.onclick = function() {
//                fetchSingleFilm(films.id);
//             };
//             filmsList.appendChild(a);
//         });
//       }
//     document.addEventListener('DOMContentLoaded', (event) => {
//         fetchSingleFilm(1);
//         fetchFilmsList();
//       });



function moviesDo() {
    const movies = document.getElementById("films");
  
    const filmSetup = document.getElementById("filmSetup");
  
    fetch("https://yuongren.github.io/WK3-Code-Challenge/db.json")
      .then((response) => response.json())
      .then((data) => createFilmDetails(data.films, filmSetup));
  
    fetch("https://yuongren.github.io/WK3-Code-Challenge/db.json")
      .then((resp) => resp.json())
      .then((data) => {
        data.films.forEach((films) => {
          const movieList = document.createElement("li");
  
          const pTitle = document.createElement("p");
          pTitle.innerText = films.title;
          movieList.appendChild(pTitle);
          movies.appendChild(movieList);
  
          movieList.addEventListener("click", () => {
            filmSetup.innerHTML = "";
            createFilmDetails(films, filmSetup);
          });
        });
      });
  }
  document.addEventListener("DOMContentLoaded", moviesDo);
  
  function createFilmDetails(data, andAdd) {
    const title = document.createElement("h2");
    title.innerText = data.title;
    andAdd.appendChild(title);
  
    const runtime = document.createElement("p");
    runtime.innerHTML = `<b>Run Time:</b> ${data.runtime}`;
    andAdd.appendChild(runtime);
  
    const poster = document.createElement("img");
    poster.src = data.poster;
    andAdd.appendChild(poster);
  
    const showtime = document.createElement("p");
    showtime.innerHTML = `<b>Show Time:</b> ${data.showtime}<p><b>Available Tickets<b></p>`;
    andAdd.appendChild(showtime);
  
    const description = document.createElement("p");
    description.innerText = data.description;
    andAdd.appendChild(description);
  
    const capacity = data.capacity;
    const soldTickets = data.tickets_sold;
    let remainingTickets = capacity - soldTickets;
  
    const ticketsAvailable = document.createElement("p");
    ticketsAvailable.innerText = remainingTickets;
    andAdd.appendChild(ticketsAvailable);
  
    //buy ticket solution
    const buyTicketBtn = document.createElement("button");
    buyTicketBtn.innerText = "Buy Ticket";
    buyTicketBtn.addEventListener("click", () => {
      if (remainingTickets > 1) {
        remainingTickets -= 1;
        ticketsAvailable.innerText = remainingTickets;
      } else {
        ticketsAvailable.innerText = 0;
        buyTicketBtn.disabled = true;
        buyTicketBtn.innerText = "SOLD OUT";
      }
  
      
    });
    andAdd.appendChild(buyTicketBtn);
  }