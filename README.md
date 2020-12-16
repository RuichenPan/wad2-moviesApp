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

[stories]: ./public/Storybook.png
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