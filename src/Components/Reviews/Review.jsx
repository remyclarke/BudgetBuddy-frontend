import { Link, useParams, useOutletContext, useNavigate } from "react-router-dom";
import { useAuth } from "../Authorization/ProtectedRoute";
import { useState, useEffect } from "react";

const Review = ({ review}) => {
  const user = useAuth()
  const [username, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  // console.log(user.user.username)
  const {teapot_id} = useParams()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (user.isAuthenticated) {
  //     setUserName(user.user.username);
  //     setLoading(false);
  //   }
  // }, [user]);

  const formattedDate = (reviewDate) => {
    const parts = reviewDate.split("-");
    const newReviewDate = new Date(parts[0], parts[1] - 1, parts[2]);
    return newReviewDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // const handleClick = () => {
  //   console.log(userInfo.id)
  //   if(review.user_id !== userInfo.id) {
  //     alert(`Cannot update another users review`)
  //   } else {
  //     navigate(`/teapots/${teapot_id}/edit/${review.id}`)
  //   }
  // }
  return (
    <div className="review-card">
      {/* <h3>Username: {username}</h3> */}
      <h3>Username: {review.username}</h3>
      <p className="center-grid">Rating: {"⭐️".repeat(review.rating)}</p>
      <p className="center-grid">{formattedDate(review.created_at)}</p>
      <p>{review.content}</p>
      
        {user.isAuthenticated && (user.user.id === review.user_id) &&
        (
        <div>
          <Link to={`/teapots/${teapot_id}/edit/${review.id}`}>
          <button style={{ textDecoration: "none", color: "black" }}>Edit</button>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <button>Delete</button>
          </Link>
        </div>)
        } 
    </div>
  );
};

export default Review;
