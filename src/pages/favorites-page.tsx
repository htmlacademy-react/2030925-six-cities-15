import { Link } from 'react-router-dom';
import HeaderComponent from '../components/header/header-component';
import { AppRoute } from '../const';
import FavoriteCardListComponent from '../components/favorite-card-list-component';

export default function FavoritesPage(): JSX.Element {

  return(
    <body>
      <div className="page">
        <HeaderComponent/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoriteCardListComponent/>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    </body>
  );
}
