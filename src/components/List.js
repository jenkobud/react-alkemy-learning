import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from "@mui/system";
import FilmCard from './FilmCard';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import required modules
import { Pagination } from 'swiper';

// import services
import discoverMovies from '../servicies/movieDB.service';

// Styles
import '../styles/List.css';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const List = () => {
  //States
  const [discoverMoviesArray, setDiscoverMoviesArray] = useState([]);
  //Effects
  useEffect(() => {
    discoverMovies().then(res => { setDiscoverMoviesArray(res.data.results); })
    .catch(err => { console.log('Error con themovieDB -> ' + err); });
  }, []);

  return (
    <Box className='list-content-container'>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slidesPerView"
      >
        { discoverMoviesArray.map ( (movies) => {
          // Key es necesario por parte de .map()
          return (
            <SwiperSlide key={movies.id}>
              <FilmCard title={movies.original_title} imgUrl={`https://image.tmdb.org/t/p/original${movies.poster_path}`} id={movies.id} />
            </SwiperSlide>
          );
        }) }
      </Swiper>
      

    </Box>
  );
}

export default List;