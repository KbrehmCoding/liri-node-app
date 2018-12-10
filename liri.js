require("dotenv").config();

const axios = require('axios');
// const Spotify = require('node-spotify-api');

const keys = require('./keys');

// const spotify = new Spotify(keys.spotify);

//node liri.js spotify-this-song '<song name here>'

// spotify
//     .search({ type: 'track', query: 'another one bites the dust' })
//     .then(response => {
//         // console.log('response', JSON.stringify(response));
//         spotify
//             .request(response.tracks.items[0].href)
//             .then(data => {
//                 // console.log('Data', JSON.stringify(data));
//                 console.log('Album name: ', data.album.name);
//                 console.log('Artist name: ', data.artists[0].name);
//                 console.log('Song name: ', data.name);
//                 console.log('Preview url: ', data.preview_url);
//             })
//             .catch(err => {
//                 console.error('Error occurred: ' + err);
//             });
//     });

// spotify
//     .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//     .then(function(data) {
//         console.log('data', JSON.stringify(data));
//     })
//     .catch(function(err) {
//         console.error('Error occurred: ' + err);
//     });

// node liri.js movie-this '<movie name here>'
var movieTitle = "";
// var nodeArgs = process.argv;
// const queryUrl = 'http://www.omdbapi.com/?apikey=${keys.OMDB.secret}&t=' + movieTitle
function movie-this(movieTitle) {
    const queryUrl = 'http://www.omdbapi.com/?apikey=${keys.OMDB.secret}&t=' + movieTitle
    axios.get(queryUrl)
        .then(
            function(response) {
            // console.log('response: ', JSON.stringify(response.data));
            console.log('Movie Title: ', response.data.Title);
            console.log('Year: ', response.data.Year);
            console.log('IMDB rating: ', response.data.imdbRating);
            console.log('Rotten Tomatoes Rating: ', response.data.movieRatings[1]);
            console.log("Country: ", response.data.Country);
            console.log("Language: ", response.data.Language);
            console.log('Movie plot: ', response.data.Plot);
            console.log('Actors: ', response.data.Actors);
        })
        .catch(err => {
            console.log('Error occurred: ', err);
        });
} else {
    axios.get(`http://www.omdbapi.com/?apikey=${keys.OMDB.secret}&t=Mr. Nobody`)
        .then(response => {
            console.log('Mr. Nobody', response.data);
        });
}

// node liri.js concert-this <artist/band name here>
var bandName = "";
function concert-this(bandName) {
    var queryUrl = 'https://rest.bandsintown.com/artists/' + bandName + '/events?app_id=codingbootcamp';
    axios.get(queryUrl)
        .then(
            function (response) {
            // console.log('response', JSON.stringify(response.data));
            response.data.forEach(concert => {
                console.log('Venue Name: ', concert.venue.name);
                console.log('Venue Location: ', `${concert.venue.city}, ${concert.venue.country}`);
                console.log('Event Date: ', concert.datetime);
            });
        })
        .catch(err => {
            console.log('Error occurred: ' + err);
        });
}

