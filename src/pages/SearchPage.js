import * as React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const SearchPage = () => {
    return(
        <div className="home-page">
            <Header />
            <SearchPage placeholder='Título, personaje o género..'/>
            <div className='general-container'>
                search
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage;