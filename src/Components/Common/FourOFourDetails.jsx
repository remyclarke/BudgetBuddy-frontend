import { Link } from "react-router-dom";
import "./FourOFourDetails.css";

const FourOFourDetails = () => {
  return (
    <div className="fof-details">
      <h1>Oops! Wrong teapot!</h1>
      <img
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711550075/TeaWhips-redcrispy_gpqtdx.jpg"
        alt="Red Teapot"
      />
      <Link to={"/teapots"}>Back to TeaWhips</Link>
    </div>
  );
};

export default FourOFourDetails;
