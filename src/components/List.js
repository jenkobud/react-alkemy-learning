import * as React from 'react';
import { Box } from "@mui/system";
import FilmCard from './FilmCard';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import required modules
import { Pagination } from 'swiper';

// Styles
import '../styles/List.css';


const List = () => {
  return(
    <Box className='list-content-container'>
      <h2> Listado: </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={3}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <FilmCard title='KungFuPanda' imgUrl='https://image.tmdb.org/t/p/original/wzOERnvuM3c2mbAvCu5pw1QIaZX.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <FilmCard title='koe no katachi' imgUrl='https://i.pinimg.com/originals/25/d6/84/25d684169f76bbb609638c4940d1fe56.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <FilmCard title='Avengers Endgame' imgUrl='https://www.themoviedb.org/t/p/original/br6krBFpaYmCSglLBWRuhui7tPc.jpg' />
        </SwiperSlide>
      </Swiper>
        
    </Box>
  );
}

export default List;