import React from "react";
import TeapotDetails from "../Components/Teapots/TeapotDetails";

const Show = ({ reviews, setReviews }) => {
  return (
    <div>
      <TeapotDetails
        reviews={reviews}
        setReviews={setReviews}
      />
    </div>
  );
};

export default Show;
