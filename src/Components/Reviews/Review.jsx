import { Link } from "react-router-dom";

const Review = ({ review }) => {
  const formattedDate = (reviewDate) => {
    const parts = reviewDate.split("-");
    const newReviewDate = new Date(parts[0], parts[1] - 1, parts[2]);
    return newReviewDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="review-card">
      <h3>Username: </h3>
      <p>{formattedDate(review.created_at)}</p>
      <p>{review.content}</p>
      <p>Rating: {review.rating}</p>
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Review;
