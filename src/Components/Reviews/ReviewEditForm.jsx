import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useOutletContext,
  Link,
} from "react-router-dom";

const ReviewEditForm = ({ setReviews, reviews }) => {
  const { user } = useOutletContext();
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_BASE_URL;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
  const day = currentDate.getDate();

  const { teapot_id, review_id } = useParams();

  const [updatedReview, setUpdatedReview] = useState({
    content: "",
    rating: "",
    updated_at: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit(updatedReview);
    navigate(`/teapots/${teapot_id}`);
  };

  updatedReview.updated_at = `${year}-${month}-${day}`;

  const handleEdit = (updatedReview) => {
    const token = localStorage.getItem("token");
    fetch(`${URL}/api/teapots/${teapot_id}/reviews/${review_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(updatedReview),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === review_id;
        });
        copyReviewArray[indexUpdatedReview] = responseJSON;
        console.log(copyReviewArray.reverse());
        setReviews(copyReviewArray);
        // setReviews(copyReviewArray.reverse());

        setUpdatedReview({
          content: "",
          rating: "",
          updated_at: ``,
        });
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setUpdatedReview({
      ...updatedReview,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${URL}/api/teapots/${teapot_id}/reviews/${review_id}`, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    })
      .then((res) => res.json())
      .then((data) => setUpdatedReview(data.review))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {/* {children} */}
      <form onSubmit={handleSubmit} className="form-container">
        <section>
          <label htmlFor="content">Review:</label>
          <textarea
            style={{
              width: "90%",
              height: "90%",
              marginTop: "20px",
              border: "2px solid black",
              fontSize: "20px",
            }}
            id="content"
            type="text"
            name="content"
            value={updatedReview.content}
            placeholder="What do you think..."
            onChange={handleTextChange}
            required
          />
        </section>
        <section className="rating-input">
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            type="number"
            name="rating"
            min="1"
            max="5"
            step="1"
            value={updatedReview.rating}
            onChange={handleTextChange}
            required
          />
        </section>
        <section className="form-button-section">
          <input className="submit-button" type="submit" />
          <Link to={`/teapots/${teapot_id}`}>Cancel</Link>
        </section>
      </form>
    </div>
  );
};

export default ReviewEditForm;
