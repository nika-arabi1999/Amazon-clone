import "./reviewsComments.scss";
import { comments } from "../../../../home/items";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ReviewsComments() {
  return (
    <div className="reviews-comments">
      {comments.map((comment) => {
        return <SingleComment name={comment.name} body={comment.body} />;
      })}
    </div>
  );
}

function SingleComment({ name, body }: { name: string; body: string }) {
  return (
    <div className="comment">
      <div className="comment_part comment_header">
        <div className="comment_header__avatar">
          <AccountCircleIcon sx={{ fontSize: 50, color: "lightgray" }} />
        </div>
        <div className="comment_header__username">{name}</div>
      </div>
      <div className="comment_part comment_rating">
        <div className="comment_rating__stars">★★★☆☆</div>
        <div className="comment_rating__title">It was wonderful</div>
      </div>
      <div className="comment_part comment_date">
        <div className="comment_date__date">
          Reviewed in the United States on June 3, 2024
        </div>
      </div>
      <div className="comment_part comment_body">
        <div className="comment_body__text">{body}</div>
      </div>
      <div className="comment_part comment_helpfulNumber">
        2 people found this helpful
      </div>
      <div className="comment_part comment_btns">
        <button className="comment_btns__helpful">Helpful</button>
        <a href="#" className="comment_btns__report">
          Report
        </a>
      </div>
    </div>
  );
}

export default ReviewsComments;
