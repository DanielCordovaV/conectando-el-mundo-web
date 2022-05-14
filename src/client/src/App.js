import './App.css';
import React from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import RequestsDemo from './components/RequestsDemo';

function App() {
  const baseUrl = "https://api.danielcordova.info";
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    axios.get(`${baseUrl}/api/movies`)
      .then((data) => {
        data = data.data;
        setData(data);
      });
  }, []);
  const MovieList = Object.keys(data).map((key) => <MovieCard key={key} id={key} info={data[key]} />);
  return (
    <div className="App">
      <div className="cards">{MovieList}</div>
      <RequestsDemo/>
    </div>
  );
}

export default App;
