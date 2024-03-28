import CardListComponent from '../components/card-list-component';
import HeaderComponent from '../components/header/header-component';
import LocationsListComponent from '../components/location-list-component';
import MapComponent from '../components/map-component/map-component';
import { CardType, City } from '../types/card-type';

type MainPageProps = {
    placesCount: number;
    cards: CardType[];
    cities: string[];
    city: City;
}

export default function MainPage({placesCount, cards, cities, city}: MainPageProps): JSX.Element {
  return(
    <body>
      <div className="page page--gray page--main">
        <HeaderComponent/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsListComponent cities={cities}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesCount} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--closed">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <CardListComponent
                  cards={cards}
                  width={260}
                  height={200}
                  article='cities'
                  listType='cities__places-list places__list tabs__content'
                />
              </section>
              <div className="cities__right-section" style={{height: '500px'}}>
                <MapComponent city={city} cards={cards}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}
