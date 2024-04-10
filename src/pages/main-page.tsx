import CardListComponent from '../components/card-list-component';
import HeaderComponent from '../components/header/header-component';
import { useAppSelector } from '../components/hooks/store';
import LocationsListComponent from '../components/location-list-component';
import MapComponent from '../components/map-component/map-component';

type MainPageProps = {
    cities: string[];
}

export default function MainPage({cities}: MainPageProps): JSX.Element {

  const cards = useAppSelector((state) => state.cards);

  const currentCityName = useAppSelector((state) => state.cityName);

  const currentCity = useAppSelector((state) => state.city);

  const currentCards = cards.filter((card) => card.city.name === currentCityName);

  const placesCount = currentCards.length;

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
                <b className="places__found">{placesCount} {placesCount === 1 ? 'place' : 'places'} to stay in {currentCityName}</b>
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
              <div className="cities__right-section">
                <MapComponent
                  mapType='cities__map'
                  city={currentCity}
                  cards={currentCards}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}
