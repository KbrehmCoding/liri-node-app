require('dotenv').config();

const axios = require('axios');
const moment = require('moment');
const Spotify = require('node-spotify-api');

const keys = require('./keys');

const spotify = new Spotify(keys.spotify);

function callSpotifyApi(song) {
    // TODO: Make sure to load correct song.
    if (!song) song = 'The Sign by Ace of Base';
    spotify
        .search({ type: 'track', query: song })
        .then(response => {
            // console.log('response: ', JSON.stringify(response));
            spotify
                .request(response.tracks.items[0].href)
                .then(data => {
                    // console.log('data: ', JSON.stringify(data));
                    console.log('Album name: ', data.album.name);
                    console.log('Artist name: ', data.artists[0].name);
                    console.log('Song name: ', data.name);
                    console.log('Preview url: ', data.preview_url);
                })
                .catch(err => {
                    console.error('Error occurred: ' + err);
                });
        });
}

function callOmbdApi(movieTitle) {
    if (movieTitle) {
        axios.get(`http://www.omdbapi.com/?apikey=${keys.OMDB.secret}&t=${movieTitle}`)
            .then(response => {
                // console.log('response: ', JSON.stringify(response.data));
                console.log('Movie Title: ', response.data.Title);
                console.log('Year: ', response.data.Year);
                console.log('IMDB rating: ', response.data.imdbRating);
                console.log('Rotten Tomatoes Rating: ', response.data.Ratings[1].Value); // TODO: Search array
                console.log('Country: ', response.data.Country);
                console.log('Language: ', response.data.Language);
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
}

function callBandsInTownApi(bandName) {
    axios.get(`https://rest.bandsintown.com/artists/${bandName}/events?app_id=codingbootcamp`)
        .then(response => {
            // console.log('response: ', JSON.stringify(response.data));
            response.data.forEach(concert => {
                console.log('Venue Name: ', concert.venue.name);
                console.log('Venue Location: ', `${concert.venue.city}, ${concert.venue.country}`);
                console.log('Event Date: ', moment(concert.datetime).format('MM/DD/YYYY'));
            });
        })
        .catch(err => {
            console.log('Error occurred: ' + err);
        });
}

function parseInputs() {
    const args = process.argv.slice(2);
    if (args[0] === 'spotify-this-song') {
        callSpotifyApi(args[1]);
    } else if (args[0] === 'movie-this') {
        callOmbdApi(args[1]);
    } else if (args[0] === 'concert-this') {
        callBandsInTownApi(args[1]);
    } else if (args[0] === 'do-what-it-says') {
        // TODO
    } else {
        console.error('Invalid Command');
    }
}

parseInputs();
