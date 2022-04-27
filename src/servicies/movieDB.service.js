//imports
import axios from 'axios';

//v3 auth
const api_key = '8ef541610f99505feb088bcf1869bb9c'; 
// v4 auth
const api_key_v4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWY1NDE2MTBmOTk1MDVmZWIwODhiY2YxODY5YmI5YyIsInN1YiI6IjYyNjk0YmNjNjRmNzE2MTYwZjhmNzI0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qCFYrhWH-T1NBlnrhllVhg-eY5tC8TA0HsZ7OqJcQGk';
const url = 'https://api.themoviedb.org';


// Discover movies
// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
const discoverMovies = () => {
  const reqDetails = 
  `/3/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  
  return (axios.get(url + reqDetails, {}));
}

export default discoverMovies;