import { Cards } from "../mocks/cards";
import CardItemComponent from "./card-item-component";

export default function CardListComponent() {
    return(
        <div className="cities__places-list places__list tabs__content">
            {Cards.map((card) => (
                <CardItemComponent
                    key={card.id}
                    isPremium={card.isPremium}
                    cardPrice={card.cardPrice}
                    cardBookmarks={card.cardBookmarks}
                    cardDescription={card.cardDescription}
                    cardImg={card.cardImg}
                    cardType={card.cardType}
                />
            ))}
      </div>
    )
}