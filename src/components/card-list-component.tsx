import { useState } from 'react';
import { Nullable } from 'vitest';
import { Cards } from '../mocks/cards';
import { CardType } from '../types/card-type';
import CardItemComponent from './card-item-component';

export default function CardListComponent(): JSX.Element {

  const [activeCard, setActiveCard] = useState<Nullable<CardType>>(null);

  const handleHover = (card?: CardType) => {
    setActiveCard(card || null);
  };

  return(
    <div className="cities__places-list places__list tabs__content">
      {Cards.map((card) => (
        <CardItemComponent
          key={card.id}
          card={card}
          handleHover={handleHover}
        />
      ))}
    </div>
  );
}
