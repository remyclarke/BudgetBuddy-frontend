import {useEffect, useState} from 'react'
import { useParams, useNavigate, useOutletContext, Link } from 'react-router-dom'
import { useAuth } from "../Authorization/ProtectedRoute";

export const ReviewEditForm = ({setReviews, reviews, userInfo}) => {
    const { user } = useOutletContext()
    console.log(user)
    const navigate = useNavigate()
    const URL = import.meta.env.VITE_BASE_URL;
    // console.log(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
    const day = currentDate.getDate();
  
    
    const { teapot_id, review_id } = useParams()
    
    const [updatedReview, setUpdatedReview] = useState({
        content: '',
        rating: '',
        user_id: user.id,
        created_at: `${year}-${month}-${day}`,
    })
  

    const handleSubmit = (event) => {
      event.preventDefault()
       handleEdit(updatedReview)
    //   const csrfToken = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN=")).split("=")[1]; 
    //   fetch(`${URL}/api/teapots/${teapot_id}/reviews/${review_id}`, {
    //   method: 'PUT',
    //   headers: {
    //       'Content-Type': 'application/json',
    //       "CSRF-Token": csrfToken,
    //   },
    //   credentials: "include",
    //   body: JSON.stringify(updatedReview),
    //   })
    //   .then((res) => res.json())
    //   .then((data) => setReviews([data, ...reviews]))
    //   .then(() => navigate(`/teapots/${teapot_id}`))
    //   .catch((error) => console.error('catch', error))
  
      }

      const handleEdit = (updatedReview) => {
          const csrfToken = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN=")).split("=")[1]; 
        fetch(`${API}/teapots/${teapot_id}/reviews/${review_id}`, {
        method: 'PUT',
        headers: {
                'Content-Type': 'application/json',
                "CSRF-Token": csrfToken,
            },
            credentials: "include",
            body: JSON.stringify(updatedReview),
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            const copyReviewArray = [...reviews]
            const indexUpdatedReview = copyReviewArray.findIndex((review) => {
            return review.id === review_id
            })
            copyReviewArray[indexUpdatedReview] = responseJSON
            setReviews(copyReviewArray)
        })
        .catch((error) => console.error(error))
    }



      const handleTextChange = (event) => {
        setUpdatedReview({
          ...updatedReview,
          [event.target.id]: event.target.value,
        })
      }

      useEffect(() => {
        const csrfToken = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN=")).split("=")[1]; 
        fetch(`${URL}/api/teapots/${teapot_id}/reviews/${review_id}`, {
            credentials: "include"
            }).then(res => res.json()).then(data => setUpdatedReview(data.review)).catch(error => console.error(error))
      }, [])


    return (
      
      <div>
      {/* {children} */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={updatedReview.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />
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
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/teapots/${teapot_id}`}>Cancel</Link>
    </div>
    
    )
}
