import * as React from 'react';
import FilmCard from './FilmCard';

//Styles
import '../styles/BrandsList.css'

const BrandsList = () => {
  return (
    <>
      <h2>BRANDSLIST</h2>
      <div className='brands-list-container'>
        <FilmCard width='200px' height='80px' mediaWidth='50%' mediaHeigth='100%' imgUrl='https://w7.pngwing.com/pngs/319/931/png-transparent-logo-the-walt-disney-company-brand-symbol-logo-disney-text-logo-monochrome.png' />
        <FilmCard width='200px' height='80px' mediaWidth='50%' mediaHeigth='100%' imgUrl='https://flyclipart.com/thumb2/disney-pixar-logos-155865.png'/>
        <FilmCard width='200px' height='80px' mediaWidth='50%' mediaHeigth='100%' imgUrl='https://e7.pngegg.com/pngimages/419/220/png-clipart-logo-marvel-comics-marvel-entertainment-marvel-studios-others-comics-avengers.png'/>
        <FilmCard width='200px' height='80px' mediaWidth='50%' mediaHeigth='100%' imgUrl='https://toppng.com/uploads/preview/star-wars-logo-png-transparent-logo-de-star-wars-115632812418hmv74rhox.png'/>
        <FilmCard width='200px' height='80px' mediaWidth='50%' mediaHeigth='100%' imgUrl='https://www.vhv.rs/dpng/d/169-1696761_national-geographic-channel-logo-png-transparent-png.png'/>
      </div>
    </>
  );
}

export default BrandsList;