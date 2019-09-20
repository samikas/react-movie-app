import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Movie(movieData) {
    return (
        <div className="movie-list">
        {movieData.map((movie, index) => 
            <div className="movie" key={index}>
                <img className="poster-img" src={movie.poster} alt={movie.title}/>
                <div className="poster-info ">
                    <p>{movie.title}</p>
                    <p><FontAwesomeIcon icon={faStar} /> {movie.rating}</p>
                    <p>{movie.year}</p>
                </div>
            </div>)}
        </div>);
}