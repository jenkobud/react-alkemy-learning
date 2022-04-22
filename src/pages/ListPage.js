import * as React from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import List from '../components/List';
import { useNavigate } from 'react-router-dom';


const ListPage = () => {
  //Layout of listpage
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')) return;
    console.log("No hay token, redireccionar a SignIn");
    navigate("/login");
}, []);
  return (
    <div className='home-page'>
      <Header />
      <div className='general-container'>
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default ListPage;