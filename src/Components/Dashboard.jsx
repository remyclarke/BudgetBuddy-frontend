import { useOutletContext } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useOutletContext(); // Access user data provided by the Outlet's context

  return (
    <div>
      <h1>Welcome, {user && user.username.toUpperCase()}</h1>
      <h3>This is a protected Component called Dashboard</h3>
      {/* Use user data as needed, for example: */}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
