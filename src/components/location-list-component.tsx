import { CITIES } from '../const';
import LocationsItemComponent from './location-item-component';

export default function LocationsListComponent(): JSX.Element {
  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city: string) => (
        <LocationsItemComponent
          key={city}
          cityName={city}
        />
      ))}
    </ul>
  );
}
