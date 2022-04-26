import * as React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SignIn from '../components/SignIn';
import { Redirect } from 'react-router-dom';

const SignInPage = () => {
  //Layout of SignInPage
  const token = localStorage.getItem('token');
  return (
    <>
      { (token && <Redirect to='/list' />) }
      <div className='signin-page'>
        <div className='signin-content-container'>
          <SignIn />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignInPage;