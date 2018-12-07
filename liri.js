require("dotenv").config();

const axios = require('axios');
const Spotify = require('node-spotify-api');

const keys = require('./keys');

const spotify = new Spotify(keys.spotify);
//node liri.js spotify-this-song '<song name here>'

spotify
    .search({ type: 'track', query: ' ' })
    .then(response => {
        // console.log('response', JSON.stringify(response));
        spotify
            .request(response.tracks.items[0].href)
            .then(data => {
                // console.log('data', JSON.stringify(data));
                console.log('album name', data.album.name);
                console.log('artist name', data.artists[0].name);
                console.log('song name', data.name);
                console.log('preview url', data.preview_url);
            })
            .catch(err => {
                console.error('Error occurred: ' + err);
            });
    })
    .catch(err => {
        console.log('err', err);
    });
// spotify
//     .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//     .then(function(data) {
//         console.log('data', JSON.stringify(data));
//     })
//     .catch(function(err) {
//         console.error('Error occurred: ' + err);
//     });
const axios = new axios();
axios

axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=2ad14841" + movie + process.env.OMDB_ID)
    then(response => {
        axios
            .request(response.tracks.items[0].href)
            then(data => {
                console.log('Movie Title', data.movie.title);
                console.log('Year', data.year);
                console.log('IMDB rating', data.IMDB.rating);
                console.log('Rotten Tomatoes Rating', data.Rotten.Tomatoes,rating);
                console.log("");
                console.log("Language", data.language);
                console.log('Movie plot', data.movie.plot);
                console.log('Actors', data.actors);
            })
                .catch(err => {
                    console.log(axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=2ad14841" + "Mr._Nobody" + process.env.OMDB_ID))
                })
    })
//node liri.js movie-this '<movie name here>'
const axios = new axios();
axios
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=dotenv")
    then(response => {
        axios
            .request(response.tracks.items[0].href)
            then(data => {
                console.log('Venue Name', data.venue.name);
                console.log('Venue Location', data.venue.location);
                console.log('Event Date', data.event.date (MM/DD/YYYY));
            })
                .catch(err => {
                    console.log('Error occured' + err);
                })
    })
//node liri.js concert-this <artist/band name here>
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
