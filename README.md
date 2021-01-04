# Assignment 1 - ReactJS app.

Name: Ruichen Pan

## Features.
 
 + Feature 1 - Add a watchList page which contains the users' watchlist from upcoming page
 + Feature 2 - Add a recommand button in upcoming page which can get recommand movies
 + Feature 3 - Add a topRated page which can get topRated movies from TMDB
 + Feature 4 - Add a nowPlaying page which can get nowPlaying movies from TMDB
 + Feature 5 - Add Similar button in topRated and nowplaying page which can get similar movies
 + Feature 6 - Add Popular Actors page which can get popular actors from TMDB
 + Feature 7 - Add Write Review button in popular actor page and favorite actor page
 + Feature 8 - Add favorite Actor Page which contains the actor users added before
 + Feature 9 - Add RemoveFromLike button in Favorite Actor Page which can delete the actor users add to favorite before
 + Feature 10 - Add Signup, Login and Logout funtion with firebase.

## Setup requirements.

User 'npm install' to download node_modules

## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/top_rated - get top_rated movies
+ https://api.themoviedb.org/3/movie/${movie_id}/similar - get similar movies
+ https://api.themoviedb.org/3/movie/${movie_id}/recommendations - get recommend movies
+ https://api.themoviedb.org/3/movie/now_playing - get Now_Playing Movies
+ https://api.themoviedb.org/3/person/popular - get popular actors
+ https://api.themoviedb.org/3/person/${id} - get detailed information on a specific actor.

## App Design.

### Component catalogue.

![][stories]

### UI Design.

![][NewThings]
>Shows new button and logo of TMDB and dropdown in the navigation bar

![][Login]
>Shows the login page

![][Signup]
>Shows the signup page

![][WrongInputSignup]
>Shows the signup page when users didn't type correct email addres and click the Sign up button

![][WrongInputSignup2]
>Shows the signup page when users didn't type the password and click the Sign up button

![][Logout]
>Shows the Logout alert

![][UILibrariesDropDown]
>Shows the DropDown got from ANTD.Click this dropdown button and then the page will show as the pictures

![][UILibrariesLogo]
>Shows the 'Like' Logo got from ANTD, and the button means'Add to Favorite'.

![][NowPlayingMovies]
>Shows the Now Playing movies.Users can view the now playing movies list here and  can check the similar movies from clicking the button

![][TopRatedMovies]
>Shows the Top Rated movies.Users can view the now playing movies list here and  can check the similar movies from clicking the button

![][WatchList]
>Shows the Watch List Movie Page.The moveis got from the user's click in the Upcoming page

![][SimilarButton]
>Shows the Similar Button. Click this then it will show the similar movie page 

![][SimilarMovies]
>Shows the Similar Movies page.

![][RecommendButton]
>Shows the Recommend Button. Click this then it will show the recommend movie page

![][RecommendMovies]
>Shows the Recommend Movies page

![][PopularActors]
>Shows the Popular Actors page.It contains two buttons.One is 'add to favorite' and another is write the review

![][ActorReviews]
>Shows the Actor Reviews page

![][ActorDetails]
>Shows the Actor Deatails page

![][PopularActorPageButtons]
>Shows the two buttons(Add to favorite and write reviews)

![][FavoriteActors]
>Shows the favorite actors page. There are two buttons here. User can click the one button to 'remove' the actor from this page and put it back to the popular actor page.And another button can navigate the page to write the review page

![][RemoveButton]
>Shows the remove button. Click this can delete the actor from favorite actor
## Routing.

+ /movies/favorites (Private) - displays the user's favorite movies selection.
+ /reviews/actorform (Public) - displays the actors review page.
+ /movies/watchList (Private) - displays the watchlist page.
+ /movies/recommendMovie/:id (Public) - displays the recommendmovies page.
+ /movies/nowplaying (Public) - displays the nowplaying movies page.
+ /actors (Public) - displays the popular actors page.
+ /actors/favorites (Private) - displays the user's favorite actors selection..
+ /movies/toprated (Public) - displays the top rated movies.
+ /movies/similarMovie/:id (Public) - displays the similar movies with the id.
+ /signup (Public) - displays the sign up page.
+ /login (Public) - displays the login page.
+ /actor/:id (Public) - displays the actors detailed information with the id.


### Data hyperlinking.

![][NavLink]
> Clicking the Top Rated, Watch List, Now Playing, Popular Actors and Favorite Actors can link to theses pages.

![][SimilarButton]
>Clicking the Check Similar Movies can link to the similar movies page

![][PopularActorPageButtons]
>Clicking the Write a Review Button can link to actor review page

![][ActorCard]
>Clicking the picture of actors can link to the details of actors.

![][UILibrariesDropDown]
>Clicking the Login can link to login page

![][NewThings]
>Clicking the Sign Up can link to sign up page

![][NewThings]
>Clicking the Log Out can get an alert


## Independent learning (If relevant).

