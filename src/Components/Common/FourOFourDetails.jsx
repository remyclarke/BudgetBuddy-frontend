import { Link } from "react-router-dom";
import "./FourOFourDetails.css";

const FourOFourDetails = () => {
  return (
    <div className="fof-details">
      <h1>Oops! Wrong teapot!</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmfdl1vT2SXOQ8vWyyNPJLv_mJQwPdRw2eg&usqp=CAU"
        alt="Red Teapot"
      />
      <Link to={"/teapots"}>Back to TeaWhips</Link>
    </div>
  );
};

export default FourOFourDetails;
