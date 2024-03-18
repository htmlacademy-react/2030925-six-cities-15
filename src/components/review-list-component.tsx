import { Reviews } from '../mocks/reviews';
import ReviewItemComponent from './review-item-component';

export default function ReviewListComponent(): JSX.Element {
  return(
    <ul className="reviews__list">
      {Reviews.map((review) => (
        <ReviewItemComponent
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}
