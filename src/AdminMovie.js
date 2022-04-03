import React from 'react';

export function AdminMovie({ name, rating, summary, poster,movieList,setMovieList }) {
  return (
      
    <div className='movie-container'>
        
      <img src={poster} alt={name} className='movie-poster'></img>
      <div className='movie-specs'>
        <h3 className='movie-name'>{name}</h3>
        <p className='movie-rating'>{rating}</p>
      </div>
      <p className='movie-summary'>{summary}</p>
      
    </div>
    
  );
}
