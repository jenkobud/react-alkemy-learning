// Hooks & Components
import * as React from 'react';
import { useState } from 'react';
import {  Navigate } from 'react-router-dom'; //react-router-dom (new v.) Redirect -> Navigate

// Created Components
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  //Layout of SignInPage
  const token = localStorage.getItem('token');
  return (
    <>
      {/*De esta manera ni se carga el resto de los componentes
        hasta que no se verifique la condición de la terna.  */}

      {token ? <Navigate to='/list' /> :
        ( <div className='signin-page'>
            <div className='signin-content-container'> <SignIn /> </div>
            <Footer />
          </div> )
        }
    </>
  );
}

export default SignInPage;