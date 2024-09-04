import React, { useState } from "react";
import './NowPlayingMovies.css';

const NowPlayingMovies = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const slideMovies = [
        {
            url: 'https://i.pinimg.com/236x/11/31/d4/1131d4a083a738b79c966f20adc1469d.jpg',
            movie: 'NOVAH..',
            release : 'Release: February 15,2022',
            genre : 'Genre: Cartoon,comic' ,
            duration : 'Duration: 2hrs 30min',
            language : 'Language : English',
            trailer : 'https://youtu.be/fdu10cX3pWA?si=LrM1ZSZ6q35WSxvI'
        },
        {
            url: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2015%2F06%2Fhollywood-movie-posters-redesigned-1.jpg?cbr=1&q=90',
            movie: 'The DJango',
            release : 'Release: February 15,2022',
            genre : 'Genre: comic,magic' ,
            duration : 'Duration: 2hrs 30min',
            language : 'Language : English',
            trailer : 'https://youtu.be/0fUCuvNlOCg?si=fq9I_cUVgwOaV5Ct'
        },
        {
            url: 'https://rukminim2.flixcart.com/image/850/1000/poster/z/g/b/deadpool-comic-book-character-hollywood-movie-poster-original-imaecjz68dxa4ygf.jpeg?q=90&crop=false',
            movie: 'DeadPool ',
            release : 'Release: January 19,2023',
            genre : 'Genre: Cartoon,Sci-fi' ,
            duration : 'Duration: 2hrs 10min',
            language : 'Language : English',
            trailer : 'https://youtu.be/Xithigfg7dA?si=M1kfNbNaXeVZKnT8'
        },
        {
            url: 'https://m.media-amazon.com/images/I/81h388vryQS._AC_UF1000,1000_QL80_.jpg',
            movie: 'Death Wish',
            release : 'Release: Jule 25,2022',
            genre : 'Genre: Cartoon,comic' ,
            duration : 'Duration: 3hrs 30min',
            language : 'Language : English',
            trailer : 'https://youtu.be/jsPLw7I06eY?si=Mo3fCdujmY5NZM4Z'
        },
        {
            url: 'https://lh3.googleusercontent.com/proxy/IAVNQq_tstpz9PwSlO6GNI15MaaSEPewP5ELF9VspXkaNTqH2J-T6nLnriCTUSbeFunni6LXsFBR_oIgRf0z6WkZ5pDyZihquF7Js9NkpGG9qfbdDupmnggtGx8',
            movie: 'The Revenent',
            release : 'Release: March 15,2024',
            genre : 'Genre: Cartoon,comic' ,
            duration : 'Duration: 1hrs 30min',
            language : 'Language : English',
            trailer : 'https://youtu.be/LoebZZ8K5N0?si=YWZKKbRxihhUSvik'
        }
    ];

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    return (
        <>
            <h1 className="headline">Now Playing</h1>
            <div className="slide-movies">
                {slideMovies.map((slideMovie, index) => (
                    <div 
                        key={index} 
                        className="movie-item"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {hoverIndex === index ? (
                            <div className="hover">
                                <div className="details">
                                <h2>{slideMovie.movie}</h2>
                                <span>{slideMovie.release}</span>
                                <span>{slideMovie.genre}</span>
                                <span>{slideMovie.duration}</span>
                                <span>{slideMovie.language}</span>
                                <div className="tra-det-button">
                                <button className="trailer-button" onClick={() =>window.open(slideMovie.trailer, '_blank')}>Trailer</button>
                                <button className="details-button">Details</button>
                                </div>
                                </div>

                            </div>
                        ) : (
                            <img src={slideMovie.url}  />
                        )}

                    </div>
                ))}
                
            </div>
        </>
    );
};

export default NowPlayingMovies;
