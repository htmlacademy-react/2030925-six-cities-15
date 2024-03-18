import { Link } from 'react-router-dom';
import { AppRoute, MAX_RATING } from '../const';
import { CardType } from '../types/card-type';

type FavoriteCardItemProps = {
    card: CardType;
}

export default function FavoriteCardItemComponent(props: FavoriteCardItemProps): JSX.Element {
  const {card} = props;
  const {id, isPremium, isFavorite, previewImage, price, rating, title, type, city} = card;

  const ratingStarline = `${rating * (100 / MAX_RATING)}%`;

  return(

    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city.name}</span>
          </Link>
        </div>
      </div>
      <article className="favorites__card place-card">
        {isPremium &&
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>}
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={`${AppRoute.Offer}/${id}`}>
            <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: ratingStarline}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </li>
  );
}
