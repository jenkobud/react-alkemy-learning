// Hooks & Components
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';

// Created Components
import Footer from '../components/Footer';
import Header from '../components/Header';

// Styles
import '../styles/MoviePage.css';
import '../styles/Layout.css';

// Services
import { getMovieById, getImageUrl, getFHDImageUrl } from '../servicies/movieDB.service';

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
    <div className='general-container movie-container' style={{backgroundImage: `url(${getFHDImageUrl(movieInfo.backdrop_path)})`}}>
      <article className='border'>
        <div className='movie-info-container'>
          <div className='poster-container'>
            <img alt={movieInfo.original_title} src={getImageUrl(movieInfo.poster_path)}/>
          </div>
          <div className='info-details border'>
            <h4>{movieInfo.original_title}</h4>
            <a href={movieInfo.homepage} target="_blank">{movieInfo.homepage}</a>
              <div className='tags-container'>
                <Button variant="outlined" disabled>
                  <b>{movieInfo.original_language}</b>
                </Button>
                <Button variant="outlined" disabled>
                  <b>CC</b>
                </Button>
                <Button variant="outlined" disabled endIcon={<StarHalfIcon />}>
                <b>{movieInfo.vote_average} </b>
                </Button>
                <span>2021</span>
                <span>148min</span>
              </div>
              {/* <span>{genres.map((genre) => {
                return(genre.name + ',');
              })}</span> */}

              <div className='tags-container'>
              <Button variant="outlined" size="small" startIcon={<PlayArrowIcon />}>
                <b>VER AHORA </b>
                </Button>
                <Button variant="outlined" size="large"> TRAILER </Button>
                <IconButton> <AddIcon /></IconButton>
                <IconButton> <GroupsIcon/> </IconButton>
              </div>
              <p>{movieInfo.overview}</p>
          </div>
          
        </div>
      </article>
    </div>
    <Footer />
  </div >
  );
};

export default MoviePage;