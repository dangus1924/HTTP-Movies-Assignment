import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateMovies(props) {
    const [movies, setMovies] = useState({
        id: '',
        title: '',
        director: '',
        metascore: 0,
        stars: []
    })

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            
    }, [props.match.params.id])

    const handleChange = (e) => {
        setMovies({
            ...movies,
            [e.target.name]: e.target.value,
        })
    }

    const handlechangestars = (e) => {
        setMovies({
            ...movies,
            stars: [e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${movies.id}`, movies)
        .then(res => {
            props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <h1>Update Movies</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='title' 
                placeholder='Title' 
                value={movies.title} 
                onChange={handleChange} />
            <input 
                type='text' 
                name='director' 
                placeholder='Director' 
                value={movies.director} 
                onChange={handleChange} />
            <input 
                type='number' 
                name='metascore' 
                placeholder='MetaScore' 
                value={movies.metascore} 
                onChange={handleChange} />
            <input 
                type='text' 
                name='stars' 
                placeholder='Actors' 
                value={movies.stars} 
                onChange={handlechangestars} />

            <button type='submit'>Update</button> 
        </form>

        </>
    )
}

export default UpdateMovies;