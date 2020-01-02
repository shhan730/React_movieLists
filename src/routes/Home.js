import React from "react";
import axios from "axios";
import { Item } from 'semantic-ui-react'

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    movies.map()

    return (
      <section>
        {
          isLoading ? (
            <h1>Loading...</h1>
          ):(
            <div>
              <Item.Group items={movies}/>
              
            </div>
          )
        }
      </section>
    )
  }

}

export default Home;