import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingPage from './pages/UpcomingPage'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import ActorsContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import AddActorReviewPage from './pages/addActorReviewPage'
import TopRatedPage from './pages/topRatedPage';
import similarMovie from './pages/similarMoviePage';
import WatchListPage from './pages/watchListPage';
import RecommendPage from './pages/RecommendPage';
import NowPlayingMovisPage from './pages/NowPlayingPage';
import PopularActorsPage from './pages/PopularActorPage';
import LikeActors from './pages/ILikePage';
import { FirebaseAppProvider } from 'reactfire' ;
import firebaseConfig from './firebaseConfig' ;
import SignUp from './components/signUp';
import Login from './components/login';
import Logout from './components/logout';
import 'antd/dist/antd.css';
const App = () => {
  return (
    < FirebaseAppProvider firebaseConfig = {firebaseConfig} >
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>    {/* NEW */}
            <ActorsContextProvider>
            <Switch>

          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/reviews/actorform" component={AddActorReviewPage} />
          <Route exact path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/watchList" component={WatchListPage} />
          <Route exact path="/movies/recommendMovie/:id" component={RecommendPage} />
          <Route exact path="/movies/nowplaying" component={NowPlayingMovisPage}/>
          <Route exact path="/actors" component={PopularActorsPage}/>
          <Route exact path="/actors/favorites" component={LikeActors}/>
          <Route path="/movies/Upcoming" component={UpcomingPage} />
          <Route path="/movies/toprated" component={TopRatedPage} />
          <Route exact path="/movies/similarMovie/:id" component={similarMovie}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
          <Route path="/movies/:id" component={MoviePage} />
          
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
            </Switch>
            </ActorsContextProvider>
            </GenresContextProvider>    {/* NEW */}
            </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    </FirebaseAppProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));