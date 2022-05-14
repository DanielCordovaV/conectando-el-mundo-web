const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.port || 3001;

const newMovie = {"movie3": {
  "name": "Due Date",
  "year": 2010,
  "genre": "Comedy"
}};

app.get('/api', (req, res) => {
  res.json({message: 'Hello from the server side!'});
})

app.get('/api/movies', (req, res) => {
  fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
    res.send(data);
  })
});

app.post('/api/movies', (req, res) => {
  fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
  data = JSON.parse(data);
  data['movie3'] = newMovie['movie3'];
  res.json(data);
  data = JSON.stringify(data);
  fs.writeFile(`${__dirname}/movies.json`, data, 'utf-8', err => {if(err) {console.log(err)}})
  })
});

app.put('/api/movies', (req, res) => {
  fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
  data = JSON.parse(data);
  data[req.query.id] = {
    'name': req.query.name,
    'year': req.query.year,
    'genre': req.query.genre
  };
  res.json(data);
  data = JSON.stringify(data);
  fs.writeFile(`${__dirname}/movies.json`, data, 'utf-8', err => {if(err) {console.log(err)}})
  })
});

app.delete('/api/movies', (req, res) => {
  fs.readFile(`${__dirname}/movies.json`, 'utf-8', (err, data) => {
  data = JSON.parse(data);
  delete data[req.query.id]
  res.json(data);
  data = JSON.stringify(data);
  fs.writeFile(`${__dirname}/movies.json`, data, 'utf-8', err => {if(err) {console.log(err)}})
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});