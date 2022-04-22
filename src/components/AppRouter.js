import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import List from './List';

const AppRouter = () => {

  return(
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<SignIn />}/>
      <Route path="/list" element={<List />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;