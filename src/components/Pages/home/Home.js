import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HomeIcons from './HomeIcons';
import NowPlayingMovies from './NowPlayingMovies';
import TopMoviesInThetre from './TopMoviesInThetre';
import './Home.css';


const Home = () => {
  const [slide, setSlide] = useState(0);

  const slideImages = [
    {
      url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_26.jpg',
      caption: 'KUBO AND THE STRINGS',
      date: 'Release Date: March 11, 2017',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...',
      trailer: 'https://youtu.be/ykD2W8U6wH4?si=mJqs5W109KdVT4db',
    },
    {
      url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_27.jpg',
      caption: 'THE HURRICAN HEIST',
      date: 'Release Date: August 10, 2018',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...',
      trailer: 'https://youtu.be/56whWF2NJrM?si=qU59oKo-IVn7vxGj',
    },
    {
      url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_25.jpg',
      caption: 'JUMANJI-WELCOME TO THE JUNGLE',
      date: 'Release Date: December 20, 2017',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...',
      trailer: 'https://youtu.be/2QKg5SZ_35I?si=P0V8sfmnKexKRW6n',
    },
    {
      url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_24.jpg',
      caption: 'DEATH WISH',
      date: 'Release Date: March 2, 2018',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...',
      trailer: 'https://youtu.be/jsPLw7I06eY?si=Mo3fCdujmY5NZM4Z',
    },
    {
      url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_23.jpg',
      caption: 'SUPERSONIC',
      date: 'Release Date: October 2, 2016',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...',
      trailer: 'https://youtu.be/szby7ZHLnkA?si=wRV8r-4Q1Sy3HoxK',
    },
  ];

  return (
    <>
    <div className="slide-container">
      <Slide
        autoplay={false}
        onChange={(oldIndex, newIndex) => setSlide(newIndex)}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className="each-slide">
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span className="date">{slideImage.date}</span>
              <span className="caption">{slideImage.caption}</span>
              <span className="description">{slideImage.description}</span>
              <button
                className="watch-trailer-button"
                onClick={() => window.open(slideImage.trailer, '_blank')}
              >
                Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </Slide>
      <div className="pagination">
        {slideImages.map((_, index) => (
          <span
            key={index}
            className={`page-number ${slide === index ? 'active' : ''}`}
            onClick={() => setSlide(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
    <NowPlayingMovies />
    <HomeIcons />
    <TopMoviesInThetre />
    </>
  );
};
export default Home;
