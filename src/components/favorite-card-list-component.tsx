import { Cards } from '../mocks/cards';
import FavoriteCardItemComponent from './favorite-card-item-component';

export default function FavoriteCardListComponent(): JSX.Element {
  return(
    <div className="favorites__places">
      {Cards.map((card) => (
        <FavoriteCardItemComponent
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
}
