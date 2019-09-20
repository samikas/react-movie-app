import { config } from '../config';

export default function movieMapper (movies) {
    const container = [];
    movies.map( movie => {
      let tempContainer = {};
      tempContainer.title = movie.title;
      if(movie.poster_path === null){
        tempContainer.poster = config.NO_POSTER_URL;  
      } else {
        tempContainer.poster = config.IMG_BASE_URL + movie.poster_path;
      }
      tempContainer.year = movie.release_date.slice(0,4);
      tempContainer.rating = movie.vote_average;
      return container.push(tempContainer);
    })
    return container;
  }