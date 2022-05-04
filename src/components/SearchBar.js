import * as React from 'react';
import { useState, useEffect } from 'react';
// Styles
import '../styles/SearchBar.css';
import '../styles/Layout.css';

const SearchBar = ({placeholder='Buscar...', setSearchWord}) => {
  //const [keyword, setKeyword] = useState('');
  const handleOnChange = e => { 
    //setKeyword(e.target.value);
    setSearchWord(e.target.value); 
  }
  
  return(
    <>
      <div className='searchbar-container'>
        <input type='text' placeholder={placeholder} onChange={handleOnChange} />
      </div>
      <div className='searchbar-spacer'></div>
    </>
  );
}

export default SearchBar;