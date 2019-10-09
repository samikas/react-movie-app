import React from 'react';
import './App.scss';
import GetMovies from './components/GetMovies';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      active: '',
      movieData: [],
    };
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }
  
  addActiveClass = (e) =>{
    if(this.state.active) {
        this.setState({active: ''});
    } else {
        this.setState({active: true});
    }
  } 
  popularMovies = () => {
    return <GetMovies type="popular" />
  }
  topRatedMovies = () => {
    return <GetMovies type="topRated" />
  }
  upcomingMovies = () => {
    return <GetMovies type="upcoming" />
  }
  nowPlayingMovies = () => {
    return <GetMovies type="nowPlaying"/>
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navi-wrapper">
            <h3 className="site-title">Movie <span className="title-end">app</span></h3>
            <FontAwesomeIcon onClick={this.addActiveClass} className="menu-icon" icon={faBars}/>
            <div className={`navi-links ${this.state.active ? 'menu-active': ''}`}>
              <FontAwesomeIcon onClick={this.addActiveClass} className="close-menu-icon" icon={faTimes}/>
              <Link to="/">Home</Link>
              <Link to="/top-rated">Top rated</Link>
              <Link to="/upcoming">Upcoming </Link>
              <Link to="/now-playing">Now playing </Link>
            </div>
          </div>
          <Route exact path="/" component={this.popularMovies}/>
          <Route exact path="/react-movie-app" component={this.popularMovies}/>
          <Route path="/top-rated" component={this.topRatedMovies}/>
          <Route path="/upcoming" component={this.upcomingMovies}/>
          <Route path="/now-playing" component={this.nowPlayingMovies}/>
          <Route path="/search" component={this.searching}/>
        </div>
      </BrowserRouter>
      );
    }
}
export default App;
