import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieDetails from "./MovieDetails";

export default function MovieList (props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/movies")
    .then(res => setMovies(res.data))
    .catch(err => console.log(err.response));
  }, [])

  const handleDelete = (e, id) => {
    e.preventDefault()
    const movie = movies.find(movie => movie.id === id)

    if (window.confirm('Are you sure you want to delete user?'))
    setMovies(movies.filter(movie => movie.id !== id))
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        console.log('User was deleted!')
      })
      .catch(err => {
        console.log(err, err.response)
        setMovies([ ...movies, movie ])
      })
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <>
        <MovieDetails key={movie.id} movie={movie} handleDelete={handleDelete} />
        </>
      ))}
    </div>
  );
}