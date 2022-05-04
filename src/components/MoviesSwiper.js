import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from "@mui/system";
import FilmCard from './FilmCard';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import required modules
import { Pagination } from 'swiper';

// Styles
import '../styles/MoviesSwiper.css';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const MoviesSwiper = ({movies, slidesPerView = 1, imgHeigth="100%"}) => {

  return (
    <Box className='list-content-container'>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slidesPerView"
      >
        { movies.map ( (films) => {
          // Key es necesario por parte de .map()
          return (
            <SwiperSlide key={films.id}>
              <FilmCard title={films.original_title} imgUrl={`https://image.tmdb.org/t/p/original${films.backdrop_path}`} id={films.id} height={imgHeigth} />
            </SwiperSlide>
          );
        }) }
      </Swiper>
      

    </Box>
  );
}

export default MoviesSwiper;