import { useEffect } from "react";
import { Link } from "react-router-dom";
import Review from "./Review";

const URL = import.meta.env.VITE_BASE_URL;

const ReviewsIndex = ({ teapot_id, reviews, setReviews, userInfo }) => {

  useEffect(() => {
    fetch(`${URL}/api/teapots/${teapot_id}/reviews`, {
        credentials: "include", // Important: Include cookies in the request
      })
      .then((res) => res.json())
      .then((data) => setReviews(data.allReviews));
  }, [teapot_id]);

  return (
    <section className="reviews-container">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <Link to={`/teapots/${teapot_id}/new`} style={{ margin: "20px" }}>
          Be the first to add a review
        </Link>
      ) : (
        reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            teapot_id={teapot_id}
            userInfo={userInfo}
          />
        ))
      )}
    </section>
  );
};

export default ReviewsIndex;
