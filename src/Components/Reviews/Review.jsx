import { Link } from "react-router-dom";

const Review = ({ review, teapot_id }) => {
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
      <p className="center-grid">Rating: {"⭐️".repeat(review.rating)}</p>
      <p className="center-grid">{formattedDate(review.created_at)}</p>
      <p>{review.content}</p>
      <Link
        to={`/teapots/${teapot_id}/edit`}
        style={{ textDecoration: "none", color: "black" }}
        className="center-grid"
      >
        <button>Edit</button>
        <button>Delete</button>
      </Link>
    </div>
  );
};

export default Review;
