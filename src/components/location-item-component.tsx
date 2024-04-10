import { cityMap } from '../mocks/cities';
import { getCards, setCity, setCityMap } from '../store/action';
import { useAppDispatch, useAppSelector } from './hooks/store';

type LocationItemProps = {
  cityName: string;
};


export default function LocationsItemComponent({cityName}: LocationItemProps): JSX.Element {

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.cityName);

  function selectCity(city: string) {

    const [cityMapActive] = cityMap.filter((card) => card.name === city);

    dispatch(setCity(cityName));
    dispatch(getCards());
    dispatch(setCityMap(cityMapActive));
  }

  return(
    <li className="locations__item">
      <a onClick={() => selectCity(cityName)} className={`locations__item-link tabs__item ${activeCity === cityName ? 'tabs__item--active' : ''}`} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}
