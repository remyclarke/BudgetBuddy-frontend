import React from "react";
import TeapotDetails from "../Components/Teapots/TeapotDetails";

const Show = ({reviews, setReviews, userInfo}) => {
  return (
    <div>
      <TeapotDetails reviews={reviews} setReviews={setReviews} userInfo={userInfo}/>
    </div>
  );
};

export default Show;
