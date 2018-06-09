import React, {Component} from 'react';
import propTypes from 'prop-types'
import './Movie.css';

class Movie extends Component{
  // 부모 컴포넌트에서 얻는 정보가 무엇인지, 있는지 없는지(isRequired)알 수 있다. 
  static propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
  }
  render() {
    return (
    <div>
      <h1>{this.props.title}</h1>
      <MoviePoster poster={this.props.poster}/>
    </div>
    )
  }
}

class MoviePoster extends Component{
  static propTypes = {
    poster: propTypes.string.isRequired
  }
  render() {
    return (
      <img src={this.props.poster} />
    )
  }
}

export default Movie