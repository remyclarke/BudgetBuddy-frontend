import { useEffect } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useOutletContext(); // Access user data provided by the Outlet's context
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <h2>Welcome, {user && user.username.toUpperCase()}</h2>
      <Link to={"/teapots"}>
        <h3>Click to view our TeaWhips</h3>
      </Link>
      <img
        src={
          "https://res.cloudinary.com/dgifdj6nx/image/upload/v1711725914/TeaWhips12_vqn0s4.gif"
        }
        alt="teapot-gif"
      />
    </div>
  );
};

export default Dashboard;
