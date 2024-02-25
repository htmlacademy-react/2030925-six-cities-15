type CardItemProps = {
  isPremium: boolean;
  cardPrice: number;
  cardImg: string;
  cardBookmarks: string;
  cardDescription: string;
  cardType: string;
}

export default function CardItemComponent(props: CardItemProps): JSX.Element {
  const {isPremium,cardPrice,cardImg,cardBookmarks,cardDescription,cardType} = props;

  return(
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        {isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
        <a href="#">
          <img className="place-card__image" src={cardImg} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardPrice}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cardBookmarks} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden"></span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{cardDescription}</a>
        </h2>
        <p className="place-card__type">{cardType}</p>
      </div>
    </article>
  );
}

