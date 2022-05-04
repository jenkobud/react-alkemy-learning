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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// Created Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import TabsPanel from '../components/TabsPanel';

// Styles
import '../styles/MoviePage.css';
import '../styles/Layout.css';

// Services
import { getMovieById, getImageUrl, getFHDImageUrl } from '../servicies/movieDB.service';

const MoviePage = () => {

  const token = localStorage.getItem('token');
  const [movieInfo,setMovieInfo] = useState({});
  const[loader, setLoader] = useState(true);
  const { id = 0 } = useParams();
  useEffect(() => {
    //Después cambiarlo con fowardRef..
    getMovieById(id)
      .then((res) => { setMovieInfo(res.data); })
      .catch(err => { console.log('Error de themovieDB -> '+ err); })
      .finally( setTimeout( ()=>{setLoader(false)} ,800) );
  },[]);

  return (
    <>
      {!token && <Navigate to='/' />}
      <div className='movie-page'>
        <Header />
        {loader ? (
          <Box className='general-container loader-container'>
            <CircularProgress />
          </Box>
          ) :
          <>
            <div className='general-container background-img' style={{ backgroundImage: `url(${getFHDImageUrl(movieInfo.backdrop_path)})` }}></div>
            <div className='general-container movie-container'>
              <article>
                <div className='movie-info-container'>
                  <div className='poster-container'>
                    <img alt={movieInfo.original_title} src={getImageUrl(movieInfo.poster_path)} />
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
                      <Button className='button-watch' size="small" startIcon={<PlayArrowIcon />}>
                        <b>VER AHORA </b>
                      </Button>
                      <Button variant="outlined" size="large"> TRAILER </Button>
                      <IconButton className='circular-button'> <AddIcon /></IconButton>
                      <IconButton className='circular-button'> <GroupsIcon /> </IconButton>
                    </div>
                    <p>{movieInfo.overview}</p>
                  </div>
                  <div className='tabs'>
                    <TabsPanel />
                  </div>

                </div>
              </article>
            </div>
          </>
        }
        <Footer />
      </div >
    </>
  );
};

export default MoviePage;