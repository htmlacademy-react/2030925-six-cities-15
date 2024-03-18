import { useParams } from 'react-router-dom';
import HeaderComponent from '../components/header/header-component';
import { AuthorizationStatus, MAX_RATING } from '../const';
import { CardType } from '../types/card-type';
import ErrorPage from './error-page';
import GoodsListComponent from '../components/goods-list-component';
import OfferGalleryComponent from '../components/offer-gallery-component';
import NearPlacesListComponent from '../components/near-places-list-component';
import OfferReviewSectionComponent from '../components/offer-review-section-component';

type OfferPageProps = {
  cards: CardType[];
  authorizationStatus: AuthorizationStatus;
}

export default function OfferPage({cards, authorizationStatus}: OfferPageProps): JSX.Element {
  const { id } = useParams();
  const currentCard: CardType | undefined = cards.find((card: CardType) => card.id === id);

  if (!currentCard) {
    return <ErrorPage/>;
  }

  const ratingStarline = `${currentCard.rating * (100 / MAX_RATING)}%`;

  const {title, type, description, price, isPremium, isFavorite, rating, images, maxAdults, reviewsCount, maxBedrooms, goods, host} = currentCard;

  return(
    <body>
      <div className="page">
        <HeaderComponent/>
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <OfferGalleryComponent images={images}/>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: ratingStarline}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {maxBedrooms} {maxBedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                      Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <GoodsListComponent goods={goods}/>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="offer__user-name">
                      {host.name}
                    </span>

                    <span className="offer__user-status">
                      {host.isPro && 'Pro'}
                    </span>
                  </div>
                  <div className="offer__description">
                    {description}
                  </div>
                </div>
                <OfferReviewSectionComponent reviewsCount={reviewsCount} isAuth={authorizationStatus === AuthorizationStatus.Auth}/>
              </div>
            </div>
            <section className="offer__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearPlacesListComponent/>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}
