// Hooks & Components
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Created Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import MoviesSwiper from '../components/MoviesSwiper';
import BrandsList from '../components/BrandsList';

//Services
import { discoverMovies, popularMovies } from '../servicies/movieDB.service';


const HomePage = () => {
  //Layout of listpage
  const token = localStorage.getItem('token');
  //States
  const [discoverMoviesArray, setDiscoverMoviesArray] = useState([]);
  const [popMovies, setPopMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  //Effects
  useEffect(() => {
    discoverMovies().then(res => { setDiscoverMoviesArray(res.data.results); })
      .catch(err => { console.log('Error con themovieDB -> ' + err); });
    popularMovies().then(res => { setPopMovies(res.data.results); })
      .catch(err => { console.log('Error con themovieDB -> ' + err); })
      .finally(setTimeout(()=>{ setLoader(false); },800));
    
  }, []);
  return (
    <>
    {/* De esta manera ni se carga el resto de los componentes
        hasta que no se verifique la condición de la terna. */}

      {!token ? <Navigate to='/login' /> :
        <div className='home-page'>
          <Header />
          {loader ? (
          <Box className='general-container loader-container'>
            <CircularProgress />
          </Box>
          ) :
          (<div className='general-container'>
            <MoviesSwiper movies={popMovies} slidesPerView={1} imgHeigth='60vh' />
            <BrandsList />
            <MoviesSwiper movies={discoverMoviesArray} slidesPerView={5} />
          </div>)}
          <Footer />
        </div>
      }
    </>
  );
}

export default HomePage;