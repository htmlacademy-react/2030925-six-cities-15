import LocationsItemComponent from './location-item-component';

type LocationsListProps = {
  cities: string[];
};

export default function LocationsListComponent({cities}: LocationsListProps): JSX.Element {
  return(
    <ul className="locations__list tabs__list">
      {cities.map((city: string) => (
        <LocationsItemComponent
          key={city}
          cityName={city}
        />
      ))}
    </ul>
  );
}
