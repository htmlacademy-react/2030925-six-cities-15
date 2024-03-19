import { Link } from 'react-router-dom';
import { AppRoute, RATING_STARLINE } from '../const';
import { CardType } from '../types/card-type';

type CardItemProps = {
  card: CardType;
  handleHover: (card?: CardType) => void;
  width: number;
  height: number;
  article: string;
};

export default function CardItemComponent(props: CardItemProps): JSX.Element {
  const {card, handleHover, width, height, article} = props;

  const {id, isPremium, price, previewImage, isFavorite, title, type, rating} = card;

  const handleMouseOn = () => {
    handleHover(card);
  };

  const handleMouseLeave = () => {
    handleHover();
  };

  return(
    <article className={`${article}__card place-card`}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${article}__image-wrapper place-card__image-wrapper`}>
        {isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden"></span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: RATING_STARLINE(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

