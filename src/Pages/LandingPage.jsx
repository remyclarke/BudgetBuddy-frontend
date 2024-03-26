import { useEffect } from "react";
import "../index.css";
const URL = import.meta.env.VITE_BASE_URL;

const LandingPage = () => {
  useEffect(() => {
    // Fetch call to the root route of your backend to get the CSRF token
    fetch(`${URL}`, {
      credentials: "include", // Important: Include cookies in the request
    })
      .then((response) => {
        if (response.ok) {
          console.log("XSRF-Token cookie should now be set.");
        }
      })
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);

  return <div className="square"></div>;
};

export default LandingPage;
