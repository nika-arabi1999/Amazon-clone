import { LinearProgressBar } from "./ratingbars";
import "./reviewsStar.scss";

function ReviewsStars() {
  return (
    <div className="reviews-stars">
      <span className="rate">
        <span className="rate-first">
          <span className="rate-stars">
            &#9733;&#9733;&#9733;&#9734;&#9734;
          </span>
          <span className="rate-average">3.2 of 5</span>
        </span>
        <span className="rate-number">62 global ratings</span>
      </span>
      <LinearProgressBar percent={60} animateTiming={100} starNumber={5} />
      <LinearProgressBar percent={22} animateTiming={100} starNumber={4} />
      <LinearProgressBar percent={8} animateTiming={100} starNumber={3} />
      <LinearProgressBar percent={7} animateTiming={100} starNumber={2} />
      <LinearProgressBar percent={3} animateTiming={100} starNumber={1} />
    </div>
  );
}

export default ReviewsStars;
