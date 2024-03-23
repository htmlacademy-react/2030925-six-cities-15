import { Link } from 'react-router-dom';
import HeaderComponent from '../components/header/header-component';
import { AppRoute } from '../const';
import CardListComponent from '../components/card-list-component';
import { CardType } from '../types/card-type';

type FavoritesPageProps = {
  cards: CardType[];
}

export default function FavoritesPage({cards}: FavoritesPageProps): JSX.Element {
  return(
    <body>
      <div className="page">
        <HeaderComponent/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to={AppRoute.Main}>
                        <span>Amsterdam</span>
                      </Link>
                    </div>
                  </div>
                  <CardListComponent
                    cards={cards}
                    width={150}
                    height={110}
                    article='favorites'
                    listType='favorites__places'
                  />
                </li>
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
