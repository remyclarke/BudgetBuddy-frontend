import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserProvider } from "../helpers/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";

function App() {
  const navigate = useNavigate();
  const [toggleLogin, setToggleLogin] = useState(false);
  const [user, setUser] = useState(null);

  async function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToggleLogin(false);
    navigate("/login");
  }
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<Login setToggleLogin={setToggleLogin} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={
            <Register setToggleLogin={setToggleLogin} setUser={setUser} />
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<Dashboard handleLogout={handleLogout} user={user} />}
          />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
