import * as React from 'react';

// Own Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
    return(
        <div className="home-page">
            <Header />
            <SearchBar placeholder='Título, personaje o género'/>
            <div className='general-container'>
            search content
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;