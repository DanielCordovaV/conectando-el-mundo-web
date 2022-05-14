const express = require('express');
const {default: axios} = require('axios');
var cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
const port = process.env.port || 3001;

const {api_key} = require( './credentials.json' );
const baseUrl = 'https://api.themoviedb.org/3';

const newMovie = {"movie3": {
  "name": "Due Date",
  "year": 2010,
  "genre": "Comedy"
}};

app.get('/api', (req, res) => {
  res.json({message: "hello from the serverside"});
})

app.get('/api/movies', (req, res) => {
  fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
    res.send(data);
  })
});

app.post('/api/movies', (req, res) => {
  var available = {};
  axios.get( `${baseUrl}/search/movie`, {params: {api_key: api_key, query: newMovie.movie3.name}})
  .then( response => {
    if (response.data.total_results) {
          var img = `https://image.tmdb.org/t/p/original${response.data.results[0].poster_path}`;
          const id = response.data.results[0].id;
          axios.get(`${baseUrl}/movie/${id}/watch/providers`, {params: {api_key: api_key}})
            .then ( response => {
              const available = response.data.results.MX;
              fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
                data = JSON.parse(data);
                data['movie3'] = newMovie['movie3'];
                data.movie3.img = img;
                data.movie3.available = available;
                data.img;
                res.json(data);
                data = JSON.stringify(data);
                fs.writeFile(`${__dirname}/movies.json`, data, 'utf-8', err => {if(err) {console.log(err)}})
              });
            })
            .catch((error) => {
              console.log(error); 
            });
      } else {
        res.json({
          message: "Movie not found on TMDB"
        });
      }
    })
    .catch((error) => {
      console.log(error); 
  });
});

app.put('/api/movies', (req, res) => {
  
  var available = {};
  axios.get( `${baseUrl}/search/movie`, {params: {api_key: api_key, query: req.query.name}})
  .then( response => {
    if (response.data.total_results) {
          var img = `https://image.tmdb.org/t/p/original${response.data.results[0].poster_path}`;
          const id = response.data.results[0].id;
          axios.get(`${baseUrl}/movie/${id}/watch/providers`, {params: {api_key: api_key}})
            .then ( response => {
              const available = response.data.results.MX;
              fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
                data = JSON.parse(data);
                data[req.query.id] = {
                  name: req.query.name,
                  year: req.query.year,
                  genre: req.query.genre,
                  img: img,
                  available: available
                };
                res.json(data);
                data = JSON.stringify(data);
                fs.writeFile(`${__dirname}/movies.json`, data, 'utf-8', err => {if(err) {console.log(err)}})
              });
            })
            .catch((error) => {
              console.log(error); 
            });
      } else {
        res.json({
          message: "Movie not found on TMDB"
        });
      }
    })
    .catch((error) => {
      console.log(error); 
  });
})

app.delete('/api/movies', (req, res) => {
  fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
  data = JSON.parse(data);
  delete data[req.query.id]
  res.json(data);
  data = JSON.stringify(data);
  fs.writeFile(`${__dirname}/movies.json`, data, 'utf-8', err => {if(err) {console.log(err)}})
  })
});

app.get('*', function(req, res){
  console.log(req.url);
  res.status(404).send('what???');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});