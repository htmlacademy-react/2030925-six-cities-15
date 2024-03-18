import { MAX_RATING } from '../const';
import { ReviewType } from '../types/review-type';

type ReviewItemProps = {
  review: ReviewType;
};

export default function ReviewItemComponent(props: ReviewItemProps): JSX.Element {
  const {review} = props;
  const {date, user, comment, rating} = review;

  const ratingStarline = `${rating * (100 / MAX_RATING)}%`;
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingStarline}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{date.slice(0,10)}</time>
      </div>
    </li>
  );
}
