import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css'; 

const slideImages =[
  {
    url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_26.jpg',
    caption: 'KUBO AND THE STRINGS',
    date: 'Release Date: March 11, 2017',
    description : 'slfgngujf',
    trailer: 'https://www.youtube.com/watch?v=p4-6qJzeb3A',
  },
  {
    url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_27.jpg',
    caption: 'THE HURRICAN HEIST',
    date: 'Release Date: August 10, 2018',
    trailer: 'https://www.youtube.com/watch?v=p4-6qJzeb3A',
  },
  {
    url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_25.jpg',
    caption: 'JUMANJI-WELCOME TO THE JUNGLE',
    date: 'Release Date: December 20, 2017',
    trailer: 'https://www.youtube.com/watch?v=p4-6qJzeb3A',
  },
  {
    url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_24.jpg',
    caption: 'DEATH WISH',
    date: 'Release Date: March 2, 2018',
    trailer: 'https://www.youtube.com/watch?v=p4-6qJzeb3A',
  },
  {
    url: 'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_23.jpg',
    caption: 'SUPERSONIC',
    date: 'Release Date: October 2, 2016',
    trailer: 'https://www.youtube.com/watch?v=p4-6qJzeb3A',
  },
];

const Home = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span className="date">{slideImage.date}</span>
              <span className="caption">{slideImage.caption}</span>
              <span className=''>{slideImage.description}</span>
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
    </div>
  );
};

export default Home;
