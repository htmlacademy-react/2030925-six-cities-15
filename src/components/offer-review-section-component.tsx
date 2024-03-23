import ReviewListComponent from './review-list-component';
import ReviewFormComponent from './review-form-component';

type OfferReviewSectionProps = {
    reviewsCount: number;
    isAuth: boolean;
};

export default function OfferReviewSectionComponent({reviewsCount,isAuth}: OfferReviewSectionProps): JSX.Element {
  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewListComponent/>
      {isAuth ? <ReviewFormComponent/> : 'Only authorized users can send reviews'}
    </section>
  );
}
