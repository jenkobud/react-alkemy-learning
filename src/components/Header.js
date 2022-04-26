import '../styles/Header.css';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className='header-disney'>
      <nav>
        <div className='container-logo'>
          <img src='https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png' title='disney-logo' alt=''/>
        </div>
        <ul>
          <li><Link to="/list">Inicio</Link></li>                
          <li><Link to="/films">Peliculas</Link></li>        
          <li><Link to="/series">Series</Link></li>        
          <li><Link to="/search">Bsuqueda</Link></li>        
          <li><Link to="/favorites">Fav</Link></li>        
          <li><Link to="/originals">Originales</Link></li>                   
        </ul>
      </nav>
    </header>
  );
}

export default Header;