import React, {useState, useContext, useEffect } from "react";
import {MoviesContext} from '../contexts/moviesContext'
import { withRouter } from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage'
import {getRecommendMovies} from '../api/tmdb-api'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const RecommendPage = (props) => {
    const context = useContext(MoviesContext);
    const { id } = props.match.params;
    let [movies,SetMovies]=useState([])
    
    useEffect(() => {
      getRecommendMovies(id).then((res)=>{
        SetMovies(res)
      })
    }, [])
    
    return (
      <PageTemplate
        title="Recommend Movies"
        movies={movies} 
        action={(movie) => {
          return <AddToWatchListButton movie={movie} />;
        }}
      />
    
    );
  };
  
  export default withRouter(RecommendPage);