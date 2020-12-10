import React, {useEffect, useState} from "react";
// import {MoviesContext} from '../contexts/moviesContext'
import { withRouter } from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage'
import {getSimilarMovies} from '../api/tmdb-api'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
const SimilarPage = (props) => {
  const { id } = props.match.params;
  // const context = useContext(MoviesContext);
  let [movies,SetMovies]=useState([])
  useEffect(() => {
    getSimilarMovies(id).then((res)=>{
      SetMovies(res)
    })
  }, [])
  
  // movies=context.movies.filter((m) => {  
  //   return !("favorite" in m);
  // });
  return (
    <>
    {
      movies.length!==0 ? 
      <PageTemplate
        title="Similar Movies"
        movies={movies}  /* Changed */
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} />;
        }}
      />: 
      <p>Sorry! No Similar Movies</p>
    }
</>
  
  );
};

export default withRouter(SimilarPage);