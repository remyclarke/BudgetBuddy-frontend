import { useState, useEffect } from "react";
import Review from "./Review";

const URL = import.meta.env.VITE_BASE_URL;

const ReviewsIndex = ({ teapot_id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/teapots/${teapot_id}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data.allReviews));
  }, [teapot_id]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsIndex;
