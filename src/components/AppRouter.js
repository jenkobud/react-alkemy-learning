import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import ListPage from '../pages/ListPage';
import SearchPage from '../pages/SearchPage';

const AppRouter = () => {

  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignInPage />}/>
      <Route path="/login" element={<SignInPage />}/>
      <Route path="/list" element={<ListPage />}/>
      <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;