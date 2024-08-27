import React from "react";
import './TopMoviesInTheatre.css';

const TopMoviesInTheatre = () => {
    const slideTopMovies = [
        {
            url: 'https://movie.webindia123.com/movie/2018/hollywood/april/venom/venom.jpg',
            movie: 'Venom',
            release : 'Release: February 15,2022',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'https://w0.peakpx.com/wallpaper/902/32/HD-wallpaper-heimdall-thor-comics-holi-hollywood-idris-elba-marvel-marvel-cinematic-universe-marvel-comics-marvel-movies-movie-movie-poster-orange-poster-thor-ragnarok.jpg',
            movie: 'Thor:The Ragnarok..',
            release : 'Release: February 15,2022',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'https://rukminim2.flixcart.com/image/850/1000/jn3hocw0/poster/j/s/q/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9uv7zzgp6wvg.jpeg?q=90&crop=false',
            movie: 'Pirates of The Caribbean',
            release : 'Release: February 15,2022',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'https://w0.peakpx.com/wallpaper/196/795/HD-wallpaper-justice-league-sc-action-dc-hbo-hollywood-justice-league-movie-poster-warner-warner-bros.jpg',
            movie: 'Justice League',
            release : 'Release: February 15,2022',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'https://rukminim2.flixcart.com/image/850/1000/jn3hocw0/poster/b/9/u/medium-hollywood-movie-wall-poster-transformers-the-last-knight-original-imaf9uubmphbvyh3.jpeg?q=90&crop=false',
            movie: 'Transformers',
            release : 'Release: February 15,2022',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'https://w0.peakpx.com/wallpaper/324/121/HD-wallpaper-new-2023-movie-john-wick-4-poster-movie-thumbnail.jpg',
            movie: 'John Wick ',
            release : 'Release: January 19,2023',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/original/products/58082/58811/91PT9YqnRrL._SL1500___19789.1602906710.jpg',
            movie: 'Avengers: End Game',
            release : 'Release: July 25,2022',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A'
        },
        {
            url: 'https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_de5e4cfc-cfd4-4732-aad1-271d6bdb1587.jpg?v=1579504979',
            movie: 'Joker',
            release : 'Release: March 15,2024',
            trailer : 'https://www.youtube.com/watch?v=p4-6qJzeb3A',
        },
    ];

    return (
        <>
        <div className="movies-section">
            <h1 className="section-title">Top Movies in Theatres</h1>
            <div className="slider-container">
                <div className="movies-slider">
                    {slideTopMovies.map((slideTopMovie, index) => (
                        <div key={index} className="movie-card">
                            <div className="movie-image-wrapper">
                                <img src={slideTopMovie.url} alt={slideTopMovie.movie} className="movie-image" />
                            </div>
                            <h2 className="movie-title">{slideTopMovie.movie}</h2>
                            <span className="movie-release">{slideTopMovie.release}</span>
                            <div className="buttons-container">
                                <button 
                                    className="trailer-button" 
                                    onClick={() => window.open(slideTopMovie.trailer, '_blank')}
                                >
                                    Trailer
                                </button>
                                <button className="details-button">Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default TopMoviesInTheatre;
