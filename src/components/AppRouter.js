import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import MoviePage from '../pages/MoviePage';

const AppRouter = () => {

  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignInPage />}/>
      <Route path="/login" element={<SignInPage />}/>
      <Route path="/list" element={<HomePage />}/>
      <Route path='/search' element={<SearchPage />}/>
      <Route path='/movie/:id' element={<MoviePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;