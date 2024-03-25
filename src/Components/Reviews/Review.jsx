import React from "react";

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
    <div>
      <h3>Username: </h3>
      <p>{formattedDate(review.created_at)}</p>
      <p>{review.content}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
};

export default Review;
