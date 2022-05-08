//imports
import { height } from '@mui/system';
import axios from 'axios';

//v3 auth
const api_key = '8ef541610f99505feb088bcf1869bb9c'; 
// v4 auth
const api_key_v4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWY1NDE2MTBmOTk1MDVmZWIwODhiY2YxODY5YmI5YyIsInN1YiI6IjYyNjk0YmNjNjRmNzE2MTYwZjhmNzI0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qCFYrhWH-T1NBlnrhllVhg-eY5tC8TA0HsZ7OqJcQGk';
const url = 'https://api.themoviedb.org/3';


// Discover movies
// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
const discoverMovies = () => {
  let reqDetails = 
  `/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  
  return (axios.get(url + reqDetails, {}));
}

//por ahora hace casi lo mismo que discoverMovies..
const popularMovies = () => {
  let reqDetails = 
  `/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  return (axios.get(url + reqDetails, {}));
};

const getMovieById = (movieId) => {
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=es-ES&append_to_response=credits
  let reqDetails = `/movie/${movieId}?api_key=${api_key}&language=es-ES&append_to_response=credits`;
    return (axios.get(url + reqDetails, {}));
};

const searchMovies = keyword => {
  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=es-ES&page=1&include_adult=false&query="terminator"
  let reqDetails = `/search/movie?api_key=${api_key}&query=${keyword}&language=es-ES&page=1&include_adult=false`;
  return (axios.get(url + reqDetails, {}));
};

const getImageUrl = (path) => { 
  return(`https://image.tmdb.org/t/p/original${path}`); };

const getFHDImageUrl = (path) => {
  return(`https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces${path}`);
};

const getResizedImageUrl = (path, width, height) => {
  return(`https://image.tmdb.org/t/p/w${width}_and_h${height}_multi_faces${path}`);
};



export {discoverMovies, popularMovies, getMovieById, getImageUrl, getFHDImageUrl, getResizedImageUrl, searchMovies};