import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = () => {
    const [movieName, setMovieName] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [language, setLanguage] = useState('');
    const [imdbRating, setImdbRating] = useState('');
    const [showtime, setShowtime] = useState('');
    const [trailerLink, setTrailerLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add movie (e.g., API call)
        console.log("Movie Added:", movieName, description, director, genre, releaseDate, language, imdbRating, showtime, trailerLink);
        // Clear form fields
        setMovieName('');
        setDescription('');
        setDirector('');
        setGenre('');
        setReleaseDate('');
        setLanguage('');
        setImdbRating('');
        setShowtime('');
        setTrailerLink('');
    };

    return (
        <div className="add-movie">
            <h2 className="add-movie__title">Add Movie</h2>
            <form className="add-movie__form" onSubmit={handleSubmit}>
                <input 
                    className="add-movie__input" 
                    type="text" 
                    placeholder="Movie Name" 
                    value={movieName} 
                    onChange={(e) => setMovieName(e.target.value)} 
                />
                <textarea 
                    className="add-movie__textarea" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    className="add-movie__input" 
                    type="text" 
                    placeholder="Director" 
                    value={director} 
                    onChange={(e) => setDirector(e.target.value)} 
                />
                <input 
                    className="add-movie__input" 
                    type="text" 
                    placeholder="Genre" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                />
                <input 
                    className="add-movie__input add-movie__input--date" 
                    type="date" 
                    placeholder="Release Date" 
                    value={releaseDate} 
                    onChange={(e) => setReleaseDate(e.target.value)} 
                />
                <input 
                    className="add-movie__input" 
                    type="text" 
                    placeholder="Language" 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)} 
                />
                <input 
                    className="add-movie__input" 
                    type="text" 
                    placeholder="IMDB Rating" 
                    value={imdbRating} 
                    onChange={(e) => setImdbRating(e.target.value)} 
                />
                <input 
                    className="add-movie__input" 
                    type="text" 
                    placeholder="Showtime" 
                    value={showtime} 
                    onChange={(e) => setShowtime(e.target.value)} 
                />
                <input 
                    className="add-movie__input" 
                    type="text" 
                    placeholder="Trailer Link" 
                    value={trailerLink} 
                    onChange={(e) => setTrailerLink(e.target.value)} 
                />
                <button className="add-movie__button" type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovie;
