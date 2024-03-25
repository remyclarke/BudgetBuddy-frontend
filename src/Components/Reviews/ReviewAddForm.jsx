import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const ReviewAddForm = ({username, reviews, setReviews}) => {
  const { teapot_id } = useParams()
  const URL = import.meta.env.VITE_BASE_URL;
  console.log(username)
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
  const day = currentDate.getDate();
  console.log(`${year}-${month}-${day}`);

  console.log(username)
  const [newReview, setNewReview] = useState({
    content: '',
    rating: '',
    user_id: 1,
    created_at: `${year}-${month}-${day}`,
    updated_at: '',
  })
  const handleSubmit = (event) => {
    event.preventDefault()
  
    const csrfToken = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN=")).split("=")[1]; 
    fetch(`${URL}/api/teapots/${teapot_id}/reviews`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "CSRF-Token": csrfToken,
    },
    credentials: "include",
    body: JSON.stringify(newReview),
    })
    .then((res) => res.json())
    .then((data) => setReviews([data, ...reviews]))
    .catch((error) => console.error('catch', error))

    }

    const handleTextChange = (event) => {
      setNewReview({
        ...newReview,
        [event.target.id]: event.target.value,
      })
    }
  
    // useEffect(() => {
    //   fetch(`${URL}/api/users/${username}`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    // }, [username])
  return (
    
    <div>
    {/* {children} */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Review:</label>
      <textarea
        id="content"
        type="text"
        name="content"
        value={newReview.content}
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
        value={newReview.rating}
        onChange={handleTextChange}
      />
      <br />

      <input type="submit" />
    </form>
  </div>
  )
}

export default ReviewAddForm;
