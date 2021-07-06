import React from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard';

export default function MovieDetails({ movie, handleDelete }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} handleDelete={handleDelete} />
      <button className='delete-button' onClick={(e) => handleDelete(e, movie.id)}>Delete</button>
    </Link>
  );
}