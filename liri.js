require("dotenv").config();

const axios = require('axios');
// const Spotify = require('node-spotify-api');
const keys = require('./keys');
const moment = require("moment");
const nodeArgs = provess.argv
// const spotify = new Spotify(keys.spotify);

// node liri.js spotify-this-song '<song name here>'
// var query = "";
// for (var i = 2; i < nodeArgs.length; i++) {

//     if (i > 2 && i < nodeArgs.length) {
//     query = query + "+" + nodeArgs[i];
//     }
//     else {
//     query += nodeArgs[i];

//     }
// }
// function callSpotifyApi {
// spotify
//     .search({ type: 'track', query: "" })
//     .then(
//         function(response) {
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
// }
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
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
    movieTitle = movieTitle + "+" + nodeArgs[i];
    }
    else {
    movieTitle += nodeArgs[i];

    }
}
// var nodeArgs = process.argv;
// const queryUrl = 'http://www.omdbapi.com/?apikey=${keys.OMDB.secret}&t=' + movieTitle
function callOmbdApi(movieTitle) {
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

// node liri.js concert-this <artist/band name here> s
var bandName = "";
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
    bandName = bandName + "+" + nodeArgs[i];
    }
    else {
    bandName += nodeArgs[i];

    }
}
function callBandsInTownApi(bandName) {
    var queryUrl = 'https://rest.bandsintown.com/artists/' + bandName + '/events?app_id=codingbootcamp';
    axios.get(queryUrl)
        .then(
            function (response) {
            // console.log('response', JSON.stringify(response.data));
            response.data.forEach(concert => {
                console.log('Venue Name: ', concert.venue.name);
                console.log('Venue Location: ', `${concert.venue.city}, ${concert.venue.country}`);
                console.log(moment('Event Date: ', concert.datetime)).format('MM Do YYYY');
            });
        })
        .catch(err => {
            console.log('Error occurred: ' + err);
        });
}

