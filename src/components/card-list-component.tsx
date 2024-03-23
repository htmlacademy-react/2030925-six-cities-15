import { useState } from 'react';
import { Nullable } from 'vitest';
import { CardType } from '../types/card-type';
import CardItemComponent from './card-item-component';

type CardListProps = {
  cards: CardType[];
  width: number;
  height: number;
  article: string;
  listType: string;
}

export default function CardListComponent(props: CardListProps): JSX.Element {
  const {cards, width, height, article, listType} = props;

  const [/*activeCard */, setActiveCard] = useState<Nullable<CardType>>(null); // Не стёр activeCard, чтобы не забыть добавить когда понадобится

  const handleHover = (card?: CardType) => {
    setActiveCard(card || null);
  };

  return(
    <div className={`${listType}`}>
      {cards.map((card) => (
        <CardItemComponent
          key={card.id}
          card={card}
          width={width}
          height={height}
          article={article}
          handleHover={handleHover}
        />
      ))}
    </div>
  );
}
