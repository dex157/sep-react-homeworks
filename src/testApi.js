const fetch = require('node-fetch');

const search = query =>
  fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
    method: 'GET',
    mode: 'cors'
  })
    .then(response => response.json())
    .then(shows => shows.map(show => show.show));

console.log(search('band').then(result => console.log(result)));
