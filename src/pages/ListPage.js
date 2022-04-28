// Hooks & Components
import * as React from 'react';
import { Navigate } from 'react-router-dom';

// Created Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import List from '../components/List';
import BrandsList from '../components/BrandsList';
import CarrouselPopularMovies from '../components/CarrouselPopularMovies';


const ListPage = () => {
  //Layout of listpage
  const token = localStorage.getItem('token');
  return (
    <>
    {/* De esta manera ni se carga el resto de los componentes
        hasta que no se verifique la condición de la terna. */}

      {!token ? <Navigate to='/login' /> :
        (<div className='home-page'>
          <Header />
          <div className='general-container'>
            <CarrouselPopularMovies />
            <BrandsList />
            <List />
          </div>
          <Footer />
        </div>)
      }
    </>
  );
}

export default ListPage;