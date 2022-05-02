import * as React from 'react';
import '../styles/SearchBar.css';
import '../styles/Layout.css';
const SearchBar = ({placeholder='Buscar...'}) => {
  const [keyword, setKeyword] = useState('');
  return(
    <div className='searchbar-container'>
      <input type='text' placeholder={placeholder} value={keyword}/>
    </div>
  );
}

export default SearchBar;