import * as React from 'react';
import { useState, useEffect } from 'react';
// Styles
import '../styles/SearchBar.css';
import '../styles/Layout.css';

const SearchBar = ({placeholder='Buscar...'}) => {
  const [keyword, setKeyword] = useState('');
  const handleOnChange = e => { setKeyword(e.target.value); }
  useEffect(() => {
    //Buscar las peliculas/series que concuerden con keyword...
  }, [keyword]);
  return(
    <div className='searchbar-container'>
      <input type='text' placeholder={placeholder} onChange={handleOnChange}/>
    </div>
  );
}

export default SearchBar;