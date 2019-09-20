import React from 'react';
import '../App.scss';
import axios from 'axios';
import  movieMapper from "../functions/movieMapper";
import  Movie from "../functions/Movie";

class GetMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    };
  }
  
  componentDidMount() {
    let url;
    let baseUrl = "https://api.themoviedb.org/3/movie/"
    let apiKey = "?api_key=################";
      if(this.props.type === "popular") {
          url = baseUrl + 'popular' + apiKey;
      } else if (this.props.type === "topRated") {
        url =  baseUrl + 'top_rated' + apiKey;
      } else if (this.props.type === "upcoming") {
        url = baseUrl + 'upcoming' + apiKey;
      }  else if (this.props.type === "nowPlaying") {
        url = baseUrl + 'now_playing' + apiKey;
      }
      axios.get(url).then(response => response.data)
      .then((data) => {
          this.setState({ movieData : movieMapper(data.results)});          
      })
  }
  
  render(){
    return (
        <div>
          {Movie(this.state.movieData)}
        </div>
      );
    }
}
export default GetMovies;
