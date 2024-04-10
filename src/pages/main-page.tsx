import CardListComponent from '../components/card-list-component';
import HeaderComponent from '../components/header/header-component';
import { useAppSelector } from '../components/hooks/store';
import LocationsListComponent from '../components/location-list-component';
import MapComponent from '../components/map-component/map-component';
import SortTypeComponent from '../components/sort-type-component';

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
                <SortTypeComponent/>
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
