import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.topRated.filter((m) => {  
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;