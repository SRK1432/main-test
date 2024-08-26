import React, { useState } from "react";
import './NowPlayingMovies.css';

const NowPlayingMovies = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const slideMovies = [
        {
            url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_20-204x350_c.jpg',
            movie: 'Kubo and Strings..',
            release : 'Release: February 15,2022',
            genre : 'Genre: Cartoon,comic' ,
            duration : 'Duration: 2hrs 30min',
            language : 'Language : English',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_19-204x350_c.jpg',
            movie: 'The Hurricane Heist',
            release : 'Release: February 15,2022',
            genre : 'Genre: comic,magic' ,
            duration : 'Duration: 2hrs 30min',
            language : 'Language : English',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_17-204x350_c.jpg',
            movie: 'Jumanji: Welcome.. ',
            release : 'Release: January 19,2023',
            genre : 'Genre: Cartoon,Sci-fi' ,
            duration : 'Duration: 2hrs 10min',
            language : 'Language : English',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_18-204x350_c.jpg',
            movie: 'Death Wish',
            release : 'Release: Jule 25,2022',
            genre : 'Genre: Cartoon,comic' ,
            duration : 'Duration: 3hrs 30min',
            language : 'Language : English',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_15-204x350_c.jpg',
            movie: 'Supersonic',
            release : 'Release: March 15,2024',
            genre : 'Genre: Cartoon,comic' ,
            duration : 'Duration: 1hrs 30min',
            language : 'Language : English',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
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
