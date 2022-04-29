// Hooks & Components
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// Created Components
import Footer from '../components/Footer';
import Header from '../components/Header';

// Styles
import '../styles/MoviePage.css';
import '../styles/Layout.css';

// Services
import { getMovieById, getImageUrl } from '../servicies/movieDB.service';

const MoviePage = () => {
  const [movieInfo,setMovieInfo] = useState({});
  const { id = 0 } = useParams(); 
  useEffect(() => {
    //Después cambiarlo con fowardRef..
    getMovieById(id).then((res) => { 
      setMovieInfo(res.data); 
    })
    .catch(err => { console.log('Error de themovieDB -> '+ err); });
  },[]);

  return (
  <div className='movie-page'>
    <Header />
    <div className='general-container'>
      <article className='border'>
        <div className='movie-info-container'>
          <div className='poster-container'>
            <img alt={movieInfo.original_title} src={getImageUrl(movieInfo.poster_path)}/>
          </div>
          <div className='info-details border'>
            {movieInfo.original_title}
          </div>
          
        </div>
      </article>
    </div>
    <Footer />
  </div >
  );
};

export default MoviePage;