import { useEffect } from "react";
import "../index.css";
import Home from "../Components/Common/Home";
const URL = import.meta.env.VITE_BASE_URL;

const LandingPage = ({setToggleLogin}) => {
  useEffect(() => {
    // Fetch call to the root route of your backend to get the CSRF token
    fetch(`${URL}`, {
      credentials: "include", // Important: Include cookies in the request
    })
      .then((response) => {
        if (response.ok) {
          console.log("XSRF-Token cookie should now be set.");
          setToggleLogin(false)
        }
      })
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default LandingPage;
