import MainPage from '../../pages/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import ErrorPage from '../../pages/error-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { CardType } from '../../types/card-type';

type AppComponentProps = {
  placesCount: number;
  authorizationStatus: AuthorizationStatus;
  cards: CardType[];
}

export default function AppComponent({placesCount, authorizationStatus, cards}: AppComponentProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placesCount={placesCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage cards={cards} authorizationStatus={authorizationStatus}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Error}
          element={<ErrorPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
