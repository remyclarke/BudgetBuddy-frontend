import { useOutletContext } from "react-router-dom";

const Dashboard = ({ handleLogout }) => {
  const { user } = useOutletContext(); // Access user data provided by the Outlet's context

  return (
    <div>
      <br />
      <br />
      <h2>Dashboard Component</h2>
      {console.log("user in dash", user.user)}
      <h1>Welcome, {user && user.username}</h1>

      {/* Use user data as needed, for example: */}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
