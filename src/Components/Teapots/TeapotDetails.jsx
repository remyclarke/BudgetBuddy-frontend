import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReviewsIndex from "../Reviews/ReviewsIndex";

const URL = import.meta.env.VITE_BASE_URL;

const TeapotDetails = () => {
  const [teapot, setTeapot] = useState();

  const { teapot_id } = useParams();

  useEffect(() => {
    fetch(`${URL}/api/teapots/${teapot_id}`)
      .then((res) => res.json())
      .then((data) => setTeapot(data));
  }, [teapot_id]);

  return (
    <div>
      <section>
        {teapot && (
          <article>
            <img src={teapot.image} alt={teapot.name} />
            <h3>{teapot.name}</h3>
            <p>Price: ${teapot.price}.00</p>
            <p>Description: {teapot.description}</p>
            <p>Material: {teapot.material}</p>
            <p>
              Capacity: {teapot.capacity} cup
              {teapot.capacity === 1 ? "" : "s"}
            </p>
          </article>
        )}
      </section>
      <ReviewsIndex teapot_id={teapot_id} />
    </div>
  );
};

export default TeapotDetails;
