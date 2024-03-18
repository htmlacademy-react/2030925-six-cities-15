import { Cards } from '../mocks/cards';
import NearPlacesItemComponent from './near-places-item-component';


export default function NearPlacesListComponent(): JSX.Element {
  const nearCards = Cards.slice(0,3);

  return(
    <div className="near-places__list places__list">
      {nearCards.map((card) => (
        <NearPlacesItemComponent
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
}
