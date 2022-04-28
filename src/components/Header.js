import '../styles/Header.css';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { height } from '@mui/system';

const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className='header-disney'>
        <nav>
          <div className='container-logo'>
            <img src='https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png' title='disney-logo' alt='' />
          </div>
          <ul>
            <li><Link to="/list"><HomeIcon fontSize={'large'} />Inicio</Link></li>
            <li><Link to="/films"><LocalMoviesIcon fontSize={'large'} />Peliculas</Link></li>
            <li><Link to="/series"><LiveTvIcon fontSize={'large'} />Series</Link></li>
            <li><Link to="/search"><SearchIcon fontSize={'large'} />Busqueda</Link></li>
            <li><Link to="/favorites"><StarIcon fontSize={'large'} />Fav</Link></li>
            <li><Link to="/originals"><AddIcon fontSize={'large'} />Originales</Link></li>
          </ul>
        </nav>
        <div className='userAvatar'>

          <button
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <div className='user-avatar-icon'>
              <span>user</span>
              <img src="https://raw.githubusercontent.com/cortiz2894/bootcamp-React-BBVA/8a4c3a7af1ca26a5078e20326194e7abe2e9cdbe/public/avatar.png" alt="avatar.png" />
            </div>
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </header>
      <div className='header-spacer' ></div>
    </>
  );
}

export default Header;