import React from 'react';

export default function MovieCard({ id, info: { name, year, genre, img, available } }) {
    return (
        <div className="request-form">
          <h2>{name}</h2>
          <img src={img} alt="movie" />
          <h3>ID:{id}</h3>
          <h3>{year}</h3>
          <h3>{genre}</h3>
        </div>
      );
}