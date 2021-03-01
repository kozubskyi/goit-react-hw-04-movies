import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import routes from './routes';
import Header from './Components/Header/Header';
// import HomePage from './Pages/HomePage/HomePage';
// import MoviesPage from './Pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage';
const HomePage = lazy(() => import('./Pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./Pages/MoviesPage/MoviesPage.js' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() =>
  import('./Pages/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */),
);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Routes">
        <Suspense fallback={<p style={{ margin: 0, padding: 0 }}>Loading...</p>}>
          <Switch>
            {/* <Route exact path={routes.home} component={HomePage} /> */}
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
