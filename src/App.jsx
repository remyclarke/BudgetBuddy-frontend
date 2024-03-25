import { Routes, Route, Link } from "react-router-dom";

import ProtectedRoute from "./Components/Authorization/ProtectedRoute";
import Register from "./Components/Authorization/Register";
import Login from "./Components/Authorization/Login";
import Dashboard from "./Components/Authorization/Dashboard";
import ReviewForm from "./Components/Reviews/ReviewForm";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage />
          // <div>
          //   <h1>Welcome to the Auth Starter</h1>
          //   <Link to="/login">Login</Link>
          //   <h2>If you are not logged in you cannot reach this route. Try!</h2>
          //   <Link to="/dashboard">Dashboard</Link>
          // </div>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Names of routes? */}
      <Route path="/teapots" element={<Index />} />
      <Route path="/teapots/:id/reviews" element={<Show />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<FourOFour />} />
      <Route element={<ProtectedRoute />}>
        {/* Place protected routes here */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<ReviewForm />} />
      </Route>
    </Routes>
  );
}

export default App;
