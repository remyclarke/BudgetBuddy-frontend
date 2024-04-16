import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../helpers/UserContext"; // Make sure this path matches where you've saved UserContext.js
import App from "./App.jsx";
import "./index.css";

const Root = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        {" "}
        {/* Wrap the App component with UserProvider */}
        <App />
      </UserProvider>
    </BrowserRouter>
  );
};

// Create and render your application root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
