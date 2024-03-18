type LocationItemProps = {
  cityName: string;
};


export default function LocationsItemComponent({cityName}: LocationItemProps): JSX.Element {

  return(
    <li className="locations__item">
      <a className='locations__item-link tabs__item' href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}
