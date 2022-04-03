import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export function AddMovies({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [image, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
 
  const history = useHistory();
  return (
    <div className='add-movie'>
      {/*<h3> Enter Movie Details</h3>*/}
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name" />
      <input
        value={image}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Poster" />
      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Rating" />
      <input
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Summary" />

      <Button onClick={() => {
        const newMovie = {
          name: name,
          image: image,
          rating: rating,
          summary: summary
        };
        console.log(newMovie);
        setMovieList([...movieList, newMovie]);
        history.push('/adminmovies');
      }}
        variant="outlined"
      >
        Add Movie
      </Button>

    </div>

  );
}