1. Using Firebase to implement Sign Up, Login and Logout.(firebase Login Authentication, 2020).
2. UI Libraries called Ant Design. (Component Overview - Ant Design, 2020).


Reference
1. Blog.csdn.net. 2020. Firebase Login Authentication. [online] Available at: <https://blog.csdn.net/dfsgwe1231/article/details/107258662> [Accessed 16 December 2020].
2. Ant.design. 2020. Component Overview - Ant Design. [online] Available at: <https://ant.design/components/overview-cn/> [Accessed 16 December 2020].
---------------------------------
# Assignment 1 - Agile Software Practice.

Name: Ruichen Pan

## App Features.

 
+ Upcoming Movies page - Shows the upcoming movies. The header of this page should be Upcoming Movies. The movie title filter and genre function should run successfully.

Tests: cypress/integration/upcoming.spec.js

![][UpcomingMovies]

+ Top Rated page - Shows the top rated movies. The header of this page should be Top Rated Movies. The movie title filter and genre function should run successfully.

Tests: cypress/integration/topRatedPage.spec.js 

![][TopRatedMovies]

+ Now Playing page - Shows the Now Playing Movies. The header of this page should be Now Playing Movies. The movie title filter and genre function should run successfully.
  
Tests: cypress/integration/nowPlaying.spec.js 

![][NowPlaying]

+ Similar Movies page - Shows the Similar Movies. When it comes to top rated page or now playing movie page first, click the check similar page button, then it will navigate to similar movie page with the hearder of Similar Movies.And the url should contain the movie id.
  
Tests: cypress/integration/similar.spec.js 

![][SimilarMovies]

+ Recommend Movies page - Shows the Recommend Movies. When it comes to upcoming movie page first, add some movies into watchlist page.Before enter into the watchlist page, the login is needed.Then in Recommend Page, click the 'check recommend movie' button.Then the url should contain /recommendMovie/:id and display the recommend movies.
  
Tests: cypress/integration/recommendpage.spec.js 

![][RecommendMovies]

+ Watchlist Movies page - Shows the movies in WatchList. When it comes to upcoming movie page first, add some movies into watchlist page.Before enter into the watchlist page, the login is needed.Click the watch list in the navigation bar, the header should be Watch List Movies.If add one movie in to the watchlist, then the length of movies in watchlist page should be 1.
  
Tests: cypress/integration/watchListPage.spec.js 

![][WatchList]

+ User Test - The favorite page should be viewed after users authentication which means users cannot view this page before login and after logout.When click the Favorites in the navigation before login or after logout then the page will show the login page.
  
Tests: cypress/integration/user.spec.js 

![][Login]

+ PopularActor - Shows the Popular Actors. The header of this page should be Popular People after clicking Popular Actors in the navigation bar. If adding two actors into favorite actors then the length should decrease to 18.
  
Tests: cypress/integration/PopularActor.spec.js 

![][PopularActors]

+ Favorite Actors page - Shows the actors in Favorite Actors. The header will show Favorite Actors. This page can also remove the actors back to popular people list.
  
Tests: cypress/integration/favoriteActorPage.spec.js 

![][FavoriteActors]

+ Add Actor Review page - Click the Write a Review button in the actor card. Then the header of this page should be the name of this actor. The author and text should not be empty and the length of review could not be too short.
  
Tests: cypress/integration/addActorReviewPage.spec.js 

![][ActorReviews]

## Testing.

Cypress Dashboard URL:https://dashboard.cypress.io/projects/c8y1cf/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the Review author and review content are empty or the review is too short.
+ cypress/integration/user.spec.js - test when users want to enter in the favorite page if users did not login

---------------------------------

[stories]: ./public/Storybook.png
[TopRatedMovies]: ./public/TopRated.png
[UpcomingMovies]: ./public/UpcomingMovies.png
[NowPlaying]: ./public/NowPlaying.png
[ActorDetails]: ./public/ActorDetails.png
[ActorReviews]: ./public/ActorReviews.png
[PopularActorPageButtons]: ./public/ButtonsinPopularActors.png
[FavoriteActors]: ./public/FavoriteActors.png
[NewThings]: ./public/NewThings.png
[Login]: ./public/Login.png
[Logout]: ./public/Logout.png
[NowPlayingMovies]: ./public/NowPlayingMovies.png
[PopularActors]: ./public/PopularActors.png
[RecommendButton]: ./public/RecommendButton.png
[RecommendMovies]: ./public/RecommendMovies.png
[RemoveButton]: ./public/RemoveButton.png
[Signup]: ./public/Signup.png
[SimilarButton]: ./public/SimilarButton.png
[SimilarMovies]: ./public/SimilarMovies.png
[UILibrariesDropDown]: ./public/UILibrariesDropDown.png
[UILibrariesLogo]: ./public/UILibrariesLogo.png
[WatchList]: ./public/WatchList.png
[WrongInputSignup]: ./public/WrongInputSignup.png
[WrongInputSignup2]: ./public/WrongInputSignup2.png
[NavLink]: ./public/NavLink.png
[ActorCard]: ./public/ActorCard.png