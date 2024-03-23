import { Routes, Route, Link } from "react-router-dom";

import ProtectedRoute from "./Components/Authorization/ProtectedRoute";
import Register from "./Components/Authorization/Register";
import Login from "./Components/Authorization/Login";
import Dashboard from "./Components/Authorization/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Welcome to the Auth Starter</h1>
            <Link to="/login">Login</Link>
            <h2>If you are not logged in you cannot reach this route. Try!</h2>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        {/* Place protected routes here */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
