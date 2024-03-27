import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ProtectedRoute from "./Components/Authorization/ProtectedRoute";
import Register from "./Components/Authorization/Register";
import Login from "./Components/Authorization/Login";
import Dashboard from "./Components/Authorization/Dashboard";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";
import LandingPage from "./Pages/LandingPage";
import Form from "./Pages/Form";
import ReviewAddForm from "./Components/Reviews/ReviewAddForm";
import NavBar from "./Components/Common/NavBar";
import { ReviewEditForm } from "./Components/Reviews/ReviewEditForm";


function App() {
  const [reviews, setReviews] = useState([]);

  const [userInfo, setUserInfo] = useState({});

  let variable;
  return (
    <>
      <NavBar />
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
        <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
        <Route path="/register" element={<Register />} />
        {/* Names of routes? */}
        <Route path="/teapots" element={<Index />} />
        <Route
          exact
          path="/teapots/:teapot_id"
          element={
            <Show
              reviews={reviews}
              setReviews={setReviews}
              userInfo={userInfo}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FourOFour />} />
      <Route element={<ProtectedRoute />}>
        {/* Place protected routes here */}
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo}/>} />
        <Route path="/teapots/:teapot_id/new" element={<ReviewAddForm userInfo={userInfo} reviews={reviews} setReviews={setReviews}/>} />
        <Route path="/teapots/:teapot_id/edit/:review_id" element={<ReviewEditForm reviews={reviews} setReviews={setReviews}/>} />
      </Route>
    </Routes>
     </>
  );
}

export default App;
