import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import SignIn from '../../pages/sign-in-screen/sign-in-screen';
import MyList from '../../pages/my-list-screen/my-list-screen';
import Film from '../../pages/movie-page-screen/movie-page-screen';
import AddReview from '../../pages/add-review-screen/add-review-screen';
import Player from '../../pages/player-screen/player-screen';
import Error from '../error/error';
import PrivateRoute from '../../components/private-route/private-route';
import TypeFilm from '../../types/film-type';
import FavoriteFilms from '../../types/favorite-films';
import Reviews from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type filmInfo = {
  title: string,
  genre: string,
  year: number,
  films: TypeFilm[],
  favouriteList: FavoriteFilms[],
  reviews: Reviews;
}

const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App({ title, genre, year, films, favouriteList, reviews }: filmInfo): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return ( <LoadingScreen /> );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = { AppRoute.Main }
          element = { <WelcomeScreen title={ title } genre={ genre } year={ year } films={ films } /> }
        />
        <Route
          path = { AppRoute.SignIn }
          element = { <SignIn /> }
        />
        <Route
          path = { AppRoute.MyList }
          element={
            <PrivateRoute
              authorizationStatus={ authorizationStatus }
            >
              <MyList myList={ favouriteList }/>
            </PrivateRoute>
          }
        />
        <Route
          path = { AppRoute.Film }
          element = { <Film films={ films } reviews={ reviews }/> }
        />
        <Route
          path={`/films/:id${ AppRoute.AddReview }`}
          element={
            <PrivateRoute
              authorizationStatus={ authorizationStatus }
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path = { AppRoute.Player }
          element = { <Player /> }
        />
        <Route
          path = { '*' }
          element = { <Error /> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
