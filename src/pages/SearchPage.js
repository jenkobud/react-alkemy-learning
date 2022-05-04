import * as React from 'react';
import { useState, useEffect } from 'react';

// Own Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from '../components/SearchBar';

// Services
import { searchMovies,getImageUrl } from '../servicies/movieDB.service';
// Styles
import '../styles/SearchPage.css';
import FilmCard from '../components/FilmCard';

const SearchPage = () => {
    const [searchWord, setSearchWord] = useState('');
    const [moviesResults, setmoviesResults] = useState([]);
    useEffect(() => {
        if(!searchWord.length) return; //En realidad debería mostrar Explorar..
        searchMovies(searchWord).then(res => {
            setmoviesResults(res.data.results);
        })
        .catch(err => { console.err('Error con themovieDB -> '+err); });
    }, [searchWord]);
    return(
        <div className="home-page">
            <Header />
            <SearchBar setSearchWord={setSearchWord} placeholder='Título, personaje o género'/>
            <div className='general-container' style={{alignItems: 'start'}}>
                <h4 style={{display: 'none'}}>Explorar</h4>
                <div className='search-results'>
                    {(!moviesResults.length && searchWord.length) ? 
                    (<h4>No se encontraron resultados para "{searchWord}"</h4>) : 
                    (moviesResults.map(movie => {
                        return(
                            // key, id, imgUrl, title
                            <FilmCard id={movie.id} key={movie.id} 
                            width='250px'
                            title={movie.original_title}
                            imgUrl={getImageUrl(movie.backdrop_path)}/>
                        );
                    }))}
                    {/* <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/>
                    <FilmCard width='20%' height='150px'/> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;