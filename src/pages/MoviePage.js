// Hooks & Components
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
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

const intToHoursAndMinutes = (minutes) => {
  //returns a String.
  let h = Math.round(minutes / 60);
  let m = Math.abs(minutes - (h * 60));
  return (`${h} h ${m} min`);
}

const MoviePage = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [movieInfo,setMovieInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieDirector, setMovieDirector] = useState({name:''});
  const { id = 0 } = useParams();
  let mainActors = [];
  
  useEffect(() => {
    //Después cambiarlo con fowardRef..
    getMovieById(id)
      .then((res) => { 
        setMovieInfo(res.data); 
        setMovieGenres(res.data.genres);
        setMovieCast(res.data.credits.cast);
        setMovieDirector(res.data.credits.crew.find(p=>{return(p.job == "Director");}));
      })
      .catch(err => { 
        console.err('Error de themovieDB -> ' + err);
        navigate(-1); })
      .finally(setTimeout(() => { setLoader(false) }, 800));
  }, []);

  const detailsContent =
    <div className='detail-tab-content'>
      <div className='fifty-percent flex-col-start'>
        <h4>{movieInfo.original_title}</h4>
        <p>{movieInfo.overview}</p>
      </div>
      <div className='flex-col-start'>
        <h5>Duración</h5>
        {intToHoursAndMinutes(movieInfo.runtime)}
        <h5>Fecha de estreno</h5>
        {movieInfo.release_date}
        <h5>Genero</h5>
        {movieGenres.map(genre=>{ return (<span key={genre.id}>{genre.name} </span>) }) }
        <h5>Clasificación</h5>
        <span className='badge'>{movieInfo.adult ? '+18' : 'ATP'}</span>
      </div>
      <div className='flex-col-start'>
        <h5>Dirigido por</h5>
        <span>{movieDirector.name}</span>
        <h5>Elenco</h5>
        {movieCast
          .filter((actor, index) => { return (index < 7 && actor.known_for_department == "Acting");})
          .map(act=>{ return(<span key={act.id}>{act.name}</span>); }) 
        }
      </div>
    </div>;

  const tabsContent = [{ name: 'SUGERENCIAS', content: 'SUGERENCIAS CONTENT' },
    { name: 'EXTRAS', content: 'EXTRAS CONTENT' },
    { name: 'VERSIONES', content: 'VERSIONES CONTENT' },
    { name: 'DETALLES', content: detailsContent }];


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
                  <div className='info-details'>
                    <h4>{movieInfo.original_title}</h4>
                    <span>Más información en </span>
                    <a href={movieInfo.homepage} target="_blank">{movieInfo.homepage}</a>
                    <div className='tags-container badges'>
                      <span className='badge'>
                        <b>{movieInfo.original_language}</b>
                      </span>
                      <span className='badge'>
                        <b>CC</b>
                      </span>
                      <span className='badge'>
                        <b>{movieInfo.vote_average}</b>
                        <StarHalfIcon sx={{margin: '0px', width: '1rem', height:'1rem'}}/>
                      </span>
                      <span>{movieInfo.release_date}</span>
                      <span> • </span>
                      <span>{intToHoursAndMinutes(movieInfo.runtime)}</span>
                    </div>
                    <span>{movieGenres.map((genre) => {
                    return(genre.name + ',');
                  })}</span>

                    <div className='tags-container'>
                      <Button className='button-watch button' startIcon={<PlayArrowIcon />}>
                        <b>VER AHORA </b>
                      </Button>
                      <Button className='button-trailer button'variant="outlined" size="large"> TRAILER </Button>
                      <IconButton className='circular-button'> <AddIcon /></IconButton>
                      <IconButton className='circular-button'> <GroupsIcon /> </IconButton>
                    </div>
                    <p>{movieInfo.overview}</p>
                  </div>
                  <div className='tabs'>
                    <TabsPanel tabs={tabsContent}/>
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