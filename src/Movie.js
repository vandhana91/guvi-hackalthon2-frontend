import React from 'react';

export function Movie({ name, rating, summary, poster,bookbutton }) {
  return (
    <div className='movie-container'>
      <img src={poster} alt={name} className='movie-poster'></img>
      <div className='movie-specs'>
        <h3 className='movie-name'>{name}</h3>
        <p className='movie-rating'>{rating}</p>
      </div>
      <p className='movie-summary'>{summary}</p>
      {bookbutton}
    </div>
  );
}
