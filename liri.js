require("dotenv").config();

const axios = require('axios');
const Spotify = require('node-spotify-api');

const keys = require('./keys');

const spotify = new Spotify(keys.spotify);

spotify
    .search({ type: 'track', query: 'All the Small Things' })
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
